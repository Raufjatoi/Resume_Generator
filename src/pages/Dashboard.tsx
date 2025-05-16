
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateResumeCard from "@/components/dashboard/CreateResumeCard";
import ResumeCard from "@/components/dashboard/ResumeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, HelpCircle } from "lucide-react";

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
];

const Dashboard = () => {
  const [resumes, setResumes] = useState(initialResumes);
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  const handleDelete = (id: string) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex space-x-4">
            <Link to="/dashboard/assistant">
              <Button variant="outline" className="flex items-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                AI Assistant
              </Button>
            </Link>
            <Link to="/dashboard/builder/new">
              <Button className="flex items-center bg-primary hover:bg-primary-light">
                <Plus className="mr-2 h-4 w-4" />
                Create Resume
              </Button>
            </Link>
          </div>
        </div>

        {welcomeVisible && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
            <button
              onClick={() => setWelcomeVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label="Close welcome message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-3">Welcome to ResumeBuilder!</h2>
            <p className="text-gray-600 mb-4">
              Create professional resumes in minutes with our easy-to-use builder
              and AI-powered suggestions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard/builder/new">
                <Button className="bg-primary hover:bg-primary-light">Create New Resume</Button>
              </Link>
              <Link to="/dashboard/templates">
                <Button variant="outline">Explore Templates</Button>
              </Link>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">My Resumes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CreateResumeCard />
            {resumes.map((resume) => (
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
