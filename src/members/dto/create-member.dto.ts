// import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  
  firstname: string;
  
  lastname: string;
  
  email: string;
  
  phone: string;
  
  gender: string;
  
  nationality: string;
  
  based_location: string;
  
  education_level: string;
  
  field_of_study: string[];
  
  employed_status: boolean;
  
  job_title: string;
  
  skills: string[];
  
  interests: string[];
  
  joining_reason: string;
  
  other_info: string;
  
  consent: boolean;
}
