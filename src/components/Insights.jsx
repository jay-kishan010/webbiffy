import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Explore the latest trends shaping the future of web development.",
    image: "/insight1.jpg",
    link: "/insights/the-future-of-web-development",
  },
  {
    id: 2,
    title: "AI in Software Engineering",
    description: "How artificial intelligence is transforming software development.",
    image: "/insight2.jpg",
    link: "/insights/ai-in-software-engineering",
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    description: "Best practices for designing and developing scalable web apps.",
    image: "/insight3.jpg",
    link: "/insights/building-scalable-apps",
  },
];

export default function Insights() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div key={insight.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={insight.image}
              alt={insight.title}
              width={400}
              height={250}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4 text-green-400">{insight.title}</h2>
            <p className="text-gray-300 mt-2">{insight.description}</p>
            <Link
              href={insight.link}
              className="text-green-400 mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
