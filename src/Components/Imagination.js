import React from 'react'
import homeimg2 from '../Assets/home2.gif'

const Imagination = () => {
    return (
        <div className="container">
            <div className="imagintaionsection">
                <div className="homeimg2">
                    <img src={homeimg2} alt="" />
                </div>
                <div className="homecontent2 mtop">
                    <h1 className="hometitle">Unleash your imagination with Mind.</h1>
                    <p className="homedescription">Mind represents the evolution of programming languages. It's a revolutionary tool designed to bridge the gap between human creativity and AI innovation. With a graph-based structure, Mind enables program creation and modification trough natural language and a drag-and-drop editor.</p>
                </div>
            </div>
        </div>
    )
}

export default Imagination
