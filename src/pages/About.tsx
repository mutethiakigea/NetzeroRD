import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      title: "Research and Data Capabilities", 
      description: "Produce high-quality, data-driven research outputs that influence industry standards and practices."
    },
    {
      title: "Innovate in Product Development",
      description: "Focus on innovation, developing and optimising products in e-vehicle, EV batteries and charging station technologies."
    },
    {
      title: "Capacity Building",
      description: "Develop a strong internal culture of research and knowledge sharing to train and engage clients on energy, transport, and policy-related matters."
    },
    {
      title: "Expand Market Influence",
      description: "Strengthen presence in East African markets and establish new partnerships."
    }
  ];

  const partnerships = [
    {
      name: "KCIC",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/KCIC.png",
      description: "Kenya Climate Innovation Center, supporting green technology innovation"
    },
    {
      name: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/12-Month-Graduate-Programme-Internships-at-SABC-Now-Open-for-2025-2025-05-08T155333.559-780x470.png",
      description: "Giving technical assistance for sustainable development projects"
    },

    {
      name: "IUK (Innovate UK)",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/innnovate_uk_ad21d080fe.png",
      description: "Innovate UK, the UK's innovation agency, funding and supporting innovation in business"
    },
    {
      name: "Pmanifold",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/images.jpeg",
      description: "Pmanifold, a consultancy firm specializing in project management and advisory services"
    },
    {
      name: "EEP Africa",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/EEP Africa.png",
      description: "The Energy and Environment Partnership (EEP) Africa, promoting renewable energy and energy efficiency"
    },
    {
      name: "Bayes Consulting",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/Bql6WW3Q_400x400.jpg",
      description: "Bayes Consulting, providing expertise in data analysis and research methodologies"
    },
    {
      name: "Climate Compatible Growth (CCG)",
      logo: "https://drivezeewebsite.blob.core.windows.net/logos/CCG.jpg",
      description: "A global initiative focused on sustainable development and climate change mitigation"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Netzero RnD</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading sustainability research and development company dedicated to advancing 
              renewable energy solutions across East Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To conduct systematic investigation and research that advances sustainable energy solutions, 
                challenges existing paradigms, and pushes the boundaries of innovation in renewable energy, 
                e-mobility, and environmental sustainability across Africa.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading research and development company in Africa, driving the transition 
                to sustainable energy systems and establishing new standards for environmental 
                responsibility and technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Research Philosophy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Curiosity-Driven Research</h3>
                  <p className="text-gray-600">
                    Curiosity is at the heart of our research. It's the driving force that prompts us to ask 
                    questions and seek answers, exploring the unknown and challenging what we think we know.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Approach</h3>
                  <p className="text-gray-600">
                    We believe effective collaboration is key to impactful research. Our team works with 
                    clearly defined roles, regular communication, and a supportive environment that fosters innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
                  <p className="text-gray-600">
                    We apply innovation by thinking outside the box, integrating new technologies, 
                    using interdisciplinary approaches, and testing ideas through prototyping and experimentation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://drivezeewebsite.blob.core.windows.net/netzerordweb/ima7.jpg"
                alt="Research team around display screens"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the principles of our core objectives and identifying effective solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Value Proposition
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Human Capital</h3>
              <p className="text-gray-600">
                Pool of experts in e-mobility & renewable energy solutions with extensive experience 
                in installation & operation of infrastructure across East Africa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Partnerships</h3>
              <p className="text-gray-600">
                Expertise in hardware, particularly renewable energy, e-vehicles & charging infrastructure 
                with established networks and strategic partnerships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Excellence</h3>
              <p className="text-gray-600">
                Data-driven research outputs and on-site R&D capabilities that provide valuable 
                insights and training opportunities across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading organizations and institutions worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{partner.name}</h3>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
