import id1 from './id1.jpeg';
export type Item = {
  id: number;
  name: string;
  details: Idetails;
  img: string;
};
export type Idetails = {
  season: string;
  placeSoil: string;
  technique: string;
  fertilizers: string;
};

export const Details: Item[] = [
  {
    id: 1,
    name: 'вишні/черешні',
    details: {
      season: 'осінь',
      placeSoil: 'грунт',
      technique: 'в землю',
      fertilizers: 'переглній',
    },
    img: id1,
  },
  {
    id: 2,
    name: 'вишні/черешні',
    details: {
      season: 'осінь',
      placeSoil: 'грунт',
      technique: 'в землю',
      fertilizers: 'переглній',
    },
    img: id1,
  },
  {
    id: 3,
    name: 'вишні/черешні',
    details: {
      season: 'осінь',
      placeSoil: 'грунт',
      technique: 'в землю',
      fertilizers: 'переглній',
    },
    img: id1,
  },
];
