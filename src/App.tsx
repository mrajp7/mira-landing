
// import AIReception from './components/aiReception'
// import CarouselSection from './components/carouselSection'
// import ConversationSec from './components/conversationSec'
// import FAQSection from './components/faq'
// import Features from './components/features'
// import Footer from './components/footer'
// import Integrations from './components/integrations'
// import LandingSection from './components/landingSection'
// import TransformSection from './components/transformSection'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FAQDetailView from './pages/allFaq';

function App() {

  return (
    <BrowserRouter>
      <Routes>  {/* Replaced Switch with Routes in React Router v6 */}
        <Route path="/" element={<Home />} />
        <Route path="/allFaq" element={<FAQDetailView />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
