import {
  IsOptional,
  IsNotEmpty,
  MaxLength,
  MinLength,
  ArrayMaxSize,
  ArrayMinSize,
} from 'class-validator';

import { IVisualizationDomainDTO } from './visualization.dto';
import { UserDomain } from '../auth/user/user.domain';
import { VisualizationMatrixDomain } from './visualization.matrix/visualization.matrix.domain';

export class VisualizationDomain implements IVisualizationDomainDTO {
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(63)
  title: string;

  @IsOptional()
  @MaxLength(500)
  description: string;

  @ArrayMinSize(1)
  @ArrayMaxSize(6)
  matrices: VisualizationMatrixDomain[];

  user: UserDomain;
}
