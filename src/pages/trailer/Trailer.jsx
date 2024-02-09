import React, { useContext } from 'react'
import Youtube from 'react-youtube'
import { mainContext } from '../../context/mainProvider'

const Trailer = () => {

    const {trailer} = useContext(mainContext)

    const opts = {
        height: window.screen.height,
        width: window.screen.width,
        playerVars: {
            autoplay: 1
        }
    }

  return (
    <>
        <section className='scTrailer'>
            {   
                trailer ? (
                    <>
                        <Youtube videoId={trailer[0]?.key} opts={opts} />
                    </>
                ) : null
            }
        </section>
    </>
  )
}

export default Trailer