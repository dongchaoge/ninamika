import { message } from 'antd';

interface Props {
  questionList: any[];
  partLength: number;
  name: string;
  setPart: (part: number) => void;
}

export default function useNextBtn({
  questionList,
  partLength,
  name,
  setPart,
}: Props) {
  const [messageApi, contextHolder] = message.useMessage();

  const handleNext = (answer: string | undefined, part: number) => {
    if (!questionList[part] || questionList[part]?.verify(answer)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      if (part < partLength - 1) {
        setPart(part + 1);
      } else {
        localStorage.setItem(name, '1');
        window.open(`${window.location.origin}/#/ending`);
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
