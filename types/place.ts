/**
 * Domain types for Places
 */

export interface Place {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string | null;
  date_inscribed?: string;
}
