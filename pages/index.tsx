import Image from "next/image";
import MainLayout from "../components/Layouts/MainLayout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>Index Page</p>
      </div>
      <h1>
        Ir a <Link href="/about">About</Link>
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
    </MainLayout>
  );
}
