export interface IMovie {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids: string[],
    id?: number,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string
    release_date?: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
}

export interface IMoviesList{
    page: number,
    results: IMovie[],
    total_pages?: number,
    total_results?: number
}

export interface IUpcomingMovies{
    dates?: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: IMovie[],
    total_pages?: number,
    total_results?: number
}