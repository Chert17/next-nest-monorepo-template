import Image from "next/image";
import styles from "./page.module.css";

const getHello = async () => {
  const res = await fetch("http://localhost:5000/api/qwe", { method: "GET" });
  const data = await res.text();
  return data;
};

export default async function Home() {
  const hello = await getHello();

  return (
    <main className={styles.main}>
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
      <h1>{hello}</h1>
    </main>
  );
}
