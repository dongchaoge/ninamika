import { useNavigate } from '@umijs/max';
import { message } from 'antd';

interface Props {
  questionList: any[];
  partLength: number;
  setPart: (part: number) => void;
}

export default function useNextBtn({
  questionList,
  partLength,
  setPart,
}: Props) {
  const [messageApi, contextHolder] = message.useMessage();

  let navigate = useNavigate();
  const handleNext = (answer: string | undefined, part: number) => {
    if (!questionList[part] || questionList[part]?.verify(answer)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      if (part < partLength) {
        setPart(part + 1);
      } else {
        navigate(`/ending`);
      }
    } else {
      messageApi.open({
        type: 'error',
        content: '好像不太对~',
      });
    }
  };
  return {
    handleNext,
    contextHolder,
  };
}
