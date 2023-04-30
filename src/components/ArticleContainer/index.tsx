import style from './index.less';

const ArticleContainer = (props: React.PropsWithChildren) => {
  return (
    <div className={`${style.articleContainer}`}>{props.children}</div>
  );
};

export default ArticleContainer;
