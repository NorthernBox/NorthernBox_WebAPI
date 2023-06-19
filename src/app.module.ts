import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { MailModule } from './mail/mail.module';
import { MenteesModule } from './mentees/mentees.module';

@Module({
  imports: [PrismaModule, MembersModule, MailModule, MenteesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
