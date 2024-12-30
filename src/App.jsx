import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import GoToTopButton from './components/ui/GotoTopButton';
import Blogs from './pages/Blogs';

function App() {

  return (

    <ThemeProvider>
      <Router>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            {/* Other routes */}
          </Routes>
          <GoToTopButton />
        </PageLayout>
      </Router>
    </ThemeProvider>

  )
}

export default App
