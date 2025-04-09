export default function Home() {
    return (
      <main className="bg-white text-gray-900 min-h-screen">
        <section className="bg-[#F8F8F8] p-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            UX Design Workshop
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Learn UX that drives growth – from a top industry expert.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Register Now
          </button>
        </section>
  
        <section className="p-6 md:p-10 text-center bg-white">
          <h2 className="text-2xl font-semibold mb-2">Date & Time</h2>
          <p className="text-lg text-gray-700 mb-6">April 10, 2025 | 7 PM - 9 PM IST</p>
  
          <h2 className="text-2xl font-semibold mb-2">Meet Your Mentor</h2>
          <p className="text-lg text-gray-700">John Doe, Head of UX at DesignCorp</p>
        </section>
  
        <section className="p-6 md:p-10 bg-[#F9FAFB] text-center">
          <h2 className="text-3xl font-semibold mb-6">What You'll Learn</h2>
          <ul className="space-y-4 max-w-xl mx-auto text-left text-gray-800">
            <li>✅ Design frameworks for business growth</li>
            <li>✅ Creating user-centered wireframes</li>
            <li>✅ Real-world UX case studies</li>
          </ul>
        </section>
  
        <section className="p-6 md:p-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Register for Free</h2>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
              Submit
            </button>
          </form>
        </section>
      </main>
    );
  }
  