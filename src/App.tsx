import phone from "./assets/Group_7.png";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-right mt-10 flex flex-row ">
         {/* left part */}
        <div className="mr-40">
          <img src={phone} alt="logo" className="h-auto mx-auto" style={{ width: '400px' }} />
        </div>

        {/* right part */}
        <div className="flex flex-col text-right">
          <h1 className="text-8xl font-black" style={{ fontFamily: "'Work Sans', sans-serif" }}>w2d.</h1>
          <p className="text-4xl" style={{ fontFamily: "'Work Sans', sans-serif" }}>like <span className="text-indigo-300">hinge</span>, but for activities.</p>
          <div className="mt-6 flex flex-col">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="mt-4 px-4 py-2 border rounded-lg text-lg"
            />
            <button 
              className="mt-4 ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-lg"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
