import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SelectedItemProvider } from './contexts/SelectedItemContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className={'website-mock'}>
          <div className={'ms-1 me-1 ms-xxl-2 me-xxl-2'}>
              <SelectedItemProvider>
                  <App />
              </SelectedItemProvider>
          </div>
      </div>
  </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
