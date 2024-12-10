import css from "./Advertisement.module.css";
const Advertisement = () => {
  return (
    <section className={css.advertisement}>
      <div className={css.container}>
        <h2 className={css.sectionName}>Advertisement</h2>
        <div className={css.sectionBox}>
          <p className={css.text}>
            Choose <span className={css.textSpan}>your story</span>, making
            every moment unique. Time is your style, and we reveal it.
          </p>
          <button type="button" className={css.sectionButton}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
