import { Controller, Post, Body, Res } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post('/stkPush')
  async initiateSTKPush(@Body() data: CreateDonationDto, @Res() res: any) {
    console.log('Data Here------', data);
    const result = await this.donationsService.initiateSTKPush(data, res);
    // You can handle the result here if needed.
    return result;
  }
}
