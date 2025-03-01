export interface Game{
    id: number
    name: string
    cover : {
        url: string
    }
    aggregated_rating: number | undefined
    first_release_date: Date
}