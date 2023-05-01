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

const Mika: React.FC = () => {
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
    name: 'mika',
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#11862f',
        },
      }}
    >
      {contextHolder}
      <ArticleContainer
        processColor="var(--mika)"
        percent={(part / (partLength - 1)) * 100}
      >
        <ArticleTitle title={`徐静珂-${partName[part]}`} color="var(--mika)" />
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

export default Mika;
