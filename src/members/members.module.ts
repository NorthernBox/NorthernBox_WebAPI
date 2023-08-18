import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule, MailModule],
})
export class MembersModule {}
