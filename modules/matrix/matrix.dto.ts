import { UnitDomain } from '../unit/unit.domain';
import { ValueDomain } from './value/value.domain';
import { DataBankWorldBankDomain } from '../databank-worldbank/databank-worldbank.domain';

export interface IMatrixDomainDTO {
  id: number;

  uniqueName: string;

  name: string;

  dim1: UnitDomain;

  dim2: UnitDomain;

  values: ValueDomain[];

  sync: DataBankWorldBankDomain;
}
