import { berries } from './tberries/tBerries';
import { decorative } from './tdecorative/tDecorative';
import { fruinful } from './tfruinful/tFruinful';
import { roses } from './troses/tRoses';

export type AllItems = {
  [key: string]: Item[];
};
export type Item = {
  id: number;
  cls: string;
  name: string;
  height: string;
  maturation: string;
  details: string;
  img: string;
};

export const allData: AllItems = { berries, decorative, fruinful, roses };
