import Navbar from "../components/Navbar"
import styles from "../styles/Index.module.css"
import classNames from "classnames"
import ScrollShow from "../components/ScrollShow"
import Head from "next/head"

export default function Index() {
    return (<>
        <Head>
            <title>İlk Teleskobum</title>
        </Head>
        <Navbar activePage="home" />
        <div className={styles.hero} style={{
            marginBottom: "5em"
        }}>
            <div className={styles.flex}>
                <div>
                    <h1 className={classNames("poppins", styles.heroHeading)}>
                        Çocuklara teleskopların yapısını öğretmenin en kolay yolu
                    </h1>
                    <b>
                        Çocuklara teleskopları deneyimleterek öğretin.
                        İlk Teleskobum, çocuklara teleskopları deneyimleterek öğretir.
                    </b>
                    <a className={styles.btn} href="#">Satın al</a>
                </div>
                <img src="https://source.unsplash.com/8SjeH5pZbjw" className={styles.heroImage}></img>
            </div>
            <div style={{
                display: "grid",
                margin: "2em",
                paddingBottom: "5em",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gridGap: "1rem",
                flexWrap: "wrap"
            }}>
                <div>
                    <h3>107</h3>
                    Satın alan kurum sayısı
                </div>
                <div>
                    <h3>1.050</h3>
                    Ulaştırılan kampüs sayısı
                </div>
                <div>
                    <h3>11.000</h3>
                    Kullanan çocuk
                </div>
                <div>
                    <h3>57.5%</h3>
                    Tahmini yatırım getirisi
                </div>
                <div>
                    <h3>276</h3>
                    İnceleme sayısı
                </div>
                <div>
                    <h3>4.5/5</h3>
                    Ortalama değerlendirme
                </div>
                <div>
                    <h3>7.500</h3>
                    Memnun müşteri sayısı
                </div>
                <div>
                    <h3>99.6%</h3>
                    Müşteri memnuniyet oranı
                </div>
            </div>
        </div>
        <section className={styles.section}>
            <ScrollShow>
                <h1 className="poppins">Fen Bilimleri'nde İlk Teleskobum farkını görün</h1>
                <div className={styles.problemFlex} style={{
                    textAlign: "start",
                    margin: "0 1.5em"
                }}>
                    <div className={styles.problemCard}>
                        <h1>Normal yöntemler</h1>
                        <ol>
                            <li>Çocuklara teleskopları kitaptan anlat.</li>
                            <li>Test çöz.</li>
                        </ol>
                        <h3>Sorunlar</h3>
                        <ul>
                            <li>Çocuklar gerçekten konuyu pekiştirdi mi?</li>
                            <li>Çocuklar teleskopların yapısını anlıyor mu?</li>
                        </ul>
                    </div>
                    <div className={classNames(styles.problemCard, styles.problemCardBest)}>
                        <h1>İlk Teleskobum</h1>
                        <h4>Çocuklara gerçekten teleskop yapmayı öğretir. Pekiştirmelidir.</h4>
                        <h3>Çözülen sorunlar</h3>
                        <ul>
                            <li>Çocuk teleskopları pekiştirir.</li>
                            <li>Çocuk teleskopların yapısını anlar.</li>
                        </ul>
                    </div>
                </div>
            </ScrollShow>
        </section>
        <section className={styles.section}>
            <ScrollShow>
                <h1>Teleskop Nedir?</h1>
                Teleskop gökyüzünde bulunan cisimleri ve gezegenleri görmemize yarayan yakınlaştırıcı bir alettir. Teleskobun kendi içerisinde çeşitleri bulunmaktadır. Teknolojinin çok gelişmediği dönemlerde iki çeşit bulunan teleskoplar günümüzde teknoloji ve radyo frekanslarının konu içerisine dahil olmasıyla dört çeşide ayrılmıştır.
                <h2>Tarihçe</h2>
                Teleskop ilk olarak Hollandalı Hans Lippershey tarafından 1608 yılında icad edilmiş ve askeri alanda kullanılmıştır. Kırılma prensibine dayanan bu teleskob astronomi alanında ilk kullanan Galileo’dur. Lippershey ve Galileo konveks ve konkav lenslerin birleşiminden oluşan teleskopları kullanıyorlardı. 1611 yılında Kepler iki konveks lens kullanarak geliştirdiği teleskobu kullanmaya başladı.
            </ScrollShow>
        </section>
        <section className={styles.section}>
            <ScrollShow>
                <h1>Kutunun içinde neler var?</h1>
                <ol>
                    <li>İnce kenarlı küçük mercek</li>
                    <li>İnce kenarlı büyük mercek</li>
                    <li>Tahta parçaları</li>
                </ol>
            </ScrollShow>
        </section>
        <section className={styles.section}>
            <ScrollShow>
                <h1>Kolay kurulum</h1>
                Ürünümüz 10 dakikada kolayca kurulabilmektedir. Eğer kuramazsanız, bizimle iletişime geçmeniz yeterli!
                <br />
                <br />

                <a href="/setup" className={styles.fancyLink}>Kurulum <span className={styles.arrow} /></a>
            </ScrollShow>
        </section>
        <section className={styles.section}>
            <ScrollShow>
                <div className={styles.quote} style={{fontSize: "1.25em"}}>
                    <span>
                        Hayatımda hiç böyle bir şey görmedim. Teleskopların yapısını bana gerçekten öğretti.
                        <div style={{
                            textAlign: "end"
                        }}>
                            - Ali Mehmet (13 yaşında)
                        </div>
                    </span>
                </div>
                <br />
                <div className={styles.quote} style={{fontSize: "1.25em"}}>
                    <span>
                        Bu seti ilk gördüğümde biraz ön yargılıydım. Ama sonra anladım ki bu set hayatımda gördüğüm
                        en eğlencelilerinden biriymiş.
                        <div style={{
                            textAlign: "end"
                        }}>
                            - Recep (12 yaşında)
                        </div>
                    </span>
                </div>
                <br />
                <div className={styles.quote} style={{fontSize: "1.25em"}}>
                    <span>
                        Söyleyeceğim hiç bir şey yok. Eğer bu seti düşünüyorsanız, hemen alın.
                        <div style={{
                            textAlign: "end"
                        }}>
                            - Sefa (12 yaşında)
                        </div>
                    </span>
                </div>
            </ScrollShow>
        </section>
        <section className={styles.section}>
            <h1>Siz de 7.000 memnun kişiye katılın!</h1>
            <a className={styles.btn} href="#" style={{
                marginLeft: "auto",
                marginRight: "auto"
            }}>Satın al</a>
        </section>
    </>)
}
