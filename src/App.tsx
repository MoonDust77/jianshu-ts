import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
// import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  )
}

export default App
