import scss from './App.module.scss';
import React from 'react';

import Widget from './Widget/Widget';

export const App = () => {
  return (
    <div className={scss.app}>
      <Widget/>
      
    </div>
  );
};
