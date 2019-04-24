import { IMatrixDomainDTO } from '../../matrix/matrix.dto';
import { IVisualizationDomainDTO } from '../visualization.dto';
import { Colors } from '../../../enums/colors.enum';

export interface IVisualizationMatrixDomainDTO {
  id: number;

  visualization: IVisualizationDomainDTO;

  matrix: IMatrixDomainDTO;

  color: Colors;
}
