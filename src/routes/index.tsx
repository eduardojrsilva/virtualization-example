import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import ReactWindow from '../pages/ReactWindow';
import ManualImplementation from '../pages/ManualImplementation';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ManualImplementation} />
      <Route path="/window" exact component={ReactWindow} />
    </Switch>
  );
};

export default AppRoutes;
