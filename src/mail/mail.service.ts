import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../members/dto/create-member.dto';
// import { CreateMenteeDto } from '../mentees/dto/create-mentee.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  // async sendMenteeRegistrationConfirmation(createMenteeDto: CreateMenteeDto) {
  //   // const url = `example.com/auth/confirm?token=${token}`;

  //   await this.mailerService.sendMail({
  //     to: createMenteeDto.email,
  //     subject: 'Welcome',
  //     template: './confirmation',
  //     context: {
  //       name: createMenteeDto.fullname,
  //     },
  //   });
  // }

  async sendMemberRegistration(createMemberDto: CreateMemberDto) {
    // const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: createMemberDto.email,
      subject: 'Welcome To NorthernBox',
      template: 'membership',  // Update the template path
      context: {
        name: createMemberDto.firstname + ' ' + createMemberDto.lastname,
      },
    });
}

}
