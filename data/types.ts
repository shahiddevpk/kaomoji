/** Shape for the kaomoji catalog. Curated catalog shape used by data/items.ts. */
export type Kaomoji = {
  id: string;
  face: string;
  name: string;
  categories: string[];
  tags: string[];
  aliases: string[];
  popular?: boolean;
};
