import { RegionProvider } from './context/RegionContext';
import { useRouter } from './hooks/useRouter';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Global } from './pages/Global';
import { WhoWeAre } from './pages/WhoWeAre';
import { Services } from './pages/Services';
import { TechnicalCapabilities } from './pages/TechnicalCapabilities';
import { CurrentWork } from './pages/CurrentWork';
import { GlobalDelivery } from './pages/GlobalDelivery';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';

function AppRouter() {
  const { currentRoute } = useRouter();

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home />;
      case 'global':
        return <Global />;
      case 'who-we-are':
        return <WhoWeAre />;
      case 'services':
        return <Services />;
      case 'technical-capabilities':
        return <TechnicalCapabilities />;
      case 'current-work':
        return <CurrentWork />;
      case 'global-delivery':
        return <GlobalDelivery />;
      case 'process':
        return <Process />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navigation />
      <main className="page-transition">
        {renderPage()}
      </main>
    </>
  );
}

function App() {
  return (
    <RegionProvider>
      <AppRouter />
    </RegionProvider>
  );
}

export default App;
