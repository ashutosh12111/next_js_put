export interface FeatureMember {
  id: number;
  name: string;
  profession: string | null;
  country: string | null;
  image: string; // Assuming image is a string representing the URL of the image
  description: string;
}
