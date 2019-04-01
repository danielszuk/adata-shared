import {
  IsOptional,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsEnum
} from 'class-validator';
import { Type } from 'class-transformer';
import { MatrixDomain } from '../matrix/matrix.domain';
import { IVisualizationDomainDTO } from './visualization.dto';
import { UserDomain } from '../auth/user/user.domain';
import { Colors } from 'src/shared/enums/colors.enum';

class Matrix {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  matrix: MatrixDomain;

  @IsEnum(Colors)
  color: Colors;
}

export class VisualizationDomain implements IVisualizationDomainDTO {
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(63)
  title: string;

  @IsOptional()
  @MaxLength(500)
  description: string;

  @Type(() => Matrix)
  matrices: Matrix[];

  user: UserDomain;
}
