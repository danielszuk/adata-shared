import {
  IsOptional,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';
import { MatrixDomain } from '../matrix/matrix.domain';

export class VisualizationDomain {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(63)
  title: string;

  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  matrices: MatrixDomain[];
}
