export interface Account {
    id: string;
    name: string;
    category: string;
    balance: number;
    lastTransaction: string;
    branch: {
        id: string;
        city: string;
    }
}

export type Filters = {
    query: string;
    city: string;
    category: string;
    order: Order;
}

export type Order = 'saldo' | 'reciente';