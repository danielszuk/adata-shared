import { MatrixDomain } from '../matrix.domain';

export interface IValueDomainDTO {
  id: number;

  matrix: MatrixDomain;

  dim1: string;

  dim2: string;
}
