import css from "./Catalog.module.css";
import img1 from "./img/image1.png";
import img1_2x from "./img/image1@2x.png";
import img2 from "./img/image2.png";
import img2_2x from "./img/image2@2x.png";
import img3 from "./img/image3.png";
import img3_2x from "./img/image3@2x.png";
import img4 from "./img/image4.png";
import img4_2x from "./img/image4@2x.png";
import img5 from "./img/image5.png";
import img5_2x from "./img/image5@2x.png";
import img6 from "./img/image6.png";
import img6_2x from "./img/image6@2x.png";
const Catalog = () => {
  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <h2 className={css.mainHeader}>Catalog</h2>
        <ul className={css.catalogOrder}>
          <li className={css.catalogOrderList}>
            <img
              src={img1}
              srcSet={`${img1_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>
              Garmin Fenix 7X Pro Sapphire Solar
            </p>
            <p className={css.productPrice}>€500</p>
          </li>
          <li className={css.catalogOrderList}>
            <img
              src={img2}
              srcSet={`${img2_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>Garmin Marq Athlete</p>
            <p className={css.productPrice}>€450</p>
          </li>
          <li className={css.catalogOrderList}>
            <img
              src={img3}
              srcSet={`${img3_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>Garmin Descent MK1</p>
            <p className={css.productPrice}>€680</p>
          </li>
          <li className={css.catalogOrderList}>
            <img
              src={img4}
              srcSet={`${img4_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>Garmin D2 Delta PX</p>
            <p className={css.productPrice}>€380</p>
          </li>
          <li className={css.catalogOrderList}>
            <img
              src={img5}
              srcSet={`${img5_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>Garmin Fenix 6 Pro Solar</p>
            <p className={css.productPrice}>€400</p>
          </li>
          <li className={css.catalogOrderList}>
            <img
              src={img6}
              srcSet={`${img6_2x} 2x`}
              alt="Main Sale Image"
              className={css.productImg}
            />
            <p className={css.productName}>
              Tube Watch S42 Date Steel With Black Case
            </p>
            <p className={css.productPrice}>€395</p>
          </li>
        </ul>
        <button className={css.productButton}>Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
