import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Competitor {
  name: string;
  occupancy: number;
  price: number;
  priceChange: number;
  occupancyChange: number;
}

const competitors: Competitor[] = [
  {
    name: "Hotel Grand",
    occupancy: 82,
    price: 120,
    priceChange: 5,
    occupancyChange: 3,
  },
  {
    name: "Palace Resort",
    occupancy: 90,
    price: 180,
    priceChange: 10,
    occupancyChange: 5,
  },
  {
    name: "Skyline Hotel",
    occupancy: 75,
    price: 95,
    priceChange: -2,
    occupancyChange: -1,
  },
  {
    name: "City Center Inn",
    occupancy: 65,
    price: 85,
    priceChange: -5,
    occupancyChange: -3,
  },
];

export function CompetitorsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Aperçu de la concurrence</CardTitle>
        <CardDescription>Comparaison avec les établissements similaires</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-4 text-xs font-medium text-gray-500 pb-2 border-b">
            <div>Établissement</div>
            <div className="text-center">Occupation</div>
            <div className="text-center">Prix moyen</div>
            <div className="text-center">Évolution</div>
          </div>
          {competitors.map((competitor) => (
            <div key={competitor.name} className="grid grid-cols-4 items-center py-1">
              <div className="text-sm font-medium">{competitor.name}</div>
              <div className="text-center">{competitor.occupancy}%</div>
              <div className="text-center">{competitor.price}€</div>
              <div className="flex justify-center">
                <div className={cn(
                  "flex items-center text-xs font-medium rounded-full px-2 py-1",
                  (competitor.priceChange > 0 && competitor.occupancyChange > 0)
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                )}>
                  {(competitor.priceChange > 0 && competitor.occupancyChange > 0) ? (
                    <TrendingUp size={12} className="mr-1" />
                  ) : (
                    <TrendingDown size={12} className="mr-1" />
                  )}
                  <span>
                    {(competitor.priceChange > 0 ? "+" : "") + competitor.priceChange}% 
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}