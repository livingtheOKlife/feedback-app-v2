import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'

/**--------------------------------------------------------------------------- App application function
 * 
 * @name App
 * 
 * @function
 * 
 * @returns contents of the feedback ui application
 * 
 * @author livingtheOKlife
 * 
 * @date 12.04.2024
 * 
 * -------------------------------------------------- */

function App () {

  // ------------------------- return

  return (

    <FeedbackProvider>
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
    </FeedbackProvider>

  )
  
}

// --------------------------------------------------------------------------- App application export

export default App