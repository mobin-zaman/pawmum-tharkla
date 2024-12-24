import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Welcome to [School Name]</h1>
        <p>Providing education in the heart of Bandarban.</p>
        <a href="#about" className={styles.button}>Learn More</a>
      </section>

      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>We are a non-profit school dedicated to providing quality education to the children of Bandarban. Our mission is to empower young minds and build a brighter future for our community.</p>
      </section>

      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>You can reach us at [email protected]</p>
      </section>
    </main>
  )
}
