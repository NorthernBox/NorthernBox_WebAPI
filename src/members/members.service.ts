import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class MembersService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    try {
      await this.mailService.sendMemberRegistration(createMemberDto);
      return this.prisma.members.create({ data: createMemberDto });
    } catch (error) {
      throw new Error('Failed to create mentee or send email' + error);
    }
  }

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, _updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return this.prisma.mentees.delete({ where: { id } });
  }
}
