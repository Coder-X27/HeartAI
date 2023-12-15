import React from 'react'
import homeimg from '../Assets/home.gif'

const Hero = () => {
    return (
        <>

        <div className="container x">
            <div className="homecontent mtop">
                <h1 className="hometitle">The bridge between your thoughts and executable algorithms.</h1>
                <p className="homedescription">Heart AI is an agnostic graph-based meta-programming language designed for both AI and humans, enabling easy program creation and modification through natural language or a drag-and-drop editor.</p>
                <div className="homebtns">
                    <button className="homebtn">Try Heart</button>
                    <button className="homebtn">$HEARTAI</button>
                </div>
            </div>
            <div className="homeimg hide">
                <img src={homeimg} alt="" />
            </div>
        </div>
        <div className="homeimg show">
            <img src={homeimg} alt="" />
        </div>
        </>
    )
}

export default Hero
