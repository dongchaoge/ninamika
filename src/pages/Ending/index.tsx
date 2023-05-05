import logo from '@/assets/logo.svg';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Observer from './Observer';
import styles from './index.less';

const Ending: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [ninaReady, setNinaReady] = useState(false);
  const [mikaReady, setMikaReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNinaReady(!!localStorage.getItem('nina'));
      setMikaReady(!!localStorage.getItem('mika'));
    }, 100);
    setTimeout(() => {
      setReady(ninaReady && mikaReady);
    }, 1000);
  });

  return (
    <div className={ready ? '' : 'h-[100vh] overflow-hidden'}>
      <div
        className={`w-[100vw] transition-all duration-[2000ms] flex items-center justify-center gap-16 ${
          ready ? 'overflow-hidden' : ''
        }`}
        style={{
          height: ready ? '0' : '100vh',
        }}
      >
        <Button
          className={`${styles.ninaBtn} ${
            ninaReady && styles.active
          }  w-[300px] h-[100px] text-[50px]`}
          type="default"
          style={{
            transform: ready ? 'translate(0,-10vh)' : '',
          }}
        >
          韩薇娜
        </Button>
        <Button
          className={`${styles.mikaBtn} ${
            mikaReady && styles.active
          } w-[300px] h-[100px] text-[50px]`}
          type="default"
          style={{
            transform: ready ? 'translate(0,-10vh)' : '',
          }}
        >
          徐静珂
        </Button>
      </div>
      <div className={styles.endingContainer}>
        <div className="text-2xl">
          <Observer>
            <div className="flex items-center mb-12">
              <img
                className="w-3/5 translate-top"
                src="https://i.328888.xyz/2023/05/01/iLleUL.jpeg"
                alt=""
              />
              <p>这是蜷川实花本花~</p>
            </div>
          </Observer>
          <Observer>
            <div className="flex items-center mb-12">
              <div>
                <p>这是所谓的“韩薇娜”</p>
                <p>其实也是蜷川实花~</p>
              </div>
              <img
                className="w-3/5 translate-top"
                src="https://i.328888.xyz/2023/05/01/iLlGVv.jpeg"
                alt=""
              />
            </div>
          </Observer>
          <Observer>
            <div className="flex items-center mb-12">
              <img
                className="w-4/5 translate-top"
                src="https://i.328888.xyz/2023/05/01/iLlzRp.jpeg"
                alt=""
              />
              <div>
                <p>“徐静珂”</p>
                <p>虚构的内向蜷川实花~</p>
              </div>
            </div>
          </Observer>
          <Observer>
            <div className="flex items-center mb-12">
              <img
                className="w-3/5 translate-top"
                src="https://i.328888.xyz/2023/05/01/iLl6oU.jpeg"
                alt=""
              />
              <p>这是你们一起合拍的电影《恶女花魁》的海报🐶~</p>
            </div>
          </Observer>
          <Observer showPoint={0.8}>
            <div>
              <img
                className="w-full mb-8 translate-top"
                src="https://i.328888.xyz/2023/05/01/iLwlcL.jpeg"
                alt=""
              />
              <span>
                SKULLPANDA 创作者 ”熊喵“ 工作室厂牌 @LAZYNORTH 北宅不宅
              </span>
            </div>
          </Observer>
          <div className="my-24">-----</div>
          <div className="my-24">
            Ninamika
            接受了熊喵的帮助后，将自己的灵魂封印到了熊喵的作品当中。。。
          </div>

          <div>
            <Observer showPoint={1}>
              <div>
                <div>炽烈、赤心、生的力量、花、美与残酷</div>
                <div className="my-12">愿你炽烈又赤心地找寻生的力量</div>
                <div className="text-3xl mb-8">
                  蜷川实花
                  <span className={`${styles.flame} scale inline-block`}>
                    「炽」
                  </span>
                </div>
              </div>
            </Observer>
            <Observer>
              <img
                className="w-full mb-8"
                src="https://i.328888.xyz/2023/05/01/iLwTvL.jpeg"
                alt=""
              />
            </Observer>
          </div>
          <div className="text-right text-[50px] text-[#47A7A7] gap-4 py-8 flex items-center flex-row-reverse">
            <span>05-12</span>
            <img className="w-1/4" src={logo} alt="" />
          </div>
        </div>
        <div className="text-2xl mt-12">
          以上就是原本的结局了，也是大家所认可和追捧的结局
          <br />
          <br />
          但是 Ninamika
          是那么的热爱生命，那么的骄傲，她又怎么会把自己封印在别人的作品里面呢~
          <br />
          <div className="mt-12 text-right">
            <Button
              onClick={() => {
                window.open(
                  `${window.location.origin}${window.location.pathname}#/real-ending`,
                );
              }}
              className={`w-[300px] h-[100px] text-[50px]`}
              type="default"
            >
              实花
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
