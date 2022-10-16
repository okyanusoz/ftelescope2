import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (<>
        <Head>
            <title>İletişim - İlk Teleskobum 2</title>
        </Head>
        <Navbar activePage="contact" />
        <main className={styles.main}>
            <h1>İletişim</h1>
            <div className={styles.contactColumns}>
                <div>
                    <h2>E-posta veya telefon</h2>
                    <b>+90 (000) 000 000</b>
                    <br />
                    8.00-10.00'a ve Pazartesi-Cumartesi'ye kadar açığız.
                    <br />
                    <br /><br />

                    <b>contact@ilkteleskobum.example.com</b>
                </div>
                <div>
                    <h2>Posta</h2>
                    <b>Sadık Bey Mah. 70. Sokak No: 11, Gaziemir, İzmir</b>
                </div>
            </div>
        </main>
        <Footer />
    </>)
}
