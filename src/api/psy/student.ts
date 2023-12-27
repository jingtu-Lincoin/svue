import axios from 'axios'
import {Url} from '../Url'

/**
 * 使用密码登录
 * @param data
 */
export const login = (data: {}) => {
    return axios.request({
        url: Url.student_login,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const add = (data: {}) => {
    return axios.request({
        url: Url.student_add,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const detail = (data: {}) => {
    return axios.request({
        url: Url.student_detail,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const changePassword = (data: {}) => {
    return axios.request({
        url: Url.student_changePassword,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const updateHead = (data: {}) => {
    return axios.request({
        url: Url.student_updateHead,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




