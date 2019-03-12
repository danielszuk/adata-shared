import { IMatrixDomainDTO } from '../matrix/matrix.dto';
import { IUserDTO } from '../auth/user/user.dto';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: IMatrixDomainDTO[];

  user: IUserDTO;
}
