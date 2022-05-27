import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';

import { IntlProvider } from "react-intl";
import localeES from "./locales/es";
import localeEN from "./locales/en";

import Spaces from './components/spaces';

function getLang() {
  return navigator.userLanguage || navigator.language;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={getLang()}
      messages={getLang() === "es-419" ? localeES : localeEN}
      >
      <Spaces/>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
