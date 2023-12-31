export type Pagination<T> = {
    items: T[];
    total: number;
    limit: number;
    offset: number;
};
