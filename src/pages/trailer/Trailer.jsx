import React, { useContext } from 'react'
import Youtube from 'react-youtube'
import { mainContext } from '../../context/mainProvider'
import './trailer.css'
import Nav from '../../components/nav/Nav'

const Trailer = () => {

    const {trailer} = useContext(mainContext)

    const opts = {
        height: window.innerHeight * 0.8,
        width: window.innerWidth,
        playerVars: {
            autoplay: 1
        }
    }

  return (
    <>  
        <header className='headerTrailer'>
            <h1>Trailer</h1>
        </header>
        <section className='scTrailer'>
            {   
                trailer ? (
                    <>
                        <Youtube videoId={trailer[0]?.key} opts={opts} />
                    </>
                ) : null
            }
        </section>
        <Nav />
    </>
  )
}

export default Trailer