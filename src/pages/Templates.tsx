import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, LayoutTemplate } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";

// Mock templates data - we'll add more realistic templates
const templatesData = [
  {
    id: "1",
    name: "Professional Classic",
    category: "Professional",
    description: "Clean and minimal design for corporate environments",
    image: "/resume.png",
    popular: true,
  },
  {
    id: "2",
    name: "Creative Portfolio",
    category: "Creative",
    description: "Stand out with this creative and bold design",
    image: "/resume.png",
    popular: false,
  },
  {
    id: "3",
    name: "Executive Summary",
    category: "Professional",
    description: "Traditional format preferred in conservative industries",
    image: "/resume.png",
    popular: true,
  },
  {
    id: "4",
    name: "Minimalist Modern",
    category: "Minimal",
    description: "Minimalist design with elegant typography",
    image: "/resume.png",
    popular: false,
  },
  {
    id: "5",
    name: "Technical Expert",
    category: "Technical",
    description: "Optimized for technical roles and skill presentation",
    image: "/resume.png",
    popular: false,
  },
  {
    id: "6",
    name: "ATS Optimized",
    category: "Professional",
    description: "Designed to pass ATS systems with clear sections",
    image: "/resume.png",
    popular: true,
  },
];

// Template categories
const categories = ["All", "Professional", "Creative", "Classic", "Minimal", "Technical"];

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const filteredTemplates = templatesData.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (templateId: string) => {
    if (isSignedIn) {
      navigate(`/dashboard/builder/new?template=${templateId}`);
    } else {
      navigate(`/signup?template=${templateId}`);
    }
  };

  const handleTemplatePreview = (templateId: string) => {
    if (isSignedIn) {
      navigate(`/dashboard/templates/preview/${templateId}`);
    } else {
      navigate(`/signup?preview=${templateId}`);
    }
  };

  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professionally designed templates to create your perfect resume
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="relative w-full md:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search templates..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <LayoutTemplate className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <p>No templates found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <div key={template.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[3/4] bg-gray-50">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="object-contain w-full h-full"
                      />
                      {template.popular && (
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">{template.category}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="link" 
                          className="text-primary font-medium text-sm p-0 h-auto flex items-center"
                          onClick={() => handleTemplateSelect(template.id)}
                        >
                          Use this template <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleTemplatePreview(template.id)}
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-primary bg-opacity-5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Need a custom template?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our premium plans offer access to all templates, including industry-specific designs
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/pricing">
                <Button variant="outline">View Pricing</Button>
              </Link>
              {isSignedIn ? (
                <Link to="/dashboard">
                  <Button className="bg-primary hover:bg-primary/90">Go to Dashboard</Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button className="bg-primary hover:bg-primary/90">Sign Up Now</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Templates;
