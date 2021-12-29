import React from 'react';
import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader';
import Main from './components/Main';

setConfig({ reloadHooks: false });

ReactDOM.render(<Main/>, document.getElementById('root'));
