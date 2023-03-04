import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RolesEnum } from '../constants/roles/roles.enum';
import { RequestForCooperationStatus } from './enums/request-for-cooperation-status.enum';

@Entity('requests-for-cooperation')
export class RequestForCooperation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RolesEnum,
    nullable: false,
  })
  from: RolesEnum;

  @Column({
    type: 'enum',
    enum: RolesEnum,
    nullable: false,
  })
  to: RolesEnum;

  @Column({
    type: 'integer',
    nullable: false,
  })
  initiator_id: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  recipient_id: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  message: string;

  @Column({
    type: 'enum',
    enum: RequestForCooperationStatus,
    nullable: false,
    default: RequestForCooperationStatus.PENDING,
  })
  status: RequestForCooperationStatus;
}
