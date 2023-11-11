import React from "react";
import TableRow from "../TableRow";
import { UPCOMING_DAYS_NUMBER } from "../../services/calendar-summary/constants";
import styles from "./index.module.scss";

const TableLoading: React.FunctionComponent = () => {
  return (
    <tbody>
      {Array.from(Array(UPCOMING_DAYS_NUMBER + 1).keys())?.map((item) => (
        <TableRow isAccent={item % 2 === 1} key={`table-loading-row-${item}`}>
          {Array.from(Array(4).keys()).map((column) => (
            <td className={styles.entry} key={`table-skeleton-${column}`}>
              <div className={styles.skeleton} />
            </td>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableLoading;
