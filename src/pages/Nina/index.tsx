import ArticleContainer from '@/components/ArticleContainer';
import ArticleContent from '@/components/ArticleContent';
import ArticleNextBtn from '@/components/ArticleNextBtn';
import ArticleTitle from '@/components/ArticleTitle';

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

  const partArticle = [
    zeroArticale,
    firstArticale,
    secondArticale,
    thirdArticale,
    finallyArticale,
  ];

  const handleNext = (part: number) => {
    setPart(part);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ArticleContainer>
      <ArticleTitle title={`韩薇娜-${partName[part]}`} />
      <ArticleContent articleList={partArticle[part]} />
      <ArticleNextBtn text="开始调查" onClick={() => handleNext(1)} />
    </ArticleContainer>
  );
};

export default HomePage;
