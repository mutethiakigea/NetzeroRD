
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "sustainable-energy-africa",
    title: "The Future of Sustainable Energy in Africa",
    excerpt: "Exploring renewable energy opportunities and challenges across the African continent, from solar farms in the Sahara to hydroelectric potential along major rivers.",
    author: "Dr. Sarah Kimani",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "https://drivezeewebsite.blob.core.windows.net/netzerordweb/ima11.jpg",
    category: "Renewable Energy",
    content: `
      <p>Africa stands at a critical juncture in its energy development journey. With abundant renewable energy resources including solar, wind, hydro, and geothermal potential, the continent has the opportunity to leapfrog traditional fossil fuel-based energy systems and build a sustainable energy future.</p>
      
      <h2>Solar Energy Potential</h2>
      <p>The African continent receives some of the highest solar irradiation levels globally, particularly in North and East Africa. Countries like Morocco have already demonstrated leadership with projects like the Noor Ouarzazate Solar Complex, one of the world's largest concentrated solar power plants.</p>
      
      <p>In East Africa, countries like Kenya and Ethiopia are rapidly expanding their solar capacity. Kenya's solar potential alone could generate over 23,000 MW, far exceeding current national demand. The declining costs of photovoltaic technology make solar increasingly attractive for both grid-connected and off-grid applications.</p>
      
      <h2>Wind Power Opportunities</h2>
      <p>Africa's wind resources are particularly strong along coastal areas and in elevated regions. The Lake Turkana Wind Power Project in Kenya, Africa's largest wind farm, demonstrates the continent's wind potential with its 365 turbines generating 310 MW of clean energy.</p>
      
      <h2>Hydroelectric Resources</h2>
      <p>The continent's major river systems, including the Nile, Congo, and Zambezi, offer substantial hydroelectric potential. The Grand Ethiopian Renaissance Dam, once completed, will be Africa's largest hydroelectric project, generating over 6,000 MW of electricity.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Despite enormous potential, several challenges persist:</p>
      <ul>
        <li><strong>Financing:</strong> Limited access to affordable capital for renewable energy projects</li>
        <li><strong>Grid Infrastructure:</strong> Inadequate transmission and distribution networks</li>
        <li><strong>Policy Frameworks:</strong> Need for supportive regulatory environments</li>
        <li><strong>Technical Capacity:</strong> Skills gaps in renewable energy technologies</li>
      </ul>
      
      <p>Addressing these challenges requires collaborative efforts between governments, private sector, and international development partners. Innovative financing mechanisms like green bonds and blended finance are becoming increasingly important.</p>
      
      <h2>The Path Forward</h2>
      <p>The future of sustainable energy in Africa looks promising. With continued investment in renewable technologies, supportive policies, and regional cooperation, Africa can achieve energy security while contributing to global climate goals. The continent's young, growing population presents both a challenge and an opportunity to build energy systems fit for the 21st century.</p>
    `
  },
  {
    id: "electric-vehicles-kenya",
    title: "Electric Vehicles: Kenya's Path to Clean Transportation",
    excerpt: "How Kenya is positioning itself as a leader in electric vehicle adoption across East Africa, including infrastructure development and policy initiatives.",
    author: "James Mwangi",
    date: "December 10, 2024", 
    readTime: "6 min read",
    image: "https://drivezeewebsite.blob.core.windows.net/netzerordweb/mg4.jpg",
    category: "E-Mobility",
    content: `
      <p>Kenya is emerging as a pioneer in electric vehicle (EV) adoption across East Africa. With ambitious climate goals and a commitment to reducing carbon emissions, the country is implementing comprehensive strategies to accelerate the transition to electric mobility.</p>
      
      <h2>Current EV Landscape in Kenya</h2>
      <p>The Kenyan government has set a target to have 5% of all registered vehicles be electric by 2025. This ambitious goal is supported by various initiatives including tax incentives for EV imports and infrastructure development programs.</p>
      
      <p>Several Kenyan companies are leading the charge in EV adoption. Ride-sharing companies like Uber and Bolt have begun integrating electric vehicles into their fleets, while local startups are developing innovative EV solutions tailored to African markets.</p>
      
      <h2>Infrastructure Development</h2>
      <p>One of the key challenges for EV adoption is charging infrastructure. Kenya is addressing this through:</p>
      <ul>
        <li><strong>Public Charging Networks:</strong> Installation of fast-charging stations in major cities</li>
        <li><strong>Solar-Powered Charging:</strong> Leveraging Kenya's abundant solar resources for sustainable charging</li>
        <li><strong>Battery Swapping Stations:</strong> Innovative solutions for quick battery replacement</li>
        <li><strong>Home Charging Solutions:</strong> Promoting residential charging infrastructure</li>
      </ul>
      
      <h2>Economic Benefits</h2>
      <p>The shift to electric vehicles offers significant economic advantages for Kenya:</p>
      <ul>
        <li><strong>Reduced Fuel Imports:</strong> Decreased dependence on petroleum imports</li>
        <li><strong>Job Creation:</strong> New opportunities in EV manufacturing, maintenance, and charging infrastructure</li>
        <li><strong>Lower Operating Costs:</strong> Reduced fuel and maintenance expenses for vehicle owners</li>
        <li><strong>Green Economy Growth:</strong> Positioning Kenya as a regional hub for sustainable transportation</li>
      </ul>
      
      <h2>Policy Support</h2>
      <p>The Kenyan government has implemented several policies to support EV adoption:</p>
      <ul>
        <li>Reduced import duties on electric vehicles and components</li>
        <li>VAT exemptions for EV charging equipment</li>
        <li>Green vehicle financing schemes</li>
        <li>Public procurement policies favoring electric vehicles</li>
      </ul>
      
      <h2>Challenges and Opportunities</h2>
      <p>While progress is encouraging, several challenges remain:</p>
      <ul>
        <li><strong>High Initial Costs:</strong> EVs remain expensive compared to conventional vehicles</li>
        <li><strong>Range Anxiety:</strong> Concerns about battery life and charging availability</li>
        <li><strong>Grid Capacity:</strong> Need for grid upgrades to handle increased electricity demand</li>
        <li><strong>Technical Skills:</strong> Training requirements for EV maintenance and repair</li>
      </ul>
      
      <p>However, these challenges present opportunities for innovation and investment. Local assembly of EVs, development of affordable battery technologies, and creation of comprehensive service networks are all areas ripe for development.</p>
      
      <h2>Looking Ahead</h2>
      <p>Kenya's commitment to electric mobility positions it as a regional leader in sustainable transportation. With continued government support, private sector investment, and public awareness campaigns, the country is well-positioned to achieve its EV adoption targets and serve as a model for other African nations.</p>
    `
  },
  {
    id: "circular-economy-waste",
    title: "Circular Economy Solutions for Waste Management",
    excerpt: "Innovative approaches to transforming waste into valuable resources, creating sustainable business models while addressing environmental challenges.",
    author: "Dr. Grace Wanjiku",
    date: "December 5, 2024",
    readTime: "7 min read",
    image: "https://drivezeewebsite.blob.core.windows.net/netzerordweb/ima13.jpg",
    category: "Circular Economy",
    content: `
      <p>The circular economy represents a fundamental shift from the traditional linear "take-make-dispose" model to a regenerative approach where waste becomes a resource. In Africa, where waste management challenges are acute, circular economy solutions offer promising pathways to environmental sustainability and economic development.</p>
      
      <h2>Understanding the Circular Economy</h2>
      <p>The circular economy is based on three key principles:</p>
      <ul>
        <li><strong>Design out waste and pollution:</strong> Creating products and systems that minimize waste from the outset</li>
        <li><strong>Keep products and materials in use:</strong> Extending product lifecycles through reuse, repair, and refurbishment</li>
        <li><strong>Regenerate natural systems:</strong> Returning valuable nutrients to the biosphere</li>
      </ul>
      
      <h2>Waste-to-Resource Innovations</h2>
      <p>Several innovative approaches are transforming waste streams into valuable resources:</p>
      
      <h3>Organic Waste Processing</h3>
      <p>Organic waste, which comprises up to 60% of municipal solid waste in many African cities, can be converted into:</p>
      <ul>
        <li><strong>Biogas:</strong> Anaerobic digestion produces methane for cooking and electricity</li>
        <li><strong>Compost:</strong> High-quality fertilizer for agricultural applications</li>
        <li><strong>Animal Feed:</strong> Processed organic waste for livestock nutrition</li>
      </ul>
      
      <h3>Plastic Waste Solutions</h3>
      <p>Plastic waste presents both challenges and opportunities:</p>
      <ul>
        <li><strong>Mechanical Recycling:</strong> Converting plastic waste into new products</li>
        <li><strong>Chemical Recycling:</strong> Breaking down plastics to molecular level for reuse</li>
        <li><strong>Plastic-to-Fuel:</strong> Converting waste plastics into diesel and gasoline</li>
        <li><strong>Construction Materials:</strong> Using plastic waste in road construction and building materials</li>
      </ul>
      
      <h2>Business Models for Circular Economy</h2>
      <p>Successful circular economy initiatives require viable business models:</p>
      
      <h3>Producer Responsibility Models</h3>
      <p>Extended Producer Responsibility (EPR) schemes make manufacturers responsible for the entire lifecycle of their products, incentivizing sustainable design and end-of-life management.</p>
      
      <h3>Sharing Economy Platforms</h3>
      <p>Digital platforms that enable sharing of resources, tools, and equipment maximize utilization while reducing demand for new products.</p>
      
      <h3>Service-Based Models</h3>
      <p>Product-as-a-Service models shift focus from ownership to access, encouraging durability and repairability.</p>
      
      <h2>Case Studies from Africa</h2>
      
      <h3>Kenya: Plastic Waste to Construction Materials</h3>
      <p>Kenyan entrepreneur Nzambi Matee founded Gjenge Makers, which converts plastic waste into construction blocks that are stronger and cheaper than concrete blocks.</p>
      
      <h3>Ghana: E-Waste Recovery</h3>
      <p>Agbogbloshie, once known as the world's largest e-waste dump, is being transformed through initiatives that recover valuable metals and create jobs for local communities.</p>
      
      <h3>South Africa: Paper Waste to Energy</h3>
      <p>Sappi's integrated biorefinery concept converts paper production waste into biofuels, biochemicals, and biomaterials.</p>
      
      <h2>Policy and Regulatory Framework</h2>
      <p>Effective circular economy implementation requires supportive policies:</p>
      <ul>
        <li><strong>Waste Segregation Laws:</strong> Mandatory separation of waste at source</li>
        <li><strong>Plastic Bag Bans:</strong> Reducing single-use plastic consumption</li>
        <li><strong>Tax Incentives:</strong> Supporting circular economy businesses</li>
        <li><strong>Public Procurement:</strong> Government purchasing of recycled products</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>Key challenges include:</p>
      <ul>
        <li><strong>Informal Sector Integration:</strong> Including waste pickers in formal systems</li>
        <li><strong>Technology Access:</strong> Making circular technologies affordable and accessible</li>
        <li><strong>Consumer Behavior:</strong> Changing consumption patterns and waste disposal habits</li>
        <li><strong>Investment Capital:</strong> Accessing funding for circular economy projects</li>
      </ul>
      
      <h2>The Path Forward</h2>
      <p>The circular economy offers immense potential for Africa to address waste management challenges while creating economic opportunities. Success requires collaboration between governments, businesses, communities, and international partners to build resilient, sustainable waste management systems that benefit both people and the planet.</p>
    `
  }
];

interface BlogContentProps {
  postId: string;
}

const BlogContent = ({ postId }: BlogContentProps) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="bg-white rounded-lg p-2 mb-6 inline-block">
            <span className="text-green-600 font-medium text-sm">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-20 mb-16">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            />
          </div>
          
          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600">
                  A leading researcher in sustainable development and renewable energy solutions across Africa. 
                  With over a decade of experience in environmental science and policy development, they continue 
                  to drive innovation in sustainable technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogContent, blogPosts };
export default BlogContent;
