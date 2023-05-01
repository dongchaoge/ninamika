import { ConfigProvider } from 'antd';
import { useState } from 'react';

import ArticleContainer from '@/components/ArticleContainer';
import ArticleContent from '@/components/ArticleContent';
import ArticleNextBtn from '@/components/ArticleNextBtn';
import ArticleTitle from '@/components/ArticleTitle';

import useNextBtn from '@/hooks/useNextBtn';

import {
  finallyArticale,
  firstArticale,
  nextBtnName,
  partLength,
  partName,
  questionList,
  secondArticale,
  thirdArticale,
  zeroArticale,
} from './articale';

const Nina: React.FC = () => {
  const [part, setPart] = useState(0);

  (window as any).setPart = setPart;

  const partArticle = [
    zeroArticale,
    firstArticale,
    secondArticale,
    thirdArticale,
    finallyArticale,
  ];

  const { handleNext, contextHolder } = useNextBtn({
    questionList,
    partLength,
    setPart,
    name: 'nina',
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#007fdb',
        },
      }}
    >
      {contextHolder}
      <ArticleContainer
        processColor="var(--nina)"
        percent={(part / (partLength - 1)) * 100}
      >
        <ArticleTitle title={`韩薇娜-${partName[part]}`} color="var(--nina)" />
        <ArticleContent articleList={partArticle[part]} />
        <ArticleNextBtn
          text={nextBtnName[part]}
          question={questionList[part]}
          onClick={(answer) => handleNext(answer, part)}
        />
      </ArticleContainer>
    </ConfigProvider>
  );
};

export default Nina;
