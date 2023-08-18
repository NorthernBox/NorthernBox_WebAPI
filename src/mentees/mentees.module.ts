import { Module } from '@nestjs/common';
import { MenteesService } from './mentees.service';
import { MenteesController } from './mentees.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaModule } from '../prisma/prisma.module';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [MenteesController],
  providers: [MenteesService],
  imports: [PrismaModule, MailModule],
})
export class MenteesModule {}
