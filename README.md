# lazykitten

![lazykitten](http://www.pagecovers.com/covers/animals/cute_lazy_kitten_cat.jpg)
![](https://badge.fury.io/js/lazykitten.png)

有的时候要进行一些极端点儿的测试，比如当用户网速极其慢的情况下，脚本或者页面的加载方式是怎样的，lazykitten是为这种测试设计的小工具。

lazykitten 可以生成一些api或者页面，按照使用者设定的返回时间，延迟后返回请求。加载这些页面或者访问这些api的请求就会被lazykitten拖慢。这使得低网速下测试变得可能和有趣。

### 如何安装

`$ sudo npm install lazykitten -g` lazykitten可接受的参数有

`lazykitten -p NUMBER` 指定服务在监听哪个端口，例如：`lazykitten -p 6789` 将在`6789端口`开启服务

### 如何使用

`$ lazykitten` 会在`localhost:9494` 开启服务，这个时候访问或者嵌入如下url

````

GET/POST http://localhost:9494/api/:delay // 会根据delay设置的时间返回一个字符串
GET http://localhost:9494/html/:delay // 会根据delay设置的时间返回一个html页面
GET http://localhost:9494/image/:width/:height/:delay // 会根据delay设置的时间返回一个图像src（一只萌猫）

````

### 参数细节

- `delay[number]` 默认为秒，比如 `http://localhost:9494/api/3` 会在`3秒后`返回