import './App.css';

import React, {useState} from 'react';
//import ReactDOM from 'react-dom';

import {LOCALES} from './i18n/locales';
import {IntlProvider} from 'react-intl';
import messages from './i18n/messages';

import Layout from './components/Layout';

const appData = {
  version: "v0.1 alpha",
  title: "Siam React",
  author: "A. Limouzin-Lamothe",
  published: "2021"
}

function App() {
  const [locale, setLocale] = useState(LOCALES.FRENCH);

  function changeLocale(lang) {
    setLocale(lang.value);
  }

  return(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout appData={appData} />
    </IntlProvider>
  );
}

export default App;
