import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {INew} from "../interfaces/INew";
import {IRes} from "../interfaces/IRes";


export const newsServices = {
    getNews: (page:number):IRes<INew[]> => axiosService.get(urls.posts(page)).then(value => value.data),
}