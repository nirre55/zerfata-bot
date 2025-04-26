// import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components';

function App() {
  // const [message, setMessage] = useState('')

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/hello')
  //     .then(res => res.json())
  //     .then(data => setMessage(data.message))
  // }, [])
  //<h1 className="text-2xl font-bold text-blue-600">{message}</h1>
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Titre provenant des fichiers de traduction */}
          <h1 className="text-2xl font-bold text-gray-800">{t('welcome')}</h1>
          {/* Exemple de structure cle valeur {t('buttons.submit')} utilise le point pour acces au sous cles */}
          {/* Composant pour changer de langue */}
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};

export default App