import Link from "next/link"
import styles from "../styles/Footer.module.css"
import Logo from "./Logo"

export default function Footer() {
    return (<footer className={styles.footer}>
        <Logo style={{
            display: "block"
        }} />
        <div className={styles.footerGrid}>
            <section>
                <h3>Ürün</h3>
                <Link href="/">Ana sayfa</Link>
                <br /><br />
                <Link href="/setup">Kurulum</Link>
                <br /><br />
                <Link href="/store">Mağaza</Link>
            </section>
            <section>
                <h3>Şirket</h3>
                <Link href="/contact">İletişim</Link>
                <br /><br />
                <Link href="/jobs">İş olanakları</Link>
            </section>
            <section>
                <h3>İletişim</h3>
                <b>+90 (000) 000 000</b>
                <br /><br />
                <b>contact@ilkteleskobum.example.com</b>
                <br /><br />
                <b>Sadık Bey Mah. 70. Sokak No: 11, Gaziemir, İzmir</b>
                {/* Completely random address I just made up */}
            </section>
            <section>
                <h3>Hakkımızda</h3>
                2013'den beri "İlk Teleskobum" ve "İlk Teleskobum 2" setlerini üreten şirketiz.
                <br /><br />
                72 çalışanımız var.
            </section>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "flex-end"
        }}>
            <b>
                © {new Date().getFullYear()}. Tüm hakları saklıdır.
            </b>
        </div>
    </footer>
    )
}
