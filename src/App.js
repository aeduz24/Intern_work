import './App.css';
import Benefits from './Component/Benefits/Benefits.jsx';
import ContactPage from './Component/ContactPage/ContactPage.jsx';
import Items from './Component/Items/Items.jsx';
import Team from './Component/Team/Team.jsx';
import Hero from './Home/Hero';
import WhoAreWe from './Home/WhoAreWe';

function App() {
  return (
    <>
    <Hero />
    <WhoAreWe />
    <Items />
    <Team />
    <ContactPage />
    <Benefits />
    </>
  );
}

export default App;
