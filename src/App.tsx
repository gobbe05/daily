import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Home from "./StartPage/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./auth/login"
import SignUp from "./auth/singup"

export const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="bg-slate-800 h-dvh">
          <RouterProvider router={router} /> 
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
