import style from './index.less';

const ArticleTitle = ({ title }: any) => {
  return <h3 className={style.title}>{title}</h3>;
};

export default ArticleTitle;
