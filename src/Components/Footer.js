import React from 'react'
import brand from '../Assets/Logo Big.png'
import line from '../Assets/line.png'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footersection">
                <img className="fsec1" src={brand} alt="" />
                <img className='fsec3' src={line} alt="" />
                <div className="fsec2">
                    <div className="footerbox">
                        <h1 className="fboxhead">$HEARTAI</h1>
                        <div className="fboxlinks">
                            <a href='/' className="fboxlink">DexTools</a>
                            <a href='/' className="fboxlink">Etherscan</a>
                            <a href='/' className="fboxlink">Uniswap</a>
                        </div>
                    </div>
                    <div className="footerbox">
                        <h1 className="fboxhead">Socials</h1>
                        <div className="fboxlinks">
                            <a href='/' className="fboxlink">Telegram</a>
                            <a href='/' className="fboxlink">Twitter</a>
                        </div>
                    </div>
                    <div className="footerbox">
                        <h1 className="fboxhead">Resources</h1>
                        <div className="fboxlinks">
                            <a href='/' className="fboxlink">Docs</a>
                            <a href='/' className="fboxlink">CoinMarketcap <br />Request ID: 811402</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyright'>Please note that our services are not available to users in the United States or individuals in countries subject to embargo restrictions.</p>
        </div>
    </>
  )
}

export default Footer
