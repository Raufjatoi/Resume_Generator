
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { 
  SignedIn, 
  SignedOut, 
  UserButton, 
  useClerk 
} from "@clerk/clerk-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-display font-bold text-2xl">ResumeBuilder</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/templates" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Templates
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              About
            </Link>
            
            <SignedIn>
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            
            <SignedOut>
              <Link to="/login">
                <Button variant="outline" className="ml-4">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-primary-light">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/templates"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <SignedIn>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                Sign Out
              </button>
            </SignedIn>
            
            <SignedOut>
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

