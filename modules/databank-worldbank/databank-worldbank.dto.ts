import { IDimensionDTO } from '../dimension/dimension.dto';
import { DataBankWorldBankDomainIntervals } from './databank-worldbank.domain';

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
