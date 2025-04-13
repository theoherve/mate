import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Globe, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  impact: "positive" | "negative" | "neutral";
  category: "tourism" | "economy" | "travel" | "politics";
  summary: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Le tourisme en France devrait augmenter de 15% cet été",
    source: "Le Monde du Tourisme",
    date: "Il y a 2 jours",
    impact: "positive",
    category: "tourism",
    summary: "Selon une étude récente, le tourisme en France devrait connaître une augmentation significative cet été suite à l'assouplissement des restrictions de voyage."
  },
  {
    title: "Nouvelles lignes aériennes vers Paris annoncées",
    source: "Actualités Voyage",
    date: "Il y a 4 jours",
    impact: "positive",
    category: "travel",
    summary: "Trois nouvelles lignes aériennes directes vers Paris ont été annoncées par des compagnies internationales, augmentant l'accessibilité de la capitale."
  },
  {
    title: "Tension diplomatique entre la France et un pays voisin",
    source: "Politique Internationale",
    date: "Hier",
    impact: "negative",
    category: "politics",
    summary: "Les récentes tensions diplomatiques pourraient affecter le flux de touristes venant de ce pays. Situation à surveiller dans les semaines à venir."
  },
];

export function NewsInsights() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Actualités & Insights</CardTitle>
            <CardDescription>Nouvelles pouvant impacter votre activité</CardDescription>
          </div>
          <div className="rounded-full bg-hotel-primary/10 p-2">
            <Globe className="h-5 w-5 text-hotel-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-sm">{item.title}</h3>
                <span className={cn(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                  item.impact === "positive" 
                    ? "bg-green-100 text-green-600" 
                    : item.impact === "negative" 
                      ? "bg-red-100 text-red-600" 
                      : "bg-gray-100 text-gray-600"
                )}>
                  {item.impact === "positive" && <TrendingUp size={12} className="mr-1" />}
                  {item.impact === "positive" 
                    ? "Impact positif" 
                    : item.impact === "negative" 
                      ? "Impact négatif" 
                      : "Impact neutre"}
                </span>
              </div>
              <p className="text-xs text-gray-500">{item.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {item.source} • {item.date}
                </span>
                <a href="#" className="text-xs text-hotel-primary flex items-center">
                  <span>Détails</span>
                  <ArrowUpRight size={12} className="ml-1" />
                </a>
              </div>
              <div className="border-b border-gray-100 pt-2"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}