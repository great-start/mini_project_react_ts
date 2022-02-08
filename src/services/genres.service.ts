import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenres, IMoviesList} from "../interfaces";

export const genresService = {
    getAllGenres: () => axiosService.get<IGenres>(urls.allGenres)
}