import { IUnitDTO } from '../unit/unit.dto';
import { IMatrixDomainDTO } from '../matrix/matrix.dto';
import { DataBankWorldBankDomainIntervals } from 'src/shared/modules/databank-worldbank/databank-worldbank.domain';

export interface IDataBankWorldBankDTO {
  id: number;

  apiUri: string;

  lastUpdated: string;

  uniqueNameQuery: string;

  nameQuery: string;

  interval: DataBankWorldBankDomainIntervals;

  dim1Query: string;

  dim1: IUnitDTO;

  dim2Query: string;

  dim2: IUnitDTO;

  matrices: IMatrixDomainDTO[];
}
