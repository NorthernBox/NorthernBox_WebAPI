import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from 'src/members/dto/create-member.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMenteeRegistrationConfirmation(createMemberDto: CreateMemberDto) {
    // const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: createMemberDto.email,
      subject: 'Welcome',
      template: './confirmation',
      context: {
        name: createMemberDto.fullname,
      },
    });
  }
}
