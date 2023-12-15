import React from 'react'
import rotation from '../Assets/rotation.gif'

const Heartai = () => {
    return (
        <div className="container">
            <div className="heartaicontainer">
                <div className="heartsections">
                    <div className="heartleftsection">
                        <div className="minitrade bold">
                            <h1>$HEART AI</h1>
                        </div>
                        <p className="heartdesc">A new way of crafting software with Mind, where turning ideas into reality is easier than ever. Redefine the world of programming, together.</p>
                        <p className="heartdesc2">$MND will function as a utility token, enhancing user experience by unlocking exclusive platform features and services.</p>
                    </div>
                    <div className="heartrightsection">
                        <img src={rotation} alt="" />
                    </div>
                </div>
                <div className="heartcontent">
                    <div className="heartbox">
                        <h1 className='heartboxheading'>User Payment and Revenue Allocation</h1>
                        <p className="heartboxdescription">Users will deposit credit to use the MVP, with charges incurred per usage. Payment options include ETH or USDT/USDC. A portion of the payment will be used to buy back and burn $MND tokens. Revenues will support a token buyback and burn program, starting at 0% allocation and increasing by 10% each week, capping at 50%.</p>
                    </div>
                    <div className="heartbox">
                        <h1 className='heartboxheading'>$MND Tokenomics</h1>
                        <p className="heartboxdescription">$MND's total supply is 100 million tokens. 17% of these tokens will be reserved for the team and vested with one year unlock and one year linear vesting, 3% unlocked. The rest will be dedicated to liquidity, initially locked for one year.</p>
                    </div>
                    <div className="heartbox">
                        <h1 className='heartboxheading'>Token Buyback and Burn Strategy</h1>
                        <p className="heartboxdescription">Revenues from subscription will contribute to the token buyback and burn initiative, growing from 0% to 40% within the first five weeks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heartai
