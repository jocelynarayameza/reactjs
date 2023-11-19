import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
        <Navbar />
        <ItemListContainer greeting={"Productos"} />
    </>
  )
}

export default App