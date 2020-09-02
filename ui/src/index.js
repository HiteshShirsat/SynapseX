import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import {Provider} from 'react-redux';
import store from './redux';

import 'antd/dist/antd.css';
import './style.css';
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))
