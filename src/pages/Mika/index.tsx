import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useNavigate } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  
  const handleClick = () => {
  };

  return (
    <PageContainer ghost>
      <div className={styles.container} onClick={handleClick}>
      徐静珂
      </div>
    </PageContainer>
  );
};

export default HomePage;
