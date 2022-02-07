import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMoviesList} from "../interfaces";

export const moviesService = {
    getPopular: (page:number) => axiosService.get<IMoviesList>(`${urls.moviePopular}?page=${page}`),
}