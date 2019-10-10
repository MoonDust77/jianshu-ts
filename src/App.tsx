import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
// import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/index'
import Home from './pages/home/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact={true} component={Home} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
