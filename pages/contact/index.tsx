import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "@/components/Layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>Contact Page</p>
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
    </MainLayout>
  );
}
