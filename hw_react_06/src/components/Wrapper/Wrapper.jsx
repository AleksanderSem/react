import React from 'react';
import { useSelector } from 'react-redux';
import { themeStateSelector } from '../../store/themes/selectors'
import './style.scss';

const Wrapper = ({ children }) => {
  const state = useSelector(themeStateSelector);
  
  return (
    <main style={state.themes[state.type]}>
      <section className="container">
        {children}
      </section>
    </main>
  );
}

export default Wrapper