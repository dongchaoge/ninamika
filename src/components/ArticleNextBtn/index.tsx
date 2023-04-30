import { Button, Input } from 'antd';
import { useState } from 'react';

interface Question {
  dm: string;
  question: string;
}
interface Props {
  question?: Question | null;
  text: string;
  prev?: string;
  onClick: (answer?: string) => void;
  onPrevClick?: () => void;
}
const ArticleNextBtn = ({
  text,
  question,
  prev,
  onClick,
  onPrevClick,
}: Props) => {
  const [answer, setAnawer] = useState('');
  return (
    <>
      {question && (
        <div>
          <div className="text-2xl text-white my-4">
            <h4>DM: {question.dm}</h4>
            <h4 className="mt-4">Question: {question.question}</h4>
          </div>
        </div>
      )}
      <div className="flex items-center mt-8">
        {prev && (
          <Button
            onClick={onPrevClick}
            className="w-[200px] h-[60px] text-[30px] mt-4"
            type="default"
          >
            {prev}
          </Button>
        )}
        <div className="flex-1">
          {question && (
            <>
              <Input
                onInput={(e: any) => setAnawer(e.target.value)}
                className="h-[60px] text-2xl"
                placeholder="请回答"
              />
            </>
          )}
        </div>
        {text && (
          <Button
            onClick={() => onClick(answer)}
            className="w-[200px] h-[60px] text-[30px] ml-4"
            type="default"
          >
            {text}
          </Button>
        )}
      </div>
    </>
  );
};

export default ArticleNextBtn;
