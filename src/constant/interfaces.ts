export interface Client {
    iamgeURL: string
    alt: string
}

export interface Feature {
    imageURL: string,
    title: string;
    content: string;
}

export interface Pricing {
    title: string;
    description: string;
    monthlyPrice: number;
    annuallyPrice: number;
    features: string[];
    isMostPopular?: boolean;
    glowPosition?: "right" | "left" | "center";
}

export type PricingPeriod = "monthly" | "annually"


export interface Testimonial {
    imageURL: string;
    name: string;
    role: string;
    review: string;
}

export interface FooterColumn {
    title: string;
    links: string[];
}