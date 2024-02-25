import request from '../../utils/request'
export function signUp(data = {}) {
    return request({
        url: '/v1/auth/register',
        method: 'POST',
        data
    })
}
export function signIn(data = {}) {
    return request({
        url: '/v1/auth/authenticate',
        method: 'POST',
        data
    })
}