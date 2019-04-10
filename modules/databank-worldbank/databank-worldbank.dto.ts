import { DataBankWorldBankDomainIntervals } from 'src/shared/modules/databank-worldbank/databank-worldbank.domain';
import { IDimensionDTO } from '../dimension/dimension.dto';

export interface IDataBankWorldBankDTO {
  id: number;

  apiUri: string;

  lastUpdated: string;

  uniqueNameQuery: string;

  nameQuery: string;

  interval: DataBankWorldBankDomainIntervals;

  dim1Query: string;

  dim1: IDimensionDTO;

  dim2Query: string;

  dim2: IDimensionDTO;

  matricesCount?: number;
}
