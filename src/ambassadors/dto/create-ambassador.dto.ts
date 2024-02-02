export class CreateAmbassadorDto {

  fullname: string

  email: string

  phone: string

  location: string

  age: number

  gender: string

  education: string

  community_experience: boolean

  role_community_experience?: string

  areas_of_expertise: string[]

  skills: string[]

  info_source: string

  consent: boolean
}
