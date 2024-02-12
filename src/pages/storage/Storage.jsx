import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import { mainContext } from '../../context/mainProvider'

const Storage = () => {

    const {storageMovie, setStorageMovie} = useContext(mainContext)

  return (
    <>
        <h1>Gespeicherte Filme</h1>
    {
        storageMovie.map((movie, index) => {
            
        })
    }
    <Nav />
    </>
  )
}

export default Storage