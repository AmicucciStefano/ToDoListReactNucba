import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import { TodoListProvider } from './apps/context/Context';
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TodoListProvider>
          <App />
        </TodoListProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

