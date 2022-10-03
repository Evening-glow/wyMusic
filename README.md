# music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 问题一
二级路由path不用带斜杠

### 命令视图
同级下展示多个视图

### 问题二
添加动态样式属性时要带上单位！！！

### 问题三
配置跨域代理时，不能同时使用baseURL设置基于/api请求路径

### 问题四
给data属性是数组时添加元素，要通过push或者$set

### 问题五
axios通过实例发送请求时，全部使用get，通过传参改变method

### 问题六
到底是通过路由跳转更新数据，还是监视参数的改变去更新数据？
数据并不是在路由跳转时，路由组件重新挂载而重新发起请求的。
真相是：重新获取数据后，通过编程式路由导航跳转页面，改变地址栏
路由数据为什么要存在store中？方便获取请求结果，而不用await获取吗？还是有其他的原因

### 播放器
列表和当前播放下标存放在store中，通过相应的actions操作

1、一个统一的播放函数控制播放prograssPlay
2、通过数组下标控制播放类型，ended事件回调执行对应的播放函数
3、循环播放，当下标等于播放列表的长度-1时，下标回到零
4、单曲循环，直接添加loop属性  
问题：添加loop属性只能在后一次才能生效,而且添加后ended事件就不会被触发 
通过重置播放时间
5、随机播放，random随机获取整数范围内的数值赋值给播放下标