import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  nationality: string;
  @ApiProperty()
  based_location: string;
  @ApiProperty()
  education_level: string;
  @ApiProperty()
  field_of_study: string[];
  @ApiProperty()
  employed_status: boolean;
  @ApiProperty()
  job_title: string;
  @ApiProperty()
  skills: string[];
  @ApiProperty()
  interests: string[];
  @ApiProperty()
  joining_reason: string;
  @ApiProperty()
  other_info: string;
  @ApiProperty()
  consent: boolean;
}
