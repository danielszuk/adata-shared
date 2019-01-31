import { IUnitDTO } from '../unit/unit.dto';
import { IValueDomainDTO } from './value/value.dto';
import { IDataBankWorldBankDTO } from '../databank-worldbank/databank-worldbank.dto';

export interface IMatrixDomainDTO {
  id: number;

  uniqueName: string;

  name: string;

  dim1: IUnitDTO;

  dim2: IUnitDTO;

  values: IValueDomainDTO[];

  sync: IDataBankWorldBankDTO;
}
