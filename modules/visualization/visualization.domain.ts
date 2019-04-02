import { IsOptional, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { IVisualizationDomainDTO } from './visualization.dto';
import { UserDomain } from '../auth/user/user.domain';
import { MatrixColorDomain } from './matrix.color/matrix.color.domain';

export class VisualizationDomain implements IVisualizationDomainDTO {
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(63)
  title: string;

  @IsOptional()
  @MaxLength(500)
  description: string;

  @Type(() => MatrixColorDomain)
  matrices: MatrixColorDomain[];

  user: UserDomain;
}
