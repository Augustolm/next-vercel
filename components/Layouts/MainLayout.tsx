import { FC, ReactNode } from "react";
import Head from "next/head";
import styles from "./MainLayout.module.css";
import { NavBar } from "../NavBar";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Estudiando Next</title>
          <meta name="estudiando" content="Estudiando Next" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

        <main className={`${styles.main}`}>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
