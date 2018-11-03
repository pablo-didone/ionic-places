export interface IPlace {
  id?: string;
  name: string;
  address: string;
  description?: string;
  type: 'inside' | 'outside';
}