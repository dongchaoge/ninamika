import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'Happy birthday',
  favicons: ['https://i.328888.xyz/2023/05/01/iL0inp.png'],
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  history: {
    type: 'hash',
  },
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '韩薇娜',
      path: '/nina',
      component: './Nina',
    },
    {
      name: '徐静珂',
      path: '/mika',
      component: './Mika',
    },
    {
      name: '结尾',
      path: '/ending',
      component: './Ending',
    },
    {
      name: '结尾',
      path: '/real-ending',
      component: './RealEnding',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
