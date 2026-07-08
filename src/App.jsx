import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BooksCategories from './pages/BooksCategories';
import ShkodraLibrary from './pages/ShkodraLibrary';
import Contact from './pages/Contact';
import MyCard from './pages/MyCard';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksCategories />} />
          <Route path="/library" element={<ShkodraLibrary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-card" element={<MyCard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
