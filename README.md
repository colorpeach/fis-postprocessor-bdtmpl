# fis-postprocesser-bdtmpl

��html֧��ͨ��json��Ⱦģ��

## ��װ

```
npm install -g fis-postprocessor-bdtmpl
```

## ʹ�÷���

### ����

```json
fis.match('**.html', {
    postprocessor: fis.plugin('bdtmpl')
});
```

### ʹ��

��Ⱦ�����ģ��

```html
<!-- TMPL={ "title": "ǰ��ʾ��" } -->
    <link rel="import" href="/components/head/head.html?__inline">
<!-- /TMPL -->
```

ֱ����Ⱦhtml

```html
<!-- TMPL={ "title": "ǰ��ʾ��" } -->
    <div><%= title =></div>
<!-- /TMPL -->
```

ʹ��json�ļ���Ϊ����Դ

```html
<!-- TMPL=./data.json -->
    <link rel="import" href="/components/head/head.html?__inline">
<!-- /TMPL -->
```
