import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.buttons}>
      {options.map((option) => (
        <button
          type="button"
          className={styles.button}
          key={uuidv4()}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
