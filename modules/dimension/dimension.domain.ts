import { MaxLength, IsNotEmpty } from 'class-validator';
import { IDimensionDTO } from './dimension.dto';

export class DimensionDomain implements IDimensionDTO {
  id: number;

  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @MaxLength(10)
  unit: string;
}
