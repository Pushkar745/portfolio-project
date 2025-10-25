import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-6 bg-blue-600 text-white py-3 mb-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/achievements">Achievements</Link>
      <Link href="/summary">Summary</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
