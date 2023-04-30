import { Button } from 'antd';

interface Props {
  text: string;
  onClick: () => void;
}
const ArticleNextBtn = ({ text, onClick }: Props) => {
  return (
    <div className="text-right">
      <Button
        onClick={onClick}
        className="w-[200px] h-[60px] text-[30px] mt-4"
        type="default"
      >
        {text}
      </Button>
    </div>
  );
};

export default ArticleNextBtn;
