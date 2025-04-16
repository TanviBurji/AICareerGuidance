import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const careers = [
  {
    title: 'Web Developer',
    description: 'Build and maintain websites and web applications using modern technologies and frameworks.'
  },
  {
    title: 'AI/ML Engineer',
    description: 'Develop intelligent systems and algorithms that can learn from and make predictions on data.'
  },
  {
    title: 'UI/UX Designer',
    description: 'Create intuitive and engaging user interfaces and experiences for digital products.'
  },
  {
    title: 'Graphic Designer',
    description: 'Design visual content for digital and print media using creative tools and techniques.'
  },
  {
    title: 'Content Writer',
    description: 'Create engaging written content for websites, marketing materials, and social media.'
  },
  {
    title: 'Data Scientist',
    description: 'Analyze complex data sets to help organizations make better decisions.'
  },
  {
    title: 'Software Tester',
    description: 'Ensure software quality through systematic testing and bug identification.'
  },
  {
    title: 'Mobile App Developer',
    description: 'Create applications for iOS and Android devices using modern frameworks.'
  },
  {
    title: 'Cloud Architect',
    description: 'Design and implement cloud infrastructure solutions for organizations.'
  },
  {
    title: 'Blockchain Developer',
    description: 'Build decentralized applications and smart contracts using blockchain technology.'
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Protect organizations from cyber threats and implement security measures.'
  },
  {
    title: 'Game Developer',
    description: 'Create engaging video games for various platforms using game engines.'
  },
  {
    title: 'DevOps Engineer',
    description: 'Streamline development and deployment processes through automation.'
  },
  {
    title: 'Business Analyst',
    description: 'Bridge the gap between business needs and technology solutions.'
  },
  {
    title: 'Digital Marketer',
    description: 'Promote products and services through digital channels and strategies.'
  }
];

export default function ProfessionExploration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Explore Career Paths
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-400 group-hover:text-red-400">
                {career.title}
              </h3>
              <p className="text-gray-300">{career.description}</p>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-red-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate('/predict')}
            className="px-8 py-4 bg-white text-black rounded-full font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            Get Personalized Career Prediction
          </button>
        </div>
      </div>
    </div>
  );
}