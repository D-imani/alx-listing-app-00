export interface CardProps{

}
export interface ButtonProps{
    
}
export interface PropertyProps{
    name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}