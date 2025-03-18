export interface Game{
    id: number
    name: string
    cover : {
        url: string
    }
    total_rating: number | undefined
    first_release_date: Date
    genres: [
        {
            name: string
        }
    ]
}