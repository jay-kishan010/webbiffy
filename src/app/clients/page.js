import Clients from "@/components/Clients";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-green-400 text-center">Our Clients</h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Trusted by industry leaders around the world.
        </p>
      </section>
      <Clients />
    </main>
  );
}
