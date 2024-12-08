import { Home } from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {

  return (
    <div>
      <Analytics />
      <Header />
          <Home />
      <Footer />
    </div>
  );
};

export default App;
