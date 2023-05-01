import { Progress } from 'antd';
import style from './index.less';

interface Props {
  children: React.ReactNode;
  processColor: string;
  percent: number;
}

const ArticleContainer = ({ children, processColor, percent }: Props) => {
  return (
    <>
      <Progress
        className="fixed top-[-9px]"
        percent={percent}
        status="active"
        showInfo={false}
        strokeLinecap="butt"
        strokeColor={{ '0%': 'rgb(20, 20, 20)', '100%': processColor }}
      ></Progress>
      <div className={`${style.articleContainer}`}>{children}</div>
    </>
  );
};

export default ArticleContainer;
