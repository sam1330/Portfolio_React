import { useTranslation } from 'react-i18next';
import './App.css';

function App() {

  const [t, i18n] = useTranslation('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <p>{t("HELLO_WORLD")}</p>
      <button onClick={() => changeLanguage("en")}>En</button>
      <button onClick={() => changeLanguage("es")}>Es</button>
    </div>
  );
}

export default App;
