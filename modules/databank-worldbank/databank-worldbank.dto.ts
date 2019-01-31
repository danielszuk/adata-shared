import { IUnitDTO } from '../unit/unit.dto';
import { IMatrixDomainDTO } from '../matrix/matrix.dto';

export interface IDataBankWorldBankDTO {
  id: number;

  apiUri: string;

  lastUpdated: string;

  dataArrayIndex: number;

  uniqueNameQuery: string;

  nameQuery: string;

  interval: string;

  dim1Query: string;

  dim1: IUnitDTO;

  dim2Query: string;

  dim2: IUnitDTO;

  matrix: IMatrixDomainDTO[];
}
