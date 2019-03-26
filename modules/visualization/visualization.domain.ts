import {
  IsOptional,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize
} from 'class-validator';
import { MatrixDomain } from '../matrix/matrix.domain';
import { IVisualizationDomainDTO } from './visualization.dto';
import { UserDomain } from '../auth/user/user.domain';

export class VisualizationDomain implements IVisualizationDomainDTO {
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(63)
  title: string;

  @IsOptional()
  @MaxLength(500)
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  matrices: MatrixDomain[];

  user: UserDomain;
}
