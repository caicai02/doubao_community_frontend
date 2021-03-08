import request from '@/utils/request'

export function getBillboard() {
    return request({
        //此url会追加到@/utils/request的baseURL的后面
        url: '/billboard/show',
        method: 'get'
    })
}