import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesEnum } from '../constants/roles/roles.enum';
import { SchoolService } from '../school/school.service';
import { TeacherService } from '../teacher/teacher.service';
import { StudentService } from '../student/student.service';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(User) private userRepository: Repository<User>,
      private readonly studentService: StudentService,
      private readonly teacherService: TeacherService,
      private readonly schoolService: SchoolService,
    ) {
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        return await Promise.all(users.map(async user => {
            let user_role;
            switch (user.role_type) {
                case RolesEnum.STUDENT:
                    user_role = await this.studentService.getStudentByUserId(user.id);
                    return { ...user, user_role };
                case RolesEnum.TEACHER:
                    user_role = await this.teacherService.getTeacherByUserId(user.id);
                    return { ...user, user_role };
                case RolesEnum.SCHOOL_SUPER_ADMIN:
                    user_role = await this.schoolService.getSchoolByUserId(user.id);
                    return { ...user, user_role };
            }
        }));
    }

    async getUserById(id) {
        return await this.userRepository.findOne({
            select: [
                'id', 'user_role_id', 'first_name', 'last_name', 'role_type', 'username', 'email',
            ],
            where: { id },
        });
    }

    async getUserRoleDetails(user: AuthUser) {
        switch (user.role) {
            case RolesEnum.STUDENT:
                return await this.studentService.getStudentByUserId(user.id);
            case RolesEnum.TEACHER:
                return await this.teacherService.getTeacherByUserId(user.id);
            case RolesEnum.SCHOOL_SUPER_ADMIN:
                return await this.schoolService.getSchoolByUserId(user.id);
        }
    }

    async createUser(dto: CreateUserDto) {
        const new_user = await this.userRepository.create(dto);
        const { password, ...user } = await this.userRepository.save(new_user);
        const new_user_role = await this.createUserRole(dto.role_type, user.id);
        await this.userRepository.update({ id: user.id }, {
            user_role_id: new_user_role.id,
        });
        return { ...user, user_role_id: new_user_role.id };
    }

    private async createUserRole(role_type: RolesEnum, user_id: number) {
        switch (role_type) {
            case RolesEnum.STUDENT:
                return await this.studentService.createStudent(user_id);
            case RolesEnum.TEACHER:
                return await this.teacherService.createTeacher(user_id);
            case RolesEnum.SCHOOL_SUPER_ADMIN:
                return await this.schoolService.createSchool(user_id);
            default:
                return await this.studentService.createStudent(user_id);
        }
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email } });
    }
}
