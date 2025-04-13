import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Music, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Event {
  name: string;
  date: string;
  location: string;
  type: "concert" | "festival" | "conference" | "sport";
  impact: "high" | "medium" | "low";
}

const events: Event[] = [
  {
    name: "Festival de Jazz",
    date: "15-20 Août",
    location: "Centre-ville",
    type: "festival",
    impact: "high",
  },
  {
    name: "Conférence Tech",
    date: "10-12 Août",
    location: "Palais des Congrès",
    type: "conference",
    impact: "medium",
  },
  {
    name: "Concert de Rock",
    date: "5 Août",
    location: "Stade Municipal",
    type: "concert",
    impact: "medium",
  },
  {
    name: "Marathon de la ville",
    date: "30 Juillet",
    location: "Tout le centre-ville",
    type: "sport",
    impact: "high",
  },
];

const getEventIcon = (type: Event["type"]) => {
  switch (type) {
    case "concert":
      return Music;
    case "festival":
      return Award;
    case "conference":
      return Users;
    case "sport":
      return Award;
    default:
      return MapPin;
  }
};

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Événements à venir</CardTitle>
        <CardDescription>Événements pouvant impacter l'occupation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.name} className="flex items-start">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                event.impact === "high" 
                  ? "bg-red-100 text-red-600" 
                  : event.impact === "medium" 
                    ? "bg-amber-100 text-amber-600" 
                    : "bg-green-100 text-green-600"
              )}>
                {React.createElement(getEventIcon(event.type), { size: 18 })}
              </div>
              <div>
                <p className="font-medium text-sm">{event.name}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span className="mr-2">{event.date}</span>
                  <span className="flex items-center">
                    <MapPin size={12} className="mr-1" />
                    {event.location}
                  </span>
                </div>
                <div className="mt-1">
                  <span className={cn(
                    "inline-block rounded-full px-2 py-0.5 text-xs font-medium",
                    event.impact === "high" 
                      ? "bg-red-100 text-red-600" 
                      : event.impact === "medium" 
                        ? "bg-amber-100 text-amber-600" 
                        : "bg-green-100 text-green-600"
                  )}>
                    Impact {
                      event.impact === "high" 
                        ? "élevé" 
                        : event.impact === "medium" 
                          ? "moyen" 
                          : "faible"
                    }
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