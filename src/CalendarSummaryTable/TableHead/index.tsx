import React from "react";
import TableRow from "../TableRow";
import styles from "./index.module.scss";

const TableHead: React.FunctionComponent = () => (
  <thead>
    <TableRow isAccent={false}>
      <th className={`${styles.heading} ${styles.headingNarrow}`}>Date</th>
      <th className={styles.heading}>Number of events</th>
      <th className={styles.heading}>Total duration [min]</th>
      <th className={`${styles.heading} ${styles.headingWide}`}>
        Longest event
      </th>
    </TableRow>
  </thead>
);

export default TableHead;
