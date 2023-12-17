import axios from 'axios'
import {Url} from '../Url'

/**
 * 使用密码登录
 * @param data
 */
export const loginWithPassword = (data: {
    tel: string
    password: string
}) => {
    return axios.request({
        url: Url.loginWithPassword,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}
/**
 * 使用验证码登录
 * @param data
 */
export const loginWithValidCode = (data: {
    tel: string
    validCode: string
}) => {
    return axios.request({
        url: Url.loginWithValidCode,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const register = (data: {}) => {
    return axios.request({
        url: Url.register,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const getValidCode = (data: {}) => {
    return axios.request({
        url: Url.getValidCode,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const recharge = (data: {}) => {
    return axios.request({
        url: Url.recharge,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const getUserInfo = (data: {}) => {
    return axios.request({
        url: Url.getUserInfo,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const weixinLogin = (data: {}) => {
    return axios.request({
        url: Url.weixinLogin,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




