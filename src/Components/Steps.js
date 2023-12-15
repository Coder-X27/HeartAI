import React from 'react'
import line from '../Assets/line.png'

const Steps = () => {
    return (
        <div className="container">
            <div className="steps">
                <div className="step1">
                    <h1 className='stepstitle'>1.Conversational Algorithm <br />Creation.</h1>
                    <p className='stepsdesc'>Translate your ideas into algorithms <br />effortlessly  by having a conversation <br />with out AI agent.</p>
                </div>
                <br /><br />
                <div className="step2">
                    <h1 className='stepstitle'>2. Graph Based Visualization:</h1>
                    <p className='stepsdesc'>Mind transforms your conversation into a visualizable graph, representing a sequence of actions, while edges dictate the execution of sequence.</p>
                </div>
                <div className="step3">
                    <h1 className='stepstitle'>3. Turing Compatibility:</h1>
                    <p className='stepsdesc'>Mind is a Turing-compatible language, offering <br />capabilities comparable to traditional high-level <br />languages with a unique integration of AI.</p>
                </div>
                <img className='lineimg' src={line} alt="" />

            </div>
        </div>
    )
}

export default Steps
