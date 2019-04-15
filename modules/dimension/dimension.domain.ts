import { MaxLength, IsNotEmpty, IsOptional, Allow } from 'class-validator';
import { IDimensionDTO } from './dimension.dto';

export class DimensionDomain implements IDimensionDTO {
  @Allow()
  id: number;

  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsOptional()
  @MaxLength(20)
  unit: string;
}
