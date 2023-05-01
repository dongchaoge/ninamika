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
  });

  return (
    <>
      {contextHolder}
      <ArticleContainer>
        <ArticleTitle title={`韩薇娜-${partName[part]}`} color="#007fdb" />
        <ArticleContent articleList={partArticle[part]} />
        <ArticleNextBtn
          text={nextBtnName[part]}
          question={questionList[part]}
          onClick={(answer) => handleNext(answer, part)}
        />
      </ArticleContainer>
    </>
  );
};

export default Nina;
