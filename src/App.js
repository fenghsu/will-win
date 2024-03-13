//import { useEffect, useState } from 'react';

import  Routes from '../src/routes/index';

import ThemeCustomization from './themes/index';
import Locales from './ui-component/Locales';

const App = () => {
  return (
    <ThemeCustomization>
      <Locales>
         <Routes></Routes>
      </Locales>
    </ThemeCustomization>
  );
}

export default App;

