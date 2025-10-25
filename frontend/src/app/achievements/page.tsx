import Navbar from "../components/Navbar";

export default function AchievementsPage() {
  const achievements = [
    "🏅 Built my personal portfolio using Spring Boot + Next.js",
    "💼 Completed Java Full-Stack Developer Certification",
    "☁️ Deployed full-stack projects using Render & Vercel",
    "🧠 Published 10+ tech blogs on programming & security",
    "🛠 Contributed to open-source projects on GitHub"
  ];

  return (
    <>
      <Navbar />
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">My Achievements</h1>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
