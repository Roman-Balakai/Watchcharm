import css from "./AboutUs.module.css";
import img_mob from "./img/rectangle-mob.png";
import img_mob_2x from "./img/rectangle-mob@2x.png";
import img_tab from "./img/rectangle-tab.png";
import img_tab_2x from "./img/rectangle-tab@2x.png";
import img_desk from "./img/rectangle-desk.png";
import img_desk_2x from "./img/rectangle-desk@2x.png";
const AboutUs = () => {
  return (
    <section className={css.aboutUs}>
      <div className={css.container}>
        <div className={css.aboutDescription}>
          <h2 className={css.aboutHeader}>About Us</h2>
          <div className={css.textContainer}>
            <p className={css.aboutText}>
              Welcome to our premium watch collection, where luxury and style
              meet functionality and precision. Our selection of timepieces
              embodies the very best in Swiss craftsmanship and engineering,
              ensuring that you'll always have a reliable and stylish accessory
              on your wrist.
            </p>
            <p className={css.aboutText}>
              At our premium watch collection, we believe that a watch is more
              than just a timekeeping device – it's a statement piece that
              reflects your personality and style. So why settle for anything
              less than the best?{" "}
            </p>
          </div>
          <button type="button" className={css.aboutButton}>
            View catalog
          </button>
        </div>
        <div className={css.aboutImg}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${img_mob} 1x, ${img_mob_2x} 2x`}
            />
            <source
              media="(min-width: 768px) and (max-width: 1279px)"
              srcSet={`${img_tab} 1x, ${img_tab_2x} 2x`}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={`${img_desk} 1x, ${img_desk_2x} 2x`}
            />
            <img src={img_desk} alt="Adaptive Image" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
