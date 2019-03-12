import { IVisualizationDomainDTO } from '../../visualization/visualization.dto';

export interface IUserDTO {
  id: string;

  email: string;

  visualizations: IVisualizationDomainDTO[];
}
