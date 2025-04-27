import { LanguageSwitcher } from './components';
import { TradingPanel } from './ui';
import { useCommonTranslations } from './i18n/hooks';

function App() {
  const tCommon = useCommonTranslations();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight text-center md:text-left">
            {tCommon.welcome()}
          </h1>  
            {/* LanguageSwitcher */}
            <LanguageSwitcher />
          </div>  
      </header>       
      <main className="flex-grow container mx-auto p-6">
        {/* Contenu principal */}
        <TradingPanel />
      </main>
    </div>
  );
}

export default App;
