
import { PropaneSharp } from '@mui/icons-material';
import React, { Suspense, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import './App.scss';
import { useAppDispatch } from './components/hooks/reduxHooks';

import { getDataProd } from './features/productSlice';
import ThemeContext from './themeContext';

const RouteHook = React.lazy(() =>import ('./components/hooks/useRoute'))
function App() {
  const dispatch = useAppDispatch();
  var[theme, setTheme] = useState<string>('light')
  var[color, setColor] = useState<string>('black')
const logo = require("./img/grey-loader.gif")
function changeTheme() {
  theme=='light' ? setTheme('dark') : setTheme('light')
  theme=='light' ? setColor('white') : setColor('black')
}

useEffect(()=>{
  dispatch(getDataProd())
}, [])

console.log(dispatch(getDataProd()))

  return  (
    
      <RecoilRoot>
      <ThemeContext.Provider value={{
        color, theme, 
        changeTheme,
      }}>
        <Suspense fallback={<div className='loader'><img src={String(logo)}/></div>}>
        <div className="App">
          <RouteHook />
        </div>
        </Suspense>
      </ThemeContext.Provider>
    </RecoilRoot>

  )
}

export default App;
