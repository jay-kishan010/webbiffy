import Services from "@/components/Services";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-green-400 text-center">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          We provide cutting-edge web development solutions tailored to your needs.
        </p>
      </section>
      <Services />
    </main>
  );
}
