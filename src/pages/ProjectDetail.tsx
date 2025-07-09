
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Target } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'emobility-demand-driver': {
      title: "Advancing E-mobility as a Demand Driver for Renewable Energy in Sub-Saharan Africa",
      year: "2025",
      funder: "Bayes Consulting",
      duration: "12 months",
      regions: ["Kenya", "Uganda", "Tanzania", "Malawi", "Ethiopia"],
      overview: "This comprehensive research study aims to establish e-mobility as a systematic demand driver for renewable energy across five key Sub-Saharan African countries. The project focuses on unlocking the region's full renewable energy potential while contributing to energy security, greenhouse gas emission reductions, and sustainable economic growth.",
      objectives: [
        "Analyze the potential of e-mobility to drive renewable energy demand",
        "Develop strategic frameworks for e-mobility integration",
        "Assess policy requirements for successful implementation",
        "Create economic models for sustainable growth",
        "Establish best practices for regional adoption"
      ],
      methodology: [
        "Market analysis and demand forecasting",
        "Stakeholder engagement and consultation",
        "Policy framework assessment",
        "Economic impact modeling",
        "Technical feasibility studies"
      ],
      expectedOutcomes: [
        "Comprehensive regional strategy for e-mobility adoption",
        "Policy recommendations for governments",
        "Investment frameworks for private sector engagement",
        "Technical guidelines for infrastructure development",
        "Training materials for capacity building"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    'governance-financing': {
      title: "The Role of Governance in Financing the Electrification of Popular Transport: Kenya Vietnam Comparative Analysis",
      year: "2025",
      funder: "Climate Compatible Growth (CCG) Flexible Research Fund",
      duration: "18 months",
      regions: ["Kenya", "Vietnam"],
      overview: "This comparative study investigates the impact of governance and regulatory frameworks on financing mechanisms for popular transport electrification, comparing approaches between Kenya and Vietnam to identify best practices and transferable lessons.",
      objectives: [
        "Compare governance frameworks in Kenya and Vietnam",
        "Analyze financing mechanisms for transport electrification",
        "Identify regulatory barriers and enablers",
        "Develop policy recommendations",
        "Create replicable governance models"
      ],
      methodology: [
        "Comparative policy analysis",
        "Stakeholder interviews and surveys",
        "Financial mechanism assessment",
        "Regulatory framework evaluation",
        "Cross-country learning workshops"
      ],
      expectedOutcomes: [
        "Comparative governance analysis report",
        "Financing mechanism recommendations",
        "Policy toolkit for governments",
        "Best practice guidelines",
        "Regional knowledge sharing platform"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    'evci-feasibility': {
      title: "Assessing the Feasibility of Electric Vehicle Charging Infrastructure (EVCI) in Kenya",
      year: "2025",
      funder: "GIZ's Promotion of Electric Mobility Project in partnership with KenGen",
      duration: "8 months",
      regions: ["Kenya"],
      overview: "This study examines the technical, financial, and policy aspects of electric vehicle charging infrastructure in Kenya, providing practical recommendations for expanding infrastructure to support the growing e-mobility sector.",
      objectives: [
        "Assess technical requirements for EVCI deployment",
        "Analyze financial viability and investment needs",
        "Review policy and regulatory frameworks",
        "Identify optimal locations for charging stations",
        "Develop implementation roadmap"
      ],
      methodology: [
        "Technical site assessments",
        "Financial modeling and analysis",
        "Policy and regulatory review",
        "Stakeholder consultation",
        "Infrastructure mapping and planning"
      ],
      expectedOutcomes: [
        "EVCI feasibility assessment report",
        "Investment requirement analysis",
        "Technical deployment guidelines",
        "Policy recommendations",
        "Implementation timeline and roadmap"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/services" className="text-green-600 hover:text-green-700">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {project.year}
                </span>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Users size={16} />
                <span>Funded by: {project.funder}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Regions: {project.regions.join(', ')}</span>
              </div>
            </div>
            
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="text-green-600" size={24} />
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.overview}
            </p>
          </section>

          {/* Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Methodology</h2>
            <ul className="space-y-3">
              {project.methodology.map((method, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Expected Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {project.expectedOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in This Research?</h2>
            <p className="text-green-100 mb-6">
              Contact us to learn more about this project or discuss potential collaboration opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
