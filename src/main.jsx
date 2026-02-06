import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Hello} from './Hello.jsx'
import {Ani} from './Hello.jsx'
import { TodoList } from './Hello.jsx'
import { Counter } from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Ani />
    <TodoList />
    <Counter />
  </StrictMode>,
)
