import React from 'react'
import { useNavigate } from 'react-router-dom'
import './introApp.css'



const IntroApp = () => {

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/home')
    }

    return (
        <>
            <body className='bodyIntro'>
                <section className='scEyeCatcher'>
                    <img src="../src/assets/EyeCatcher.png" alt="" />
                </section>
                <section className='scIntroDescription'>
                    <div className='divIntroDescription'>
                        <h2>Enjoy Your Movie Watch Everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone,tablet, laptop, and TV.</p>
                        <button className='buttonRed'
                            onClick={goToHome}
                        >Get started</button>
                    </div>
                </section>
            </body>
        </>
    )
}

export default IntroApp