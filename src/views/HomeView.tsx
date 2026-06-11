import updates from '@/data/updates.js'
import photoDigi from '@/data/photoDigi.js'
import photoToy from '@/data/photoToy.js'
import photoRetouch from '@/data/photoRetouch.js'
import illustOebi from '@/data/illustOebi.js'
import illustSyumi from '@/data/illustSyumi.js'
import illustWork from '@/data/illustWork.js'
import styles from './HomeView.module.scss'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import SpotMap from '../components/SpotMap'

const sources = [
  { data: photoDigi, path: '/photo/digi', label: 'PHOTO / デジカメとか' },
  { data: photoToy, path: '/photo/toy', label: 'PHOTO / トイカメラとか' },
  { data: photoRetouch, path: '/photo/retouch', label: 'PHOTO / 加工' },
  { data: illustSyumi, path: '/illust/syumi', label: 'ILLUST / シュミヱ' },
  { data: illustOebi, path: '/illust/oebi', label: 'ILLUST / オエビヱ' },
  { data: illustWork, path: '/illust/work', label: 'ILLUST / シゴトヱ' },
]

// 各カテゴリから最新2件の先頭画像を取得
const latestItems = sources.flatMap(({ data, path, label }) =>
  data.slice(0, 1).map((item: { images: string[] }) => ({
    image: item.images[0],
    path,
    label,
  })),
)

export default function HomeView () {
  return (
    <>
      <h2 className="m-pageTitle">HOME</h2>

      <p className="m-pageDescription">
        18年ほど前に作った個人サイトを雰囲気を残しつつ改修・React化。ファイル構成なども整理中。思いつきの実験などをしていく予定。
      </p>

      <section className='m-contents m-contents--map'>
        <div className="m-contents__inner">
          <h3 className="m-contents__label">旅の記録</h3>
          <SpotMap />
        </div>
      </section>

      <section className="m-contents">
        <div className="m-contents__inner">
          <h3 className="m-contents__label">更新履歴</h3>
          <dl className={styles['p-home__updates']}>
            {updates.map((update: any) => (
              <Fragment key={update.date + update.text}>
                <dt>{update.date}</dt>
                <dd>
                  {update.link ? (
                    update.link.startsWith('http') ? (
                      <a href={update.link} className="nav-link" target="_blank" rel="noopener noreferrer">
                        {update.text}
                      </a>
                    ) : (
                      <Link to={update.link} className="nav-link">
                        {update.text}
                      </Link>
                    )
                  ) : (
                    <span>{update.text}</span>
                  )}
                </dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </section>

      <section className="m-contents">
        <div className="m-contents__inner">
          <h3 className="m-contents__label">最近の追加</h3>
          <div className={styles['p-home__latestGrid']}>
            {latestItems.map((item) => (
              <Link className={styles['p-home__latestItem']} key={item.path} to={item.path}>
                <span className={styles['p-home__latestImg']}><img src={item.image} /></span>                
                <p className={styles['p-home__latestLabel']}>{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}