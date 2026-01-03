import MainProductTitle from './MainProductTitle'
import styles from './Main.module.css'
import pumpList from '../../store/pump'
export default function Main() {
  const mainProduct = pumpList.filter(product => product.main === true);
  return (
    <div className={styles.container}>
      <section className={styles.video_section}>
          <div className={styles.video_wrapper}>
            <iframe
              src="https://www.youtube.com/embed/jtwmutMwpIw?autoplay=1&mute=1&controls=0&loop=1&playlist=jtwmutMwpIw"
              title="bg-video"
              // allow="autoplay; encrypted-media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={styles.video_content}>
            <h1 className={styles.hero_title}>
                      사람과 기술을 연결하는 솔루션 <br />
            </h1>
            <p className={styles.hero_title}>
              저희 Hana는 창의와 혁신,투명성,지속가능경영으로<br />
              한 걸음씩 나아가고 있습니다.
            </p>
           </div>
      </section>
      <section className={styles.product_section}>
        <h1 > Preview </h1>
        <div className={styles.product_list}>
          {mainProduct.map((item) => {
            return <MainProductTitle key={item.id} product={item} />
          })}
        </div>
      </section>
      <section>
        {/* 섹션 3 */}
      </section>
    </div>
  )
}
