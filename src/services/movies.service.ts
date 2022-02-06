import {axiosPicService, axiosMovService} from "./axios.service";

import {apiKey, picUrls, urls} from "../constants";

export const moviesService = {
    getPopular: (page:number) => axiosMovService.get(`${urls.moviePopular}?${apiKey}&page=${page}`).then(value => value.data),
    getPoster: (path: string) => axiosPicService.get(`${picUrls.w185}/${path}`).then(value => console.log(value.data)),
}