import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nobu | Training </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">Nobu</a>
        </h1>

        <div className={styles.grid}>
          <a href="/workshops" className={styles.card}>
            <h3>Workshops</h3>
            <p>
              Sesiones en vivo con instructores de nivel vigentes en el campo.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Cursos</h3>
            <p>Accede a clases grabadas para que aprendas a tu propio ritmo</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Proyectos Reales</h3>
            <p>
              Todos los cursos apuntan a construir un mismo proyecto grande y
              real.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Comunidad</h3>
            <p>
              No estas solo! Muchas personas estan disponibles a ayudarte en
              todo momento.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp; <b>DigitalPark</b>
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}
