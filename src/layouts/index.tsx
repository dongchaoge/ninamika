import { Outlet } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
const { darkAlgorithm } = theme;
export default function Layout() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
        <div className='text-[#d1d5db] text-xl'>
          <Outlet />
        </div>
      </ConfigProvider>
    </>
  );
}
