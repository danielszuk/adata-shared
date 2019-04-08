import { ValueDomain } from './value/value.domain';
import { DataBankWorldBankDomain } from '../databank-worldbank/databank-worldbank.domain';
import { IMatrixDomainDTO } from './matrix.dto';
import { DimensionDomain } from '../dimension/dimension.domain';
import { MinLength } from 'class-validator';
import { VisualizationMatrixDomain } from '../visualization/visualization.matrix/visualization.matrix.domain';

export class MatrixDomain implements IMatrixDomainDTO {
  id: number;

  uniqueName: string;

  name: string;

  dim1: DimensionDomain;

  dim2: DimensionDomain;

  values: ValueDomain[];

  sync: DataBankWorldBankDomain;

  visualizationMatrices: VisualizationMatrixDomain[];
}
