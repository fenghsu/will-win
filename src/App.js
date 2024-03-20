import { useEffect, useState } from 'react';

import ThemeCustomization from './themes/index';
import Locales from './ui-component/Locales';
import  Routes from '../src/routes/index';
import Snackbar from './ui-component/extended/Snackbar'
import Loader from './ui-component/Loader';

import { dispatch } from './store';
import { getMenu } from './store/slices/menu';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      dispatch(getMenu()).then(() => {
          setLoading(true);
      });
  }, []);

  if (!loading) return <Loader />;

  return (
    <ThemeCustomization>
      <Locales>
        <>
          <Routes/>
          <Snackbar/>
        </>
      </Locales>
    </ThemeCustomization>
  );
}

export default App;

