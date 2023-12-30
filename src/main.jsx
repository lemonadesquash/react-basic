import React from 'react'
import ReactDOM from 'react-dom/client' // ReactDOM itu buat Web, kalo Mobile App pake react-native

// Import component yang namanya App
import App from './App.jsx'

// Import css (styling)
// import './path-ke-css-file'

// Bikin elemen untuk di-render ke #root
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
