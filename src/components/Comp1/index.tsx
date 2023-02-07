import styles from './comp1.module.scss'
import React from "react";


const Comp1: React.FC = () => {
    return (
        <div className={styles.box}>
            <p>
                我是Comp1
            </p>
        </div>
    )
};
export default Comp1;
