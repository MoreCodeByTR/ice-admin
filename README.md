# ice.js 3 后台项目搭建

## 使用

```bash
$ npm install

$ npm start
```

## 文件目录

```md
.
├── README.md
├── ice.config.mts # The project config
├── package.json
├── .browserslistrc # Browsers that we support
├── public
│   ├── favicon.ico  
├── src
│   ├── app.ts # The app entry
│   ├── assets
│   │   └── logo.png
│   ├── document.tsx
│   ├── pages # Pages directory
│   │   ├── index.module.css
│   │   └── index.tsx # Index page entry
│   └── typings.d.ts
└── tsconfig.json
```

ice3.0 开发文档 [docs](https://v3.ice.work/).

## github pages 部署配置

需要根据仓库子路径配置访问地址，前面 `/`,不能缺失，否则会出现两层 ice-admin 地址，如https://morecodebytr.github.io/ice-admin/ice-admin/js/framework.js

```
publicPath: '/ice-admin/',
```

## 路由配置

由于不是配置在域名根目录下，注意配置路由前缀名，使用 history 进行路由跳转时也要配置前缀

```
export default defineAppConfig(() => ({
  router: {
    basename: '/ice-admin/',
  },
}));
```
