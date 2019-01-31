import { UnitDomain } from '../unit/unit.domain';
import { MatrixDomain } from '../matrix/matrix.domain';

export interface IDataBankWorldBankDTO {
  id: number;

  apiUri: string;

  lastUpdated: string;

  dataArrayIndex: number;

  uniqueNameQuery: string;

  nameQuery: string;

  interval: string;

  dim1Query: string;

  dim1: UnitDomain;

  dim2Query: string;

  dim2: UnitDomain;

  matrix: MatrixDomain[];
}
