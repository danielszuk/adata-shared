import { IVisualizationMatrixDomainDTO } from './visualization.matrix.dto';
import { MatrixDomain } from '../../matrix/matrix.domain';
import { VisualizationDomain } from '../visualization.domain';
import { IsEnum } from 'class-validator';
import { Colors } from '../../../enums/colors.enum';

export class VisualizationMatrixDomain
  implements IVisualizationMatrixDomainDTO {
  id: number;

  visualization: VisualizationDomain;

  matrix: MatrixDomain;

  @IsEnum(Colors)
  color: Colors;
}
