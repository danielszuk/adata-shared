import { IUserDTO } from '../auth/user/user.dto';
import { IMatrixColorDomainDTO } from './matrix.color/matrix.color.dto';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: IMatrixColorDomainDTO[];

  user: IUserDTO;
}
