import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";
import { en } from './I18n/en/en';
import { es } from './I18n/es/es';

import AppLayout from "./components/AppLayout/AppLayout";


import "./index.css"

i18next.init({
  lng: 'es',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AppLayout>
        <App />
      </AppLayout>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
