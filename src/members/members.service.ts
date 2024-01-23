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
      const result = await this.prisma.members.create({
        data: createMemberDto,
      });
      await this.mailService.sendMemberRegistration(createMemberDto);
      return result;
    } catch (error) {
      throw new Error('Failed to create member or send email' + error);
    }
  }

  findAll() {
    // return `This action returns all members`;
    return this.prisma.members.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, _updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return this.prisma.members.delete({ where: { id } });
  }

  removeAll() {
    return this.prisma.members.deleteMany()
  }
}
