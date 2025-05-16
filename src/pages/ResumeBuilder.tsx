
import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save, Eye, Download, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ResumeSidebar from "@/components/builder/ResumeSidebar";
import PersonalInfoSection from "@/components/builder/sections/PersonalInfoSection";

const ResumeBuilder = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const templateId = searchParams.get("template");
  const isNew = id === "new";
  
  const [activeSection, setActiveSection] = useState("personal");
  const [resumeData, setResumeData] = useState({});
  const [progress, setProgress] = useState<{[key: string]: boolean}>({
    personal: false,
    summary: false,
    experience: false,
    education: false,
    skills: false,
    certifications: false,
    projects: false,
  });

  // Auto-save timer
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (Object.keys(resumeData).length > 0) {
        // Simulating auto-save
        console.log("Auto-saving resume data...", resumeData);
        toast.success("Resume auto-saved");
      }
    }, 60000); // Auto-save every minute

    return () => clearInterval(saveInterval);
  }, [resumeData]);

  const handleSavePersonalInfo = (data: any) => {
    setResumeData((prev) => ({
      ...prev,
      personal: data,
    }));
    setProgress((prev) => ({
      ...prev,
      personal: true,
    }));
    setActiveSection("summary");
    toast.success("Personal information saved!");
  };

  const handleManualSave = () => {
    console.log("Manually saving resume data...", resumeData);
    toast.success("Resume saved successfully!");
  };

  const handleAIAssist = () => {
    toast("AI Assistant is analyzing your resume...", {
      description: "Generating suggestions for improvements.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-32px)] overflow-hidden">
        <ResumeSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          progress={progress}
        />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              {isNew ? "Create New Resume" : "Edit Resume"}
            </h1>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={handleAIAssist}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                AI Assist
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                asChild
              >
                <a href="#preview" target="_blank">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={handleManualSave}
              >
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button
                size="sm"
                className="flex items-center"
                disabled={!Object.keys(progress).every(key => progress[key])}
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
              {activeSection === "personal" && (
                <PersonalInfoSection onSave={handleSavePersonalInfo} />
              )}
              {activeSection === "summary" && (
                <div>
                  <h2 className="text-2xl font-bold">Professional Summary</h2>
                  <p className="text-gray-500">
                    This section will be implemented with similar components to the Personal Info section.
                  </p>
                </div>
              )}
              {activeSection === "experience" && (
                <div>
                  <h2 className="text-2xl font-bold">Work Experience</h2>
                  <p className="text-gray-500">
                    This section will be implemented with work experience form components.
                  </p>
                </div>
              )}
              {/* Additional sections would be implemented here */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResumeBuilder;
