import { IVisualizationMatrixDomainDTO } from './visualization.matrix.dto';
import { MatrixDomain } from '../../matrix/matrix.domain';
import { Colors } from 'src/shared/enums/colors.enum';
import { IsEnum } from 'class-validator';
import { VisualizationDomain } from 'src/modules/visualization/visualization.domain';

export class VisualizationMatrixDomain
  implements IVisualizationMatrixDomainDTO {
  id: number;

  visualization: VisualizationDomain;

  matrix: MatrixDomain;

  @IsEnum(Colors)
  color: Colors;
}
