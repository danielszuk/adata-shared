import { MatrixDomain } from '../matrix.domain';
import { IValueDomainDTO } from './value.dto';

export class ValueDomain implements IValueDomainDTO {
  id: number;

  matrix: MatrixDomain;

  dim1: string;

  dim2: string;
}
