import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClerkCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after OAuth callback
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Signing you in...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>
  );
};

export default ClerkCallback;