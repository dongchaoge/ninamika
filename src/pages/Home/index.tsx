import { useModel, useNavigate } from '@umijs/max';
import { Button } from 'antd';
import style from './index.less'

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  let navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center gap-16">
      <Button
        onClick={() => handleClick('nina')}
        className={`${style.ninaBtn} w-[300px] h-[100px] text-[50px]`}
        type="default"
      >
        韩薇娜
      </Button>
      <Button
        onClick={() => handleClick('mika')}
        className={`${style.mikaBtn} w-[300px] h-[100px] text-[50px]`}
        type="default"
      >
        徐静珂
      </Button>
    </div>
  );
};

export default HomePage;
