import { Playfair_Display } from 'next/font/google'

const playfairFont = Playfair_Display({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
        <div className="topBand">
            <p className={`bigTitle ${playfairFont.className}`}>BENCH &amp; SOFA</p>
        </div>  

        { children }

        <div className="footer">
            <hr />
            <p>Copyrights (C) 2023 Bench & Sofa, Inc. All Rights Reserved.</p>
        </div>  
    </>
  )
}
