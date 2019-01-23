import { Length } from 'class-validator';

export class UnitDomain {
  id: number;

  @Length(2, 63)
  name: string;
}
