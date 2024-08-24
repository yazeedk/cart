import React from 'react';
import { createRoot } from 'react-dom/client';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return <Cart />;
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
