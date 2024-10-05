import { Module } from '@nestjs/common';
import { AmbassadorsService } from './ambassadors.service';
import { AmbassadorsController } from './ambassadors.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [AmbassadorsController],
  providers: [AmbassadorsService],
  imports: [PrismaModule, MailModule]
})
export class AmbassadorsModule {}
