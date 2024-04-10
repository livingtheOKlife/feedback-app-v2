import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'
import FeedbackItem from './components/FeedbackItem'

function App () {

  return (

    <div className="App">

      <h1>livingtheOKlife</h1>
      
      <HeaderContainer />

      <main id="main-container">

        <FeedbackItem />

      </main>

      <FooterContainer />

    </div>

  )
  
}

export default App