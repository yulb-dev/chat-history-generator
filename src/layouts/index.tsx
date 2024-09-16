import { Outlet } from "umi";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from "antd";

export default function Layout() {
  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}
