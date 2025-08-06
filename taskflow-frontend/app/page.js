import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4 text-violet-600">Welcome to Taskflow</h1>
      <p className="text-lg mb-8">
        A task management app built with Next.js
      </p>
    </div>
  );
}
