# ![logo](http://ww3.sinaimg.cn/large/61ff0de3gw1e6s9zh24s8g203c02c0w8.gif) lazykitten ![](https://badge.fury.io/js/lazykitten.png)

![lazykitten](http://www.pagecovers.com/covers/animals/cute_lazy_kitten_cat.jpg)

有的时候要进行一些极端点儿的测试，比如当用户网速极其慢的情况下，脚本或者页面的加载方式是怎样的，lazykitten是为这种测试设计的小工具。

lazykitten 可以生成一些api或者页面，按照使用者设定的返回时间，延迟后返回请求。加载这些页面或者访问这些api的请求就会被lazykitten拖慢。这使得低网速下测试变得可能和有趣。

### 如何安装

#### 全局安装（使用命令行）
````
$ sudo npm install lazykitten -g
````

#### 在项目中安装
````
$ npm install lazykitten 
````

#### lazykitten可接受的参数有

- `lazykitten -p NUMBER` 指定服务在监听哪个端口，例如：`lazykitten -p 6789` 将在`6789端口`开启服务
- `sudo lazykitten --beaman true` 开启 `Be A Man` 模式，开启这个模式后请求image API将不会返回萌猫，会返回一些非常正经的图片。
- `sudo lazykitten --beaman false` 关闭`Be A Man` 模式，因为开启这个模式会被记住，可以采用这个方法手动关闭

### 如何使用

#### 使用CLI命令行界面
````
$ lazykitten
````
会默认在 `http://localhost:9494` 开启服务，这个时候访问或者嵌入如下url

````
GET/POST http://localhost:9494/api/:delay // 会根据delay设置的时间返回一个字符串
GET http://localhost:9494/html/:delay // 会根据delay设置的时间返回一个html页面
GET http://localhost:9494/image/:width/:height/:delay // 会根据delay设置的时间返回一个图像src（一只萌猫）
````

#### 集成在你的node程序中使用
````javascript
var Kitten = require('lazykitten');
var server = new Kitten({
    beaman: false // 是否开启 be a man 模式
});
server.run()
````

### 参数细节

- `delay[number]` 默认为秒，比如 `http://localhost:9494/api/3` 会在`3秒后`返回

### Roadmap -> 0.1.0

- 增加对静态资源的托管支持
- 增加云服务