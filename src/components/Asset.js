import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
    return (
        <div className={`p-4`}>
            {spinner && <Spinner animation="border" />}
            {src && <img src={src} alt={message} className={styles.Asset} />}
            {message && <p className="mt-4">{message}</p>}

        </div>
    );
};

export default Asset;