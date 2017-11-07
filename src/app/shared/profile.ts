import { Event } from './event';

export interface Profile {
  avatar?: File;
  name: string;
  second_name: string;
  work_place: string;
  work_position: string;
  url: string;
  email: string;
  what_search: string;
  what_offer: string;
  scheduleFull: Event[];
}
