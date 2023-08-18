import { Injectable } from '@nestjs/common';
import { CreateMenteeDto } from './dto/create-mentee.dto';
import { UpdateMenteeDto } from './dto/update-mentee.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class MenteesService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}
  async create(createMenteeDto: CreateMenteeDto) {
    try {
      const result = await this.prisma.mentees.create({
        data: createMenteeDto,
      });
      await this.mailService.sendMenteeRegistrationConfirmation(
        createMenteeDto,
      );
      return result;
    } catch (error) {
      throw new Error('Failed to create mentee or send email' + error);
    }
  }

  findAll() {
    return `This action returns all mentees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentee`;
  }

  update(id: number, updateMenteeDto: UpdateMenteeDto) {
    return `This action updates a #${id} mentee`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentee`;
  }
}
