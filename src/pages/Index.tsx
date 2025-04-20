import { PageLayout } from "@/components/layout/PageLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { OccupancyChart } from "@/components/dashboard/OccupancyChart";
import { PricingChart } from "@/components/dashboard/PricingChart";
import { WeatherPreview } from "@/components/dashboard/WeatherPreview";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { CompetitorsOverview } from "@/components/dashboard/CompetitorsOverview";
import { NewsInsights } from "@/components/dashboard/NewsInsights";
import { ArrowUpRight, CreditCard, Hotel, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <PageLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="text-gray-500">Bienvenue sur Hotel Horizon Insights. Voici vos données en temps réel.</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="hidden md:flex text-gray-600 hover:text-gray-900 hover:bg-gray-100 bg-white"
            >
              Télécharger le rapport
            </Button>
            <Button className="bg-hotel-primary hover:bg-hotel-secondary text-white">
              Recommandations
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Taux d'occupation" 
            value="85%" 
            description="Moyenne actuelle"
            icon={Hotel}
            change={{ value: "+5.2% vs mois dernier", positive: true }}
          />
          <StatCard 
            title="Prix moyen" 
            value="210€" 
            description="Par chambre/nuit"
            icon={CreditCard}
            change={{ value: "+12.5% vs mois dernier", positive: true }}
          />
          <StatCard 
            title="RevPAR" 
            value="178.5€" 
            description="Revenu par chambre disponible"
            icon={TrendingUp}
            change={{ value: "+15.3% vs mois dernier", positive: true }}
          />
          <StatCard 
            title="Réservations" 
            value="142" 
            description="Derniers 7 jours"
            icon={Users}
            change={{ value: "-3.1% vs semaine dernière", positive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <OccupancyChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PricingChart />
          <div className="grid grid-cols-1 gap-6">
            <WeatherPreview />
            <UpcomingEvents />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CompetitorsOverview />
          <NewsInsights />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;