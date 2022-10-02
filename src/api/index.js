//统一管理发送的请求接口
// http://localhost:3000/personalized 参数：limit指定获取数量 获取推荐歌单
import requests from "./request";
export function reqRecommendPlayList() {
    return requests.get('/api/personalized', {
        method: 'get',
        params: {
            limt: 18
        }
    })
}

// /top/album 获取新碟上架列表
export const reqAlbumList = () => requests.get('/api/top/album', {
    method: 'get'
});

// /toplist 获取所有排行榜列表 之后要通过slice分为两大块
export const reqAllList = () => requests.get('/api/toplist', { method: 'get' })

// /toplist/detail 获取所有榜单内容摘要 榜单信息不全只有前三个歌曲
export const reqListDetail = () => requests.get('/api/toplist/detail', { method: 'get' })

export const reqPlayListCommend = (params) => requests.get('/api/comment/playlist', { method: 'post', params })

//获取歌单 /top/playlist 有参数
export const reqPlayList = (params) => requests.get('/api/top/playlist', { method: 'post', params })
//搜索建议
export const reqGuessKeyword = (params) => requests.get('/api/search/suggest', { method: 'post', params })

//搜索结果
export const reqSearch = (params) => requests.get('/api/cloudsearch', {
    method: 'post', params
})
//使用歌单详情接口,传入排行榜 id 获取排行榜详情数据(排行榜也是歌单的一种)
export const reqPlayListDetail = (params) => requests.get('/api/playlist/detail', { method: 'post', params })

///api/song/enhance/player/url
export const reqSong = (params) => requests.get('/get/song/enhance/player/url', { method: 'post', params })