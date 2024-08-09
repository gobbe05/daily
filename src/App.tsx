import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Home from "./StartPage/Home"

export const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="bg-blue-300 h-dvh">
          <Home />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
