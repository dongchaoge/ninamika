import { defineConfig } from '@umijs/max';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  hash: true,
  history: {
    type: 'hash',
  },
  antd: {
  },
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
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
