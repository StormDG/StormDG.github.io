# StormDG 的个人主页

简洁浅色的个人网站，包含个人介绍、诗歌作品、网页项目和 GitHub 联系入口。使用原生 HTML、CSS 与 JavaScript，可以直接部署到 GitHub Pages。

## 本地预览

直接打开 `index.html`，或在当前目录运行：

```sh
python -m http.server 4173 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:4173>。

## 部署到 GitHub Pages

1. 将本站文件推送或上传到 `StormDG/StormDG.github.io` 的 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
4. 在 **Branch** 选择 **main** 和 **/ (root)**，点击 **Save**。
5. 等待 GitHub 的 Pages 部署完成，然后访问 <https://stormdg.github.io/>。

无需安装依赖或执行构建命令。`.nojekyll` 用来关闭 Jekyll 处理；GitHub 网页上传时若不方便上传该文件，本项目也不依赖它。

GitHub 官方说明：<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>。

## 修改内容

| 文件 | 用途 |
| --- | --- |
| `index.html` | 姓名、个人介绍、项目、联系方式和分享描述 |
| `styles.css` | 配色、字体、布局和手机适配 |
| `script.js` | 页脚年份与复制主页链接 |
| `favicon.svg` | 浏览器标签页图标 |

个人经历和兴趣仍待补充。当前作品展示三首诗歌《木瑟》《央里》《孤夜》及本站，联系入口使用公开的 GitHub 主页，未添加未经确认的邮箱或个人资料。

新增项目时，可复制 `index.html` 中的 `<article class="project-card">`，替换标题、描述、技术标签、预览内容和源码链接。
