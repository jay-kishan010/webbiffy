import About from "@/components/About";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-green-400 text-center">About Us</h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Learn more about our mission, values, and expert team.
        </p>
      </section>
      <About/>
    </main>
  );
}
