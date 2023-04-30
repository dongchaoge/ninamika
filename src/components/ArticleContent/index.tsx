interface Props {
  articleList: string[];
}

const ArticleContent = ({ articleList }: Props) => {
  return (
    <>
      {articleList.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  );
};

export default ArticleContent;
