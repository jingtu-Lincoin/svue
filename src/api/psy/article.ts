import axios from 'axios'
import {Url} from '../Url'

export const getListWithType = (data: {}) => {
    return axios.request({
        url: Url.article_listWithType,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const getList = (data: {}) => {
    return axios.request({
        url: Url.article_list,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const detail = (data: {}) => {
    return axios.request({
        url: Url.article_detail,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




