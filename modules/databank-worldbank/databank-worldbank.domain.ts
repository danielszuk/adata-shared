import { IsUrl, IsNotEmpty, IsEnum } from 'class-validator';
import { IDataBankWorldBankDTO } from './databank-worldbank.dto';
import { DimensionDomain } from '../dimension/dimension.domain';

export enum DataBankWorldBankDomainIntervals {
  daily = 'daily',
  monthly = 'monthly',
  yearly = 'yearly',
}

export class DataBankWorldBankDomain implements IDataBankWorldBankDTO {
  id: number;

  @IsUrl()
  apiUri: string;

  lastUpdated: string;

  @IsNotEmpty()
  uniqueNameQuery: string;

  @IsNotEmpty()
  nameQuery: string;

  @IsEnum(DataBankWorldBankDomainIntervals)
  @IsNotEmpty()
  interval: DataBankWorldBankDomainIntervals;

  @IsNotEmpty()
  dim1Query: string;

  @IsNotEmpty()
  dim1: DimensionDomain;

  @IsNotEmpty()
  dim2Query: string;

  @IsNotEmpty()
  dim2: DimensionDomain;
}
