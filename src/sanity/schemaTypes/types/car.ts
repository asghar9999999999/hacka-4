export interface Car {
    id: string;
    name: string;
    type: string;
    image: string;
    price: number;
    originalPrice: number;
    capacity: number;
    transmission: 'Manual' | 'Automatic' | string;
    fuelType: string;
    liked?: boolean;
}

export interface SearchFormData {
    location: string;
    date: string;
    time: string;
}

