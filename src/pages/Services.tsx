import { FileText, Cog, GraduationCap, BarChart3, Battery, Zap, Car, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Market Research and Analysis",
      description: "Comprehensive data collection and analysis with full-length reports, articles, briefs, short guides, and webinars.",
      features: [
        "Data collection and analysis",
        "Full-length research reports",
        "Policy briefs and articles", 
        "Short guides and documentation",
        "Interactive webinars and presentations"
      ]
    },
    {
      icon: <Cog className="w-12 h-12 text-green-600" />,
      title: "Product Development",
      description: "Hardware development, particularly e-vehicles, repurposed EV batteries & charging stations.",
      features: [
        "E-vehicle development and optimization",
        "EV battery repurposing solutions",
        "Charging station technology",
        "Hardware prototyping and testing",
        "Technical feasibility studies"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
      title: "Training and Capacity Building",
      description: "Comprehensive training programs for EV repairs, charging infrastructure, batteries, and solar systems.",
      features: [
        "EV repairs and maintenance training",
        "EV charging infrastructure setup",
        "Battery management systems",
        "Solar system installation",
        "Technical skills development"
      ]
    }
  ];

  const focusAreas = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Energy & Hydrogen",
      description: "Advanced research in renewable energy systems and hydrogen technologies for sustainable power generation."
    },
    {
      icon: <Car className="w-8 h-8 text-green-600" />,
      title: "Electric Mobility",
      description: "Comprehensive solutions for electric vehicle development, battery systems, and charging infrastructure."
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Policy Development",
      description: "Strategic policy frameworks and regulatory guidance for sustainable transport and energy systems."
    }
  ];

  const targetSegments = [
    {
      title: "International Financial Institutions",
      description: "World Bank and development banks seeking expert advisory services and research insights.",
      image: "https://drivezeewebsite.blob.core.windows.net/logos/IFS.jpg"
    },
    {
      title: "Government & Utilities",
      description: "Parastatals and utilities requiring strategic advice on policy design and implementation.",
      image: "https://drivezeewebsite.blob.core.windows.net/logos/utilities.jpg"
    },
    {
      title: "Minigrid Operators",
      description: "Energy companies seeking demand optimization and innovative business models.",
      image: "https://drivezeewebsite.blob.core.windows.net/logos/minigrade.jpg"
    }
  ];

  const specializations = [
    {
      icon: <Battery className="w-6 h-6 text-green-600" />,
      title: "EV Battery Solutions",
      description: "Second-life applications and repurposing technologies"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Charging Infrastructure",
      description: "Design and implementation of EV charging networks"
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-600" />,
      title: "Solar Integration",
      description: "Renewable energy integration with transport systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      title: "Data Analytics",
      description: "Advanced data collection and performance analysis"
    }
  ];

  const researchProjects = [
    {
      id: 'emobility-demand-driver',
      title: "Advancing E-mobility as a Demand Driver for Renewable Energy in Sub-Saharan Africa",
      year: "2025",
      funder: "Bayes Consulting",
      description: "This research study aims to establish e-mobility as a systematic demand driver for renewable energy across Kenya, Uganda, Tanzania, Malawi and Ethiopia.",
      regions: ["Kenya", "Uganda", "Tanzania", "Malawi", "Ethiopia"],
      status: "Ongoing"
    },
    {
      id: 'governance-financing',
      title: "The Role of Governance in Financing the Electrification of Popular Transport: Kenya Vietnam Comparative Analysis",
      year: "2025",
      funder: "Climate Compatible Growth (CCG) Flexible Research Fund",
      description: "This research study aims to investigate and compare the impact of governance and regulatory frameworks on financing mechanisms for popular transport electrification in Kenya and Vietnam.",
      regions: ["Kenya", "Vietnam"],
      status: "Ongoing"
    },
    {
      id: 'evci-feasibility',
      title: "Assessing the feasibility of electric vehicle charging infrastructure (EVCI) in Kenya",
      year: "2025",
      funder: "GIZ's Promotion of Electric Mobility project in partnership with KenGen",
      description: "This study will examine the technical, financial, and policy aspects of EVCI and offer practical recommendations for expanding infrastructure.",
      regions: ["Kenya"],
      status: "Ongoing"
    },
    {
      id: 'used-ev-batteries',
      title: "Testing Applicability of Used EV Batteries for Second Life Applications in Kenya",
      year: "2024",
      funder: "GIZ",
      description: "This study examines the techno-economic feasibility of repurposing traction batteries by analyzing performance and viability test samples taken from passenger vehicles.",
      regions: ["Kenya"],
      status: "Completed"
    },
    {
      id: 'repower-swap',
      title: "RePower Swap: Building a Sustainable Future for Kenyans",
      year: "2024",
      funder: "KCIC - SWIFT Initiative",
      description: "Knights Energy is working on advanced battery repurposing for stationary energy storage, which will aid renewable energy systems and battery swap technologies for E2W.",
      regions: ["Kenya"],
      status: "Completed"
    },
    {
      id: 'revup-project',
      title: "Catalysing Bankability of East African Mini grids by Integrating Transport Energy Demand",
      year: "2023",
      funder: "IUK and Energy Catalyst",
      description: "The REVup Project is exploring innovative business models to enhance clean energy access across sub-Saharan Africa, with a focus on Kenya.",
      regions: ["Kenya", "East Africa"],
      status: "Completed"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research and development services for sustainable energy solutions, 
              e-mobility technologies, and policy development across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core service areas that drive innovation and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed insights into our completed and ongoing research initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Ongoing' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Funded by:</p>
                  <p className="text-sm font-medium text-gray-700">{project.funder}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-1">Regions:</p>
                  <p className="text-sm text-gray-700">{project.regions.join(', ')}</p>
                </div>
                
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized research domains where we lead innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technical capabilities that set us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Target segments that benefit from our research and development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetSegments.map((segment, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{segment.title}</h3>
                  <p className="text-gray-600">{segment.description}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our research and development services can help advance your sustainability goals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
