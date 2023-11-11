import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

type TableRowProps = {
  isAccent: boolean;
} & PropsWithChildren;

const TableRow: React.FunctionComponent<TableRowProps> = ({
  children,
  isAccent,
}) => {
  return (
    <tr
      className={`${styles.container} ${isAccent && styles.backgroundAccent}`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
