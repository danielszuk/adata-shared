import { IMatrixDomainDTO } from '../matrix/matrix.dto';
import { IUserDTO } from '../auth/user/user.dto';
import { Colors } from 'src/shared/enums/colors.enum';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: { matrix: IMatrixDomainDTO; color: Colors }[];

  user: IUserDTO;
}
