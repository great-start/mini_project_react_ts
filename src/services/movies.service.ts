import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMoviesList, IUpcomingMovies} from "../interfaces";

export const moviesService = {
    getPopular: (page:number) => axiosService.get<IMoviesList>(`${urls.moviePopular}?page=${page}`),
    getMoviesByGenre: (genre:number, page:number) => axiosService.get<IMoviesList>(`${urls.byGenre}?with_genres=${genre}&page=${page}`),
    getUpcoming: (page:number) => axiosService.get<IUpcomingMovies>(`${urls.upcoming}?page=${page}`)
}