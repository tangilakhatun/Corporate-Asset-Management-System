
import { Shield, Clock, Users, BarChart2 } from "lucide-react";

const features = [
  {
    icon: <Shield className="text-indigo-500 w-12 h-12" />,
    title: "Prevent Asset Loss",
    description: "Keep a precise record of all company assets to reduce misplacement and theft.",
  },
  {
    icon: <Clock className="text-cyan-400 w-12 h-12" />,
    title: "Streamline HR Processes",
    description: "Automate asset requests, approvals, and returns, saving valuable administrative time.",
  },
  {
    icon: <Users className="text-indigo-500 w-12 h-12" />,
    title: "Enhance Accountability",
    description: "Assign assets with clear ownership and monitor usage in real-time.",
  },
  {
    icon: <BarChart2 className="text-cyan-400 w-12 h-12" />,
    title: "Visualize Data",
    description: "Gain instant insights with easy-to-understand dashboards, analytics, and reports.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-base-200 pt-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          About AssetVerse
        </h2>
        <p className="  text-base-content mb-16 text-lg max-w-3xl mx-auto">
          AssetVerse is a cutting-edge corporate asset management platform designed to simplify the way companies manage their physical resources.
          From laptops and keyboards to chairs and other office equipment, AssetVerse ensures every asset is tracked, assigned, and returned efficiently.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
