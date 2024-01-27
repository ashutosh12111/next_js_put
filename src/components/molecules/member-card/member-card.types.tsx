export interface IMemberCard {
  id: number;
  slug: string;
  name: string;
  profession: string | null;
  country: string;
  image: string; // Assuming image is a string representing the URL of the image
  description: string;
  type: "featured" | "default";
}
