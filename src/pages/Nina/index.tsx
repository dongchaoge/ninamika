import ArticleContainer from '@/components/ArticleContainer';
import ArticleContent from '@/components/ArticleContent';
import ArticleNextBtn from '@/components/ArticleNextBtn';
import ArticleTitle from '@/components/ArticleTitle';

import { message } from 'antd';
import { useState } from 'react';
import {
  finallyArticale,
  firstArticale,
  secondArticale,
  thirdArticale,
  zeroArticale,
} from './articale';

const HomePage: React.FC = () => {
  const [part, setPart] = useState(0);

  const partName = ['序章', '第一章', '第二章', '第三章', '终章'];

  const nextBtnName = ['开始调查', '继续', '继续', '继续', ''];
  const questionList = [
    null,
    {
      dm: '先和旁边的人认知一下吧，然后输入下面这个问题的答案。',
      question: 'Ninamika演讲那天穿的什么颜色的鞋子？',
      verify(answer: string | undefined): boolean {
        return !!answer?.includes('黑色');
      },
    },
    {
      dm: '先和旁边的人聊聊高中的最后一年吧，然后输入下面这个问题的答案。',
      question: '比赛那天，Ninamika穿的什么颜色的外套？',
      verify(answer: string | undefined): boolean {
        return !!answer?.includes('白色');
      },
    },
    {
      dm: '先和旁边的人聊聊工作之后的事情，然后输入下面这个问题的答案。',
      question: '你是谁？',
      verify(answer: string | undefined): boolean {
        return !!answer?.includes('inamika');
      },
    },
    null,
  ];

  const partArticle = [
    zeroArticale,
    firstArticale,
    secondArticale,
    thirdArticale,
    finallyArticale,
  ];

  const [messageApi, contextHolder] = message.useMessage();

  const handleNext = (answer: string | undefined, part: number) => {
    if (!questionList[part] || questionList[part]?.verify(answer)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setPart(part + 1);
    } else {
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
      });
    }
  };

  return (
    <>
      {contextHolder}
      <ArticleContainer>
        <ArticleTitle title={`韩薇娜-${partName[part]}`} />
        <ArticleContent articleList={partArticle[part]} />

        <ArticleNextBtn
          text={nextBtnName[part]}
          question={questionList[part]}
          onClick={(answer) =>
            handleNext(answer, part < partName.length ? part : 0)
          }
        />
      </ArticleContainer>
    </>
  );
};

export default HomePage;
