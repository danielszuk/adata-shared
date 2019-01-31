import { IMatrixDomainDTO } from '../matrix.dto';

export interface IValueDomainDTO {
  id: number;

  matrix: IMatrixDomainDTO;

  dim1: string;

  dim2: string;
}
