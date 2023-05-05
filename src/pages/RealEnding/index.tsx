import logo from '@/assets/logo.svg';
import Observer from './Observer';
import styles from './index.less';

// 光：封面
// https://i.328888.xyz/2023/05/05/iTy6D3.jpeg

// https://i.328888.xyz/2023/05/05/iTybaN.jpeg
// https://i.328888.xyz/2023/05/05/iTyOeo.jpeg
// https://i.328888.xyz/2023/05/05/iTyHOA.jpeg

// 樱：封面
// https://i.328888.xyz/2023/05/05/iTyF3y.jpeg

// https://i.328888.xyz/2023/05/05/iTyeJv.png
// https://i.328888.xyz/2023/05/05/iTy80V.jpeg
const Ending: React.FC = () => {
  return (
    <div>
      <div className={styles.endingContainer}>
        <div className="text-3xl mb-8">
          蜷川实花在大众的眼中消失后，去做了自己真正喜爱的事情，同时也去了很多地方~
        </div>
        <div className="text-2xl">
          <div className="mb-8">
            她行走日本和世界各地，拍下了夏日花火大会瞬间绽放的烟花和热闹的音乐节现场
          </div>
          <Observer>
            <img
              className="translate-top mb-8"
              src="https://i.328888.xyz/2023/05/05/iTybaN.jpeg"
            />
          </Observer>
          <Observer>
            <img
              className="translate-top mb-8"
              src="https://i.328888.xyz/2023/05/05/iTyHOA.jpeg"
            />
          </Observer>
          <Observer>
            <img
              className="translate-top mb-8"
              src="https://i.328888.xyz/2023/05/05/iTyOeo.jpeg"
            />
          </Observer>

          <div>
            <Observer showPoint={1}>
              <div className="mt-48 mb-24">
                <div>希望与幸福</div>
                <div className="my-12">生命中所有短暂的美好都值得被记录</div>
                <div className="text-3xl mb-8">
                  蜷川实花
                  <span className={`${styles.light} scale inline-block`}>
                    「光」
                  </span>
                </div>
              </div>
            </Observer>
            <Observer>
              <img
                className="translate-top mb-8"
                src="https://i.328888.xyz/2023/05/05/iTy6D3.jpeg"
              />
            </Observer>
          </div>

          <div className="mt-24 mb-8">
            她为了纪念 2011年3月东日本大地震，去了一片花的海洋~
          </div>
          <Observer>
            <img
              className="translate-top mb-8"
              src="https://i.328888.xyz/2023/05/05/iTyeJv.png"
            />
          </Observer>
          <Observer>
            <img
              className="translate-top mb-8"
              src="https://i.328888.xyz/2023/05/05/iTy80V.jpeg"
            />
          </Observer>

          <div>
            <Observer showPoint={1}>
              <div className="mt-48 mb-24">
                <div>美好的生命，转瞬即逝</div>
                <div className="my-12">
                  “我永远不会忘记这至美的最象。闭上眼，缓缓地做一个深呼吸。”
                </div>
                <div className="text-3xl mb-8">
                  蜷川实花
                  <span className={`${styles.cherry} scale inline-block`}>
                    「樱」
                  </span>
                </div>
              </div>
            </Observer>
            <Observer>
              <img
                className="translate-top mb-8"
                src="https://i.328888.xyz/2023/05/05/iTyF3y.jpeg"
              />
            </Observer>
          </div>

          <div className="text-right text-[50px] text-[#47A7A7] gap-4 py-8 flex items-center flex-row-reverse">
            <span>05-12</span>
            <img className="!w-1/4" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
