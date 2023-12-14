import React from 'react'
import homeimg from '../Assets/home.gif'
import homeimg2 from '../Assets/home2.gif'
import plogo1 from '../Assets/plogo1.png'
import plogo2 from '../Assets/plogo2.png'
import plogo3 from '../Assets/plogo3.png'
import line from '../Assets/line.png'
const Home = () => {
    return (
        <>
            <div className="container ">
                <div className="homecontent mtop">
                    <h1 className="hometitle">The bridge between your thoughts and executable algorithms.</h1>
                    <p className="homedescription">Mind is an agnostic graph-based meta-programming language designed for both AI and humans, enabling easy program creation and modification through natural language or a drag-and-drop editor.</p>
                    <div className="homebtns">
                        <button className="homebtn">Try Heart</button>
                        <button className="homebtn">$HEARTAI</button>
                    </div>
                </div>
                <div className="homeimg">
                    <img src={homeimg} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="homeimg2">
                    <img src={homeimg2} alt="" />
                </div>
                <div className="homecontent2 mtop">
                    <h1 className="hometitle">Unleash your imagination with Mind.</h1>
                    <p className="homedescription">Mind represents the evolution of programming languages. It's a revolutionary tool designed to bridge the gap between human creativity and AI innovation. With a graph-based structure, Mind enables program creation and modification trough natural language and a drag-and-drop editor.</p>
                </div>
            </div>
            {/* #KHUSHIIIIIIIIIIIIIIIIIIIIII  */}
            <div className="evolution">

            </div>
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
            {/* #KHUSHIIIIIIIIIIIIIIIIIIIIII  */}
            <div className="container">
                <div className="keyfeatures">
                    <h1>Key Features</h1>
                </div>
            </div>
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
            <div className="container">
                <div className="minitrade">
                    hi there
                </div>
            </div>
        </>
    )
}

export default Home
