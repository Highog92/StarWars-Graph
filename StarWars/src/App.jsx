import { Main } from './Page/Main'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'

function App() {

  const queryClient = new QueryClient
  
  // const query = useQueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  )
}

export default App
