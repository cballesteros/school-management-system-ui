export interface Page<T> {
    content: Array<T>
    pageNumber: number
    pageSize: number
    totalPages: number
    totalElements: number
}