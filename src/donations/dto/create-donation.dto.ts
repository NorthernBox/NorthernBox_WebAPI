import { ApiProperty } from '@nestjs/swagger';

export class CreateDonationDto {
  @ApiProperty()
  amount: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  Order_ID: number;
}
