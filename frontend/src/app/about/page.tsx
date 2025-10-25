import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          I'm <strong>Pushkar</strong>, a Java Full-Stack Developer with interest in networking, security, and building web applications.
          Skilled in <strong>Spring Boot</strong> for backend and <strong>Next.js + React</strong> for frontend.
        </p>

        <p className="mt-4 text-gray-700">
          I enjoy writing blogs about technology and sharing knowledge with the developer community.
        </p>
      </main>
    </>
  );
}
