import { IsUrl, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { UnitDomain } from '../unit/unit.domain';
import { MatrixDomain } from '../matrix/matrix.domain';
import { IDataBankWorldBankDTO } from './databank-worldbank.dto';

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
  dim1: UnitDomain;

  @IsNotEmpty()
  dim2Query: string;

  @IsNotEmpty()
  dim2: UnitDomain;

  @IsOptional()
  matrices: MatrixDomain[];
}
