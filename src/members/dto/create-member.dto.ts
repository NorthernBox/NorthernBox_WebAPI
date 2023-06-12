import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty()
  fullname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  coding_experience: string;

  @ApiProperty()
  programming_languages: string[];

  @ApiProperty()
  projects: boolean;

  @ApiProperty()
  project_links: string;

  @ApiProperty()
  areas_of_interest: string[];

  @ApiProperty()
  tech_framework_to_learn: string[];

  @ApiProperty()
  goals_objectives: string;

  @ApiProperty()
  achivement_target: string;
}
