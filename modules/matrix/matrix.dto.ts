import { IValueDomainDTO } from './value/value.dto';
import { IDataBankWorldBankDTO } from '../databank-worldbank/databank-worldbank.dto';
import { IDimensionDTO } from '../dimension/dimension.dto';

export interface IMatrixDomainDTO {
  id: number;

  uniqueName: string;

  name: string;

  dim1: IDimensionDTO;

  dim2: IDimensionDTO;

  values: IValueDomainDTO[];

  sync: IDataBankWorldBankDTO;
}
