import phone from "./assets/Group_7.png"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import InputWaitlist from "./components/InputWaitlist"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Title for small screens */}
          <div className="flex flex-col items-center mb-7 md:hidden">
            <h1
              className="text-4xl font-black mb-2"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              w2d.
            </h1>
            <p
              className="text-xl"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              like <span className="text-indigo-300">hinge</span>, but for
              activities.
            </p>
          </div>

          {/* Image and content container */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="mr-0 md:mr-20 md:ml-10">
              <img
                src={phone}
                alt="logo"
                className="h-auto mx-auto w-[250px] md:w-[300px]"
              />
            </div>

            <div className="flex md:hidden mt-6 flex-col" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                <InputWaitlist />
              </div>

            {/* Text content for medium and above screens */}
            <div className="flex flex-col justify-center text-right md:pr-5">
              <h1
                className="text-8xl font-black hidden md:block"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                w2d.
              </h1>
              <p
                className="text-4xl hidden md:block"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                like <span className="text-indigo-300">hinge</span>, but for
                activities.
              </p>
              <div className="hidden md:flex mt-6 flex-col" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                <InputWaitlist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
