import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <h1>Hello World!</h1>
        <span>This is from the inside of index.js</span>
        <App />
    </>
)