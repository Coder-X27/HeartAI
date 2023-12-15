import React from 'react'
import line from '../Assets/line.png'

const Howitworks = () => {
    return (
        <div className="container2">
            <div className="howitworkscontainer">
                <div className="howitworks">
                    <h1>HOW IT WORKS</h1>
                </div>
                <p className='hiwcontent'>Translate your ideas into algorithms by just having a conversation with an AI agent. Mind is a new Turing-compatible graph-based language built to generalize domain-specific languages. Mind a conversation into a visualizable graph that represents a sequence of actions. A node represents a specific action, an edge is the next action which will be executed.</p>
                <iframe className='hiwframe' src="https://www.youtube.com/embed/6r5UCpQwee4?si=X5j90QKinGlDmamy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img className='lineimg' src={line} alt="" />
            </div>
        </div>
    )
}

export default Howitworks
