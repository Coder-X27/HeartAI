import React from 'react'
import plogo1 from '../Assets/plogo1.png'
import plogo2 from '../Assets/plogo2.png'
import plogo3 from '../Assets/plogo3.png'
import line from '../Assets/line.png'

const Powered = () => {
    return (
        <div className="poweredby">
            <br />
            <br />
            <br />
            <h1 className='poweredtitle'>Powered by</h1>
            <div className="poweredimages">
                <img src={plogo3} alt="" className="pimg" />
                <img src={plogo2} alt="" className="pimg" />
                <img src={plogo1} alt="" className="pimg" />
                <div className="pimg">
                    <p className='pimgtext'>🔗 🦜</p>
                    <p className='pimgtext'>LangChain</p>
                </div>
            </div>
            <img className='lineimg' src={line} alt="" />
        </div>
  )
}

export default Powered
