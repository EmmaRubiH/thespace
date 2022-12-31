import React from "react";
import styles from "../styles/MostLiked.module.css";

const MostLiked = (props) => {
    const { src, height = 45, text } = props;
    return (
        <span>
        <img
            className={styles.MostLiked}
            src={src}
            height={height}
            width={height}
            alt="most liked"
        />
        {text}
        </span>
    );
};

export default MostLiked;