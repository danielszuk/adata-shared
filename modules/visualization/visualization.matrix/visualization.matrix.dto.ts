import { Colors } from 'src/shared/enums/colors.enum';
import { IMatrixDomainDTO } from '../../matrix/matrix.dto';
import { IVisualizationDomainDTO } from '../visualization.dto';

export interface IVisualizationMatrixDomainDTO {
  id: number;

  visualization: IVisualizationDomainDTO;

  matrix: IMatrixDomainDTO;

  color: Colors;
}
