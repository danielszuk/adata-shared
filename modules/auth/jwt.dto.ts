import { IJwtUserDTO } from './jwt.user.dto';

export interface IJwtDTO {
  user: IJwtUserDTO;
  provider: string;
  iat: number;
  exp: number;
}
