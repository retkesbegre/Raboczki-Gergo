
// CSS fájl (ha van)
import 'App.css';

// Hookok, ha szükséges


// React Router, ha navigációt használsz
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
    return (
        <div className="container">
      <header>
        <h1>Üdv az oldalon!</h1>
        <nav>
          <ul>
            <li><a href="#home">Főoldal</a></li>
            <li><a href="#about">Rólunk</a></li>
            <li><a href="#contact">Kapcsolat</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Bemutatkozás</h2>
          <p>Ez egy példa React alkalmazás, ahol HTML elemeket használunk JSX-ben.</p>
        </section>

        <section>
          <h2>Űrlap</h2>
          <form>
            <label htmlFor="name">Név:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button type="submit">Küldés</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Minden jog fenntartva.</p>
      </footer>
    </div>
    );
}
export default App;
