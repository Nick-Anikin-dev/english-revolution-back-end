import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle("English revolution Back-end")
      .setDescription("Rest API documentation")
      .setVersion("1.0.0")
      .addTag("")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    app.useGlobalPipes(
      new ValidationPipe({
          whitelist: true
      })
    );

    app.enableCors({
        origin: [
            "localhost:3000"
        ]
    });

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
