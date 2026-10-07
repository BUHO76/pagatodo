import type { Account, Filters } from "./feature/accounts/types";

export const ALL = 'Todo';

export function filterAccounts(
    accounts: Account[],
    filters: Filters,
): Account[] {
    const q = filters.query.trim().toLowerCase();

    const filtered = accounts.filter(a => {
        const matchesQuery = 
        q === '' ||
        a.name.toLocaleLowerCase().includes(q) ||
        a.branch.city.toLocaleLowerCase().includes(q);
        const matchesCity = 
        filters.city === ALL || a.branch.city === filters.city;
        const matchesCategory =
        filters.category === ALL || a.category === filters.category;

        return matchesQuery && matchesCity && matchesCategory
    })

    return filtered.sort(
        filters.order === 'saldo' 
        ? (a, b) => b.balance - a.balance
        : (a, b) => a.balance - b.balance
    );
}

