import { Main } from './Page/Main'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { Person } from './Page/Person'



function App() {

  const queryClient = new QueryClient

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="/person/:id" element={<Person />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
