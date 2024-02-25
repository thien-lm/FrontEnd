import request from '../../utils/request'
export function getCourseList() {
    return request({
        url: '/course',
        method: 'GET',
    })
}
export function getCourseDetail(id) {
    return request({
        url: `/course/${id}`,
        method: 'GET',
    })
}
export function getSegmentList(courseId) {
    return request({
        url: `/course-segments/course/${courseId}`,
        method: 'GET',
    })
}
export function getDocList(courseId) {
    return request({
        url: `/document/course/${courseId}`,
        method: 'GET',
    })
}
export function createCourse(data) {
    return request({
        url: '/course',
        method: 'post',
        data
    })
}
export function updateCourse(data) {
    return request({
        url: '/course',
        method: 'put',
        data
    })
}
export function deleteCourse(id) {
    return request({
        url: `/courses/${id}`,
        method: 'delete',
    })
}

