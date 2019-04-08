import { IUserDTO } from '../auth/user/user.dto';
import { IVisualizationMatrixDomainDTO } from './visualization.matrix/visualization.matrix.dto';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: IVisualizationMatrixDomainDTO[];

  user: IUserDTO;
}
