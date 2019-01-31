import { IsUrl, IsNotEmpty, IsOptional } from 'class-validator';
import { UnitDomain } from '../unit/unit.domain';
import { MatrixDomain } from '../matrix/matrix.domain';

export class DataBankWorldBankDomain {
  id: number;

  @IsUrl()
  apiUri: string;

  lastUpdated: string;

  @IsNotEmpty()
  dataArrayIndex: number;

  @IsNotEmpty()
  uniqueNameQuery: string;

  @IsNotEmpty()
  nameQuery: string;

  @IsNotEmpty()
  interval: string;

  @IsNotEmpty()
  dim1Query: string;

  @IsNotEmpty()
  dim1: UnitDomain;

  @IsNotEmpty()
  dim2Query: string;

  @IsNotEmpty()
  dim2: UnitDomain;

  @IsOptional()
  matrix: MatrixDomain[];
}
