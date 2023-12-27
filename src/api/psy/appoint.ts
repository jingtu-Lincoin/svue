import axios from 'axios'
import {Url} from '../Url'

export const getList = (data: {}) => {
    return axios.request({
        url: Url.appoint_list,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const add = (data: {}) => {
    return axios.request({
        url: Url.appoint_add,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const getUserAppoints = (data: {}) => {
    return axios.request({
        url: Url.appoint_getUserAppoints,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




