import request from '../../utils/request'
export function getCategory(courseId) {
    return request({
        url: '/category',
        method: 'GET',
    })
}