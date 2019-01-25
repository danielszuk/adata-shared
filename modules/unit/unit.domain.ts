import { Length } from 'class-validator';
import { IUnitDTO } from './unit.dto';

export class UnitDomain implements IUnitDTO {
  id: number;

  @Length(2, 63)
  name: string;
}
