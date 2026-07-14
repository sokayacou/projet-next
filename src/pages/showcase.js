import { Playfair_Display } from 'next/font/google'
import Layout from '../../components/Layout'
import PageHead from '../../components/PageHead'
import Link from 'next/link'
import Image from 'next/image'

const playfairFont = Playfair_Display({ subsets: ['latin'] })

export default function Showcase() {
  return (
    <>
      <PageHead title="Showcase - Bench&Sofa" description="Showcase of our products" />
      <Layout> 

        <div className="topBand">
          <p className={`midTitle ${playfairFont.className}`}>Showcase</p>
        </div>

        <div>
          <Link className="navLink" href="/">{"<<<"} Home</Link>
        </div>

        <div className="contents">

          <p className="smTitle">Classic Car $5500</p>
          <Image
            src="/projet-next/images/classic_car.jpg"
            width={640} height={450}
            alt="Classic Car $5500"
          />

          <p className="smTitle">Chaise $4560</p>
          <Image
            src="/projet-next/images/chaise.jpg"
            width={640} height={450}
            alt="Chaise $4560"
          />

        </div>

      </Layout>   
    </>
  )
}
