import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/Layouts/MainLayout";
import { DarkLayout } from "../components/Layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <div className={styles.description}>
        <p>About Page</p>
      </div>
      <h1>
        Ir a <Link href="/">Index</Link>
      </h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
