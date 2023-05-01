import style from './index.less';

const ArticleTitle = ({ title, color }: any) => {
  return (
    <h3 className={style.title} style={{ color: color }}>
      {title}
    </h3>
  );
};

export default ArticleTitle;
