import { PickType } from '@nestjs/swagger';
import { User } from '../user.schema';

export class signUpRequestDto extends PickType(User, [
  'email',
  'name',
  'password',
] as const) {}