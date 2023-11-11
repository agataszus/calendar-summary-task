import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
