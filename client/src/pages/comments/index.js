import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles/base.css';
import './styles/comment-app.css';

import CommentApp from './containers/CommentApp';
import commentReducer from './reducers/comments';

const store = createStore(commentReducer);

ReactDOM.render(<Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root'));
