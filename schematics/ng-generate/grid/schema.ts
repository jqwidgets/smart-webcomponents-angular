
import {Schema as ComponentSchema} from '@schematics/angular/component/schema';

export interface Schema extends ComponentSchema {
  /** Name of the project. */
  project: string;

  /** Name of pre-built theme to install. */
  theme: 'default' | 'red' | 'green' | 'orange' | 'pink' | 'purple' | 'dark' | 'dark-red' | 'dark-green' | 'dark-orange' | 'dark-pink' | 'dark-purple' | 'dark-turquoise' | 'custom';

  /** Whether to set up global typography styles. */
  typography: boolean;
}
