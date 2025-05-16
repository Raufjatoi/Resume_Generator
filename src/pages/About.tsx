
import MainLayout from "@/components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ResumeBuilder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help job seekers create professional, ATS-friendly resumes that stand out from the crowd
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At ResumeBuilder, we believe everyone deserves access to tools that help them showcase their 
              professional strengths effectively. Our mission is to simplify the resume creation process while 
              delivering personalized, high-quality results.
            </p>
            <p className="text-gray-700">
              Using the latest AI technology, we analyze industry trends and hiring patterns to ensure your 
              resume meets current market standards and catches recruiters' attention.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">User-Friendly Platform</h3>
                <p className="text-gray-600">Intuitive design that guides you through every step of the resume creation process</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">AI-Powered Assistance</h3>
                <p className="text-gray-600">Smart recommendations to enhance your resume content and formatting</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Professional Templates</h3>
                <p className="text-gray-600">Curated selection of templates designed by HR professionals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Team</h2>
          <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Abdul Rauf Jatoi created this under the guidance of Team Lead Muhammad Kamran
          </p>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <img src="me.jpeg" alt="Abdul Rauf Jatoi" className="w-40 h-40 rounded mx-auto mb-4" />
              <h3 className="text-xl font-bold">Abdul Rauf Jatoi</h3>
              <p className="text-gray-600">FullStack Developer | AI Student </p>
            </div>
            <div className="text-center">
              <img src="kamran.png" alt="Muhammad Kamran" className="w-40 h-40 rounded mx-auto mb-4" />
              <h3 className="text-xl font-bold">Muhammad Kamran</h3>
              <p className="text-gray-600">Mern Developer | Team Lead</p>
            </div>
          </div>
        </div>

        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Building Your Resume Today</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with ResumeBuider
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/signup" className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium">
              Create Your Resume
            </a>
            <a href="/templates" className="bg-white border border-primary text-primary hover:bg-gray-50 px-6 py-3 rounded-md font-medium">
              Browse Templates
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
