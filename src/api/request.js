import axios from 'axios'
//二次封装 设置请求拦截和响应
const requests = axios.create({
    //请求路径基于
    // baseURL: '/api',
    //请求超时时间
    timeout: 5000
});
// 添加请求拦截器
requests.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
requests.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response.data;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default requests