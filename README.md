# 交易笔记

这是一份可以定期打开的个人交易笔记站点，用来回看每月最值得记住的 Case Study 和心态笔记。内容是整理自阿豬搵錢日記的学习笔记，不是公开转载，也不是交易建议。

界面采用 [shadcn/ui](https://ui.shadcn.com/) 的 sidebar-01 布局：左边是栏目标题，右边是正文。笔记写在 `src/data/notes.ts` 里，之后要加新的月份或文章，改这一份数据即可。

## 安装

需要 Node.js 20 或更新版本。

```bash
cd jiaoyi-biji
npm install
```

## 本地打开

开发时用：

```bash
npm run dev
```

终端里会给出本地地址，默认是 `http://localhost:5173`。浏览器打开即可，改文件后页面会自动刷新。

预览生产构建用：

```bash
npm run build
npm run preview
```

`npm run preview` 同样会给出本地地址，用来确认打包后的站点能否正常打开。
