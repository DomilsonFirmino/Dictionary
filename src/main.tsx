import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import WordsContextProvider from './contexts/WordsContextProvider.tsx'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60*5000 
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WordsContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WordsContextProvider>
  </StrictMode>,
)
