
import { ArrowRight, Lightbulb, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Cutting-edge research in renewable energy and sustainable technologies"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Collaboration",
      description: "Working with international partners and local communities"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Excellence",
      description: "High-quality, data-driven research outputs that influence industry standards"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Impact",
      description: "Advancing sustainability across East Africa and beyond"
    }
  ];

  const projects = [
    {
      year: "2025",
      title: "Advancing E-mobility as a Demand Driver for Renewable Energy",
      description: "Establishing e-mobility as a systematic demand driver for renewable energy across Kenya, Uganda, Tanzania, Malawi and Ethiopia."
    },
    {
      year: "2024",
      title: "Testing Applicability of Used EV Batteries",
      description: "Examining the techno-economic feasibility of repurposing traction batteries for second life applications in Kenya."
    },
    {
      year: "2023",
      title: "Catalysing Bankability of East African Mini grids",
      description: "The REVup Project exploring innovative business models to enhance clean energy access across sub-Saharan Africa."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading Sustainability 
                <span className="text-green-600"> Research</span> in Africa
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Netzero Research and Development Company offers cutting-edge research for sustainability, 
                focusing on renewable energy, e-mobility, and innovative solutions for a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://drivezeewebsite.blob.core.windows.net/netzerordweb/ima17.jpg"
                alt="Woman researcher using laptop"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Netzero RnD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and collaboration to deliver impactful research solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Research Focus Areas
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Energy & Hydrogen</h3>
                    <p className="text-gray-600">Advanced research in renewable energy systems and hydrogen technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Electric Mobility</h3>
                    <p className="text-gray-600">E-vehicle development, EV batteries, and charging infrastructure solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Policy Development</h3>
                    <p className="text-gray-600">Strategic policy frameworks for sustainable transport and energy systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://drivezeewebsite.blob.core.windows.net/netzerordweb/ima16.jpg"
                alt="Research team collaboration"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Research Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ongoing research initiatives making a real impact across East Africa
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold min-w-fit">
                    {project.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join us in advancing sustainability research and creating innovative solutions for a better future
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
