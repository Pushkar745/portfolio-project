import Navbar from "../components/Navbar";

export default function SummaryPage() {
  return (
    <>
      <Navbar />
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Professional Summary</h1>
        <p className="text-gray-700 leading-relaxed">
          Dedicated <strong>Java Full-Stack Developer</strong> with hands-on experience
          in building backend APIs with <strong>Spring Boot</strong> and dynamic frontends with <strong>Next.js</strong>.
        </p>

        <p className="mt-4 text-gray-700">
          Interested in network security, cloud computing, and modern web technologies.
        </p>
      </main>
    </>
  );
}
