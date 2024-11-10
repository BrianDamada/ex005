import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  function mudarTheme() {
    if(theme === 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  return (
    <header className='flex justify-between py-8 px-24 border-black border-2'>
      <h1>Logo</h1>
      <button onClick={mudarTheme} className='border-black border-2 px-10 py-3 rounded-full'>
        {theme}
        </button>
    </header>
  )
}

export default Header;