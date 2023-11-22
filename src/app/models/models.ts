export interface Category{
    id:number;
    category: string;
    subcategory: string;
}

export interface suggestedProducts{
    banerimage: string;
    category: Category;
}

export interface NavigationItem{
    category: string;
    subcategories: string[];
}