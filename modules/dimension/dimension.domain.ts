import { MaxLength, IsNotEmpty, Length } from 'class-validator';
import { IDimensionDTO } from './dimension.dto';

export class DimensionDomain implements IDimensionDTO {
  id: number;

  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @Length(0, 20)
  unit: string;
}
