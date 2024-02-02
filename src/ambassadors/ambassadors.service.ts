import { Injectable } from '@nestjs/common';
import { CreateAmbassadorDto } from './dto/create-ambassador.dto';
import { UpdateAmbassadorDto } from './dto/update-ambassador.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AmbassadorsService {

  constructor(private prisma: PrismaService, private mailService: MailService){}

  async create(createAmbassadorDto: CreateAmbassadorDto) {
    try{
      const result = await this.prisma.ambassador.create({ data: createAmbassadorDto})
      await this.mailService.sendAmbassadorReg(createAmbassadorDto)
      return result
    }catch(error){
      throw new Error('Failed to create ambassador/ send mail: ' + error)
    }
    // return this.prisma.ambassador.create({ data: createAmbassadorDto})
    // return 'This action adds a new ambassador';
  }

  findAll() {
    // return `This action returns all ambassadors`;
    return this.prisma.ambassador.findMany();
  }

  findOne(id: number) {
    // return `This action returns a #${id} ambassador`;
    return this.prisma.ambassador.findUnique({ where: {id}});
  }

  update(id: number, updateAmbassadorDto: UpdateAmbassadorDto) {
    return `This action updates a #${id} ambassador`;
  }

  remove(id: number) {
    return `This action removes a #${id} ambassador`;
  }
}
