import React, { useContext } from 'react';
import { Context } from '../../App'
import './style.scss';

const Wrapper = ({ children }) => {
  const { state } = useContext(Context)

  return (
    <main style={state.theme.themes[state.theme.type]}>
      <section className="container">
        {children}
      </section>
    </main>
  );
}

export default Wrapper