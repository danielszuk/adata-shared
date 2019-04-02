import { IMatrixColorDomainDTO } from './matrix.color.dto';
import { MatrixDomain } from '../../matrix/matrix.domain';
import { Type } from 'class-transformer';
import { Colors } from 'src/shared/enums/colors.enum';
import { IsEnum } from 'class-validator';

export class MatrixColorDomain implements IMatrixColorDomainDTO {
  id: number;

  @Type(() => MatrixDomain)
  matrix: MatrixDomain;

  @IsEnum(Colors)
  color: Colors;
}
