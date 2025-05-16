
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import ClerkCallback from "./pages/ClerkCallback";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import ResumeBuilder from "./pages/ResumeBuilder";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AIAssistant from "./pages/AIAssistant";
import Resumes from "./pages/Resumes";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/templates" element={<Templates />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
          <Route path="/dashboard/builder/:id" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
          <Route path="/dashboard/builder/new" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
          <Route path="/dashboard/resumes" element={<ProtectedRoute><Resumes /></ProtectedRoute>} />
          <Route path="/dashboard/assistant" element={<ProtectedRoute><AIAssistant /></ProtectedRoute>} />
          <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/dashboard/export/:id" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          
          <Route path="*" element={<NotFound />} />
          <Route path="/sso-callback" element={<ClerkCallback />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
