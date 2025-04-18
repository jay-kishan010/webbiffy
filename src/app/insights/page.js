import Insights from "@/components/Insights";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-green-400 text-center">Latest Insights</h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Stay updated with industry trends, tips, and expert opinions.
        </p>
      </section>
      <Insights />
    </main>
  );
}
