import { IUserDTO } from './user.dto';
import { VisualizationDomain } from '../../visualization/visualization.domain';

export class UserDomain implements IUserDTO {
  id: string;

  email: string;

  visualizations: VisualizationDomain[];
}
