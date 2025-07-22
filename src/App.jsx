import { Zap, AudioLines, PhoneCall } from "lucide-react";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 font-sans">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[220px] flex flex-col gap-4">
          <div className="h-[180px] w-full border border-gray-400 rounded-xl font-medium flex flex-col items-center justify-center text-center cursor-pointer hover:bg-lime-300 transition">
            <Zap className="w-8 h-8 text-blue-500 mb-2" />
            Smart Lead Capture
          </div>
          <div className="h-[180px] w-full border border-gray-400 rounded-xl font-medium flex flex-col items-center justify-center text-center cursor-pointer hover:bg-lime-300 transition">
            <Zap className="w-8 h-8 text-blue-500 mb-2" />
            Conversational Buyer Engagement
          </div>
          <div className="h-[180px] w-full border border-gray-400 rounded-xl font-medium flex flex-col items-center justify-center text-center cursor-pointer hover:bg-lime-300 transition">
            <Zap className="w-8 h-8 text-blue-500 mb-2" />
            Intent-Based Prioritization
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="bg-gray-100 w-full min-h-[500px] rounded-xl p-6 flex flex-col items-center justify-center relative">
            <div className="flex justify-center gap-[3px] mb-16">
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
              <AudioLines className="text-blue-700" size={"48"} />
            </div>

            <div className="absolute top-[90px] left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white border border-blue-400 rounded-full px-6 py-1 text-blue-700 font-semibold">Real Estate</div>

            <div className="group relative mb-2">
              <button className="relative bg-lime-400 h-16 w-16 group-hover:w-32 transition-all duration-200 rounded-full  flex items-center justify-center px-4">
                <div className="absolute inset-1 rounded-full border-1 border-black"></div>
                <div className="flex items-center  text-black font-semibold text-sm transition-all duration-200">
                  <PhoneCall className="w-5 h-5 " />
                  <span className="hidden group-hover:inline-block">Call Now</span>
                </div>
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center px-2">Tap the call button to speak with our AI Agent</p>

            <div className="mt-4 bg-blue-600 text-white rounded-full px-6 py-1 text-sm font-semibold">0:00</div>

            <div className="mt-6 w-full max-w-[900px] bg-white rounded-lg px-4 py-3 text-sm text-blue-300">
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. F quam quis soluta.</li>
                <li>Facilis minus quidem voluptates. Eos unde.</li>
                <li>Illum impedit, ullam illo veritatis aspernatur reiciendis vero ea recusandae totam magnam nostrum!</li>
              </ul>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 transition">SCHEDULE A CUSTOM DEMO </button>
        </div>
      </div>
    </div>
  );
}

export default App;
