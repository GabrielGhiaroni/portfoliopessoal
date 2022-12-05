
import './App.css';
import Contato from './Components/Contato/Contato';
import Depoimentos from './Components/Depoimentos/Depoimentos';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Qualificacao from './Components/Qualificacao/Qualificacao';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Servicos from './Components/Servicos/Servicos';
import Skills from './Components/Skills/Skills';
import Sobre from './Components/Sobre/Sobre';

function App() {
  return (
    <>
    <Header />

    <main>
      <Home />
      <Sobre />
      <Skills />
      <Servicos />
      <Qualificacao />
      <Portfolio />
      <Depoimentos />
      <Contato />
    </main>

    <Footer />
    <ScrollToTop />
 
    </>
  );
}

export default App;
