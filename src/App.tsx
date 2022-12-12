
import { PropaneSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './components/hooks/reduxHooks';
import RouteHook from './components/hooks/useRoute';
import { getDataProd } from './features/productSlice';
import ThemeContext from './themeContext';

function App() {
  const dispatch = useAppDispatch();
  const [prod, setProd] = useState<any>()
  var[theme, setTheme] = useState<string>('light')
  var[color, setColor] = useState<string>('black')

  
function changeTheme() {
  theme=='light' ? setTheme('dark') : setTheme('light')
  theme=='light' ? setColor('white') : setColor('black')
}

useEffect(()=>{
  dispatch(getDataProd())
}, [])

  return (
    <ThemeContext.Provider value={{
      color, theme, 
      changeTheme,
    }}>
      <div className="App">
        <RouteHook />
        {/* {prod&&prod.map((e:any)=>(
          <>
          <span>{e.id}</span>
          <span>{e.product}</span>
          <span>{e.type}</span>
          <span>{e.priceHippo}</span>
          <span>{e.priceEvroopt}</span>
          <span>{e.link}</span>
          </>
        ))} */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
