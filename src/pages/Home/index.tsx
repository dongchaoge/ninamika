import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useNavigate } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/table');
  };

  return (
    <PageContainer ghost>
      <div className={styles.container} onClick={handleClick}>
        home
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;