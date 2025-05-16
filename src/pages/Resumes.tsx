import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateResumeCard from "@/components/dashboard/CreateResumeCard";
import ResumeCard from "@/components/dashboard/ResumeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, SortDesc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const initialResumes = [
  {
    id: "1",
    title: "Software Developer Resume",
    updatedAt: "2023-06-15T10:30:00Z",
    templateName: "Modern Professional",
  },
  {
    id: "2",
    title: "Marketing Specialist Resume",
    updatedAt: "2023-05-20T14:20:00Z",
    templateName: "Creative Bold",
  },
  {
    id: "3",
    title: "UX Designer Resume",
    updatedAt: "2023-07-05T09:15:00Z",
    templateName: "Minimalist",
  },
  {
    id: "4",
    title: "Project Manager Resume",
    updatedAt: "2023-04-10T16:45:00Z",
    templateName: "Executive",
  },
  {
    id: "5",
    title: "Data Analyst Resume",
    updatedAt: "2023-06-28T11:20:00Z",
    templateName: "Technical Pro",
  },
];

const Resumes = () => {
  const [resumes, setResumes] = useState(initialResumes);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [activeTab, setActiveTab] = useState("all");

  const handleDelete = (id: string) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  // Filter resumes based on search query
  const filteredResumes = resumes.filter((resume) =>
    resume.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort resumes
  const sortedResumes = [...filteredResumes].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    } else if (sortBy === "name-asc") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "name-desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Resumes</h1>
          <Link to="/dashboard/builder/new">
            <Button className="flex items-center bg-primary hover:bg-primary-light">
              <Plus className="mr-2 h-4 w-4" />
              Create Resume
            </Button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resumes..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SortDesc className="h-4 w-4 text-gray-500" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Resumes</TabsTrigger>
              <TabsTrigger value="recent">Recently Edited</TabsTrigger>
              <TabsTrigger value="shared">Shared With Me</TabsTrigger>
            </TabsList>
          </Tabs>

          {sortedResumes.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? "No resumes match your search criteria."
                  : "You haven't created any resumes yet."}
              </p>
              <Link to="/dashboard/builder/new">
                <Button>Create Your First Resume</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CreateResumeCard />
              {sortedResumes.map((resume) => (
                <ResumeCard
                  key={resume.id}
                  id={resume.id}
                  title={resume.title}
                  updatedAt={resume.updatedAt}
                  templateName={resume.templateName}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Resume Templates</h2>
          <p className="text-gray-600 mb-4">
            Explore our collection of professional resume templates to find the perfect design for your next job application.
          </p>
          <Link to="/dashboard/templates">
            <Button variant="outline">Browse Templates</Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Resumes;
