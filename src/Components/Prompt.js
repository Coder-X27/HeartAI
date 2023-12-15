import React from 'react'

const Prompt = () => {
    return (
        <div className="container">
            <div className="promptcontainer">
                <h1>Prompt Examples</h1>
                <div className="promptbox">
                    <p>I selected a list of very profitable on-chain altcoin traders on Ethereum *here the list*. Please use 10% of the ETH in my wallet to buy any token they buy as soon as they buy it. Sell half of each position after the price grows by 100%, let the other half ride.</p>
                </div>
                <div className="promptbox">
                    <p>I want to keep 15-35% allocation in each of the 5 assets in my portfolio, rebalance every time one of the assets grows in price and accounts for more than 35% of my portfolio. Bring it back below 25%, and allocate to the underperforming ones as you deem more appropriate.</p>
                </div>
                <div className="promptbox">
                    <p>If you notice that a token on Binance pumps more than 15% in a 15 minute candle, fetch last week’s price history of all tokens in 30 minutes candles, and buy the 2 which have the highest weekly correlation with the token which pumped, use 20% of the available USDT in my portfolio to buy</p>
                </div>
            </div>
        </div>
    )
}

export default Prompt
