import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'

/**--------------------------------------------------------------------------- App application functino
 * 
 * @todo radio input styling on checked
 * 
 * -------------------------------------------------- */

function App () {

  return (

    <BrowserRouter>
      <div className="App">

        <h1>livingtheOKlife</h1>
        
        <HeaderContainer />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>

        <FooterContainer />

      </div>
    </BrowserRouter>

  )
  
}

export default App