import { Main } from './Page/Main'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'

function App() {

  const queryClient = new QueryClient
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  )
}

export default App
