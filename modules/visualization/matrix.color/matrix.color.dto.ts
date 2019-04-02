import { Colors } from 'src/shared/enums/colors.enum';
import { IMatrixDomainDTO } from '../../matrix/matrix.dto';

export interface IMatrixColorDomainDTO {
  id: number;

  matrix: IMatrixDomainDTO;

  color: Colors;
}
