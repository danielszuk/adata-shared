import { IMatrixDomainDTO } from '../matrix/matrix.dto';

export interface IVisualizationDomainDTO {
  id: number;

  title: string;

  description: string;

  matrices: IMatrixDomainDTO[];
}
