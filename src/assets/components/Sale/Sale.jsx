import css from "./Sale.module.css";
import imgMain from "./sale/imgmain.png";
import imgMain2x from "./sale/imgmain@2x.png";
import img1 from "./sale/Img1.png";
import img1_2x from "./sale/Img1@2x.png";
import img2 from "./sale/Img2.png";
import img2_2x from "./sale/Img2@2x.png";
import img3 from "./sale/Img3.png";
import img3_2x from "./sale/Img3@2x.png";
import img4 from "./sale/Img4.png";
import img4_2x from "./sale/Img4@2x.png";

const Sale = () => {
  return (
    <section className={css.sale}>
      <div className={css.container}>
        <h2 className={css.sectionName}>Sale</h2>
        <div className={css.product}>
          <div className={css.allImgBox}>
            <ul className={css.imgOrder}>
              <li className={css.imgOrderList}>
                <img
                  src={img1}
                  srcSet={`${img1_2x} 2x`}
                  alt="Main Sale Image"
                />
              </li>
              <li className={css.imgOrderList}>
                <img
                  src={img2}
                  srcSet={`${img2_2x} 2x`}
                  alt="Main Sale Image"
                />
              </li>
              <li className={css.imgOrderList}>
                <img
                  src={img3}
                  srcSet={`${img3_2x} 2x`}
                  alt="Main Sale Image"
                />
              </li>
              <li className={css.imgOrderList}>
                <img
                  src={img4}
                  srcSet={`${img4_2x} 2x`}
                  alt="Main Sale Image"
                />
              </li>
            </ul>
            <div className={css.mainImgBox}>
              <img
                src={imgMain}
                srcSet={`${imgMain2x} 2x`}
                alt="Main Sale Image"
              />
            </div>
          </div>
          <div className={css.description}>
            <p className={css.productName}>
              MARQ® Commander (Gen 2) - Carbon Edition
            </p>
            <p className={css.productTag}>Product tag: 706587</p>
            <div className={css.productPriceBox}>
              <p className={css.productNewPrice}>€1500</p>
              <p className={css.productLastPrice}>€3000</p>
            </div>
            <p className={css.productDescription}>
              The Garmin MARQ Commander Gen 2 Carbon Edition is a modern
              smartwatch for adventurers that takes materials and features to
              the next level. The body of the watch is made of very durable
              Fused Carbon Fiber material and has a precise AMOLED touch screen.
              The sensitive touch screen is complemented by buttons that can be
              used in any conditions.
            </p>
            <ul className={css.descriptionOrder}>
              <li className={css.descriptionOrderList}>Fused carbon fiber</li>
              <li className={css.descriptionOrderList}>Grade-5 Titanuim</li>
              <li className={css.descriptionOrderList}>Athlete</li>
              <li className={css.descriptionOrderList}>Golfer</li>
              <li className={css.descriptionOrderList}>Commander</li>
              <li className={css.descriptionOrderList}>Adventurer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
