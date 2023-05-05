import { useEffect, useRef, useState } from 'react';
import './index.less';

const Observer = ({ children, showPoint = 0.5 }: any) => {
  const boxRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  const [isHide, setHide] = useState(false);

  const [isOpenHide, setOpenHide] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      const ratio = entries[0].intersectionRatio;

      if (ratio >= showPoint) {
        setIsShow(true);
      }
      if (ratio === 1) {
        setOpenHide(true);
      }

      if (isOpenHide && ratio <= 0.3) {
        setHide(true);
      } else {
        setHide(false);
      }
    },
    {
      threshold: [0, 0.1, 0.2, 0.5, 0.8, 1],
    },
  );
  useEffect(() => {
    observer.observe(boxRef.current as any);
  });

  return (
    <div
      ref={boxRef}
      className={`${isShow ? 'show' : ''} ${
        isHide ? 'isHide' : ''
      } animationBox`}
    >
      {children}
    </div>
  );
};

export default Observer;
