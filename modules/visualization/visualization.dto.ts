import { IUserDTO } from '../auth/user/user.dto';
import { IVisualizationMatrixDomainDTO } from './visualization.matrix/visualization.matrix.dto';
import { IDimensionDTO } from '../dimension/dimension.dto';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: IVisualizationMatrixDomainDTO[];

  user: IUserDTO;

  x: IDimensionDTO;

  y: IDimensionDTO;

  y2?: IDimensionDTO;
}
