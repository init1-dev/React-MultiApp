import React from 'react';
import ReactDOM from 'react-dom';

import { MainApp } from './components/09-useContext/MainApp';

import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
- Rutas de ejercicios anteriores:

  import { HookApp } from './HookApp';
  import { CounterApp } from './components/01-useState/CounterApp';
  import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
  import { SimpleForm } from './components/02-useEffect/SimpleForm';
  import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
  import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
  import { FocusScreen } from './components/04-useRef/FocusScreen';
  import { RealExampleRef } from './components/04-useRef/RealExampleRef'; // GIT desployed
  import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
  import { Memorize } from './components/06-memos/Memorize';
  import { MemoHook } from './components/06-memos/useMemo';
  import { CallbackHook } from './components/06-memos/CallbackHook';
  import { Padre } from './components/07-tarea-memo/Padre';
  import './components/08-useReducer/intro-reducer';
  import { TodoApp } from './components/08-useReducer/TodoApp';
*/