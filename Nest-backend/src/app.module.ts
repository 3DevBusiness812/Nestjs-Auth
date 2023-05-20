import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entitiy';

console.log('DB_HOST: ', process.env.DB_HOST);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgresql',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
