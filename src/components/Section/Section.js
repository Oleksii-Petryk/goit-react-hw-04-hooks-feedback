import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Section;

Section.defaultProps = {
  title: "Title of section",
};

Section.propTypes = {
  title: PropTypes.string,
};
