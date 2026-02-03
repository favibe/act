import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Hello} from './Hello.jsx'
import {Ani} from './Hello.jsx'
import { TodoList } from './Hello.jsx'
import {Geek} from './Geek.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Ani />
    <TodoList />
    <Geek />
  </StrictMode>,
)
