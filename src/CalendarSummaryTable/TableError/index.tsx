import React from "react";
import styles from "./index.module.scss";

type TableErrorProps = {
  onRetry: () => void;
};

const TableError: React.FunctionComponent<TableErrorProps> = ({ onRetry }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        There was a problem with loading calendar events.
      </h3>
      <button className={styles.button} onClick={onRetry}>
        Try again
      </button>
    </div>
  );
};

export default TableError;
