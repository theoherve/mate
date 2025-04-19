import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hotel-background">
      <div className="text-center max-w-md p-6">
        <div className="mb-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-8xl font-bold text-hotel-primary mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Cette page n’existe pas</p>
          <p className="text-gray-500 mb-8">
            La page que vous recherchez semble introuvable. Retournez à la page d'accueil pour continuer votre navigation.
          </p>
          <Button asChild className="bg-hotel-primary hover:bg-hotel-secondary text-white">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Hotel Horizon Insights © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
