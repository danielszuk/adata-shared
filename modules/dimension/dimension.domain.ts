import { MaxLength, IsNotEmpty, IsOptional } from 'class-validator';
import { IDimensionDTO } from './dimension.dto';

export class DimensionDomain implements IDimensionDTO {
  id: number;

  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsOptional()
  @MaxLength(20)
  unit: string;
}
