import request from '../../utils/request'
export function getTeacherDetail(id) {
    return request({
        url: `/teacher/${id}`,
        method: 'GET',
    })
}
export function signTeacher(data) {
    return request({
        url: '/teacher',
        method: 'post',
        data
    })
}