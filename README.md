# fis-postprocesser-bdtmpl

[![Greenkeeper badge](https://badges.greenkeeper.io/colorpeach/fis-postprocessor-bdtmpl.svg)](https://greenkeeper.io/)

让html支持通过json渲染模板

## 安装

```
npm install -g fis-postprocessor-bdtmpl
```

## 使用方法

### 配置

```json
fis.match('**.html', {
    postprocessor: fis.plugin('bdtmpl')
});
```

### 使用

模板语法采用[BaiduTemplate](http://baidufe.github.io/BaiduTemplate/)

渲染引入的模板

```html
<!-- TMPL={ "title": "前端示例" } -->
    <link rel="import" href="/components/head/head.html?__inline">
<!-- /TMPL -->
```

直接渲染html

```html
<!-- TMPL={ "title": "前端示例" } -->
    <div><%= title =></div>
<!-- /TMPL -->
```

使用json文件作为数据源

```html
<!-- TMPL=./data.json -->
    <link rel="import" href="/components/head/head.html?__inline">
<!-- /TMPL -->
```
