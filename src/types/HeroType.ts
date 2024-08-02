export interface HeroType {
    id: number;
    name: string;
    slug: string;
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}
