import axios from 'axios'
import {Url} from '../Url'

export const getList = (data: {}) => {
    return axios.request({
        url: Url.messageBoard_list,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const add = (data: {}) => {
    return axios.request({
        url: Url.messageBoard_add,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




