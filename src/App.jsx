import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';

// Import your firebaseConfig from the appropriate location
import '../firebaseConfig'; // Import initializes Firebase

// Import your components
import Home from './components/page-views/Home';
import About from './components/page-views/About';
import Contact from './components/page-views/Contact';
import NotFound from './components/page-views/NotFound';
import Signup from './components/page-views/Signup';
import Test from './components/page-views/Test';

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="theme">
            <Router>
                <div>
                    {/* Define your routes */}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="*" element={NotFound} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;