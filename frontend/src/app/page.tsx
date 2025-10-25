import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">👋 Hi, I'm Pushkar</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A passionate <strong>Java Full-Stack Developer</strong> with interest in networking, security, 
          and web development. I also write tech blogs and share insights online.
        </p>

        <div className="mt-8 space-x-4">
          <a href="/about" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">About Me</a>
          <a href="/achievements" className="bg-gray-100 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-200">Achievements</a>
          <a href="/contact" className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">Contact</a>
        </div>
      </main>
    </>
  );
}
