import { Product, User } from "./moduleTypes";

export interface RootState {
    user: UserState;
    products: ProductState;
}

export interface UserState {
    currentUser: User | null;
    isLoading: boolean;
    error: string | null;
}

export interface ProductState {
    items: Product[];
    isLoading: boolean;
    error: string | null;
}

