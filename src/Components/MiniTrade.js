import React from 'react'
import line from '../Assets/line.png'

const MiniTrade = () => {
    return (
        <div className="container">
            <div className="minitradecontainer">
                <div className="minitrade">
                    <h1>Heart AI Trade</h1>
                </div>
                <div className="minitradedesc">
                    <p>Heart AI can operate across every domain of existence but sees its first implementation in MindTrade, which covers the cryptocurrencies markets domain.</p>
                </div>
                <img className='lineimg' src={line} alt="" />
            </div>
        </div>
    )
}

export default MiniTrade
