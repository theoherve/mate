import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";

const weatherData = [
  { day: "Aujourd'hui", temp: "25°", icon: Sun, conditions: "Ensoleillé", precip: "0%" },
  { day: "Demain", temp: "23°", icon: Sun, conditions: "Ensoleillé", precip: "5%" },
  { day: "Mer", temp: "22°", icon: Cloud, conditions: "Partiellement nuageux", precip: "10%" },
  { day: "Jeu", temp: "20°", icon: CloudRain, conditions: "Pluvieux", precip: "60%" },
  { day: "Ven", temp: "19°", icon: CloudRain, conditions: "Pluvieux", precip: "70%" },
];

export function WeatherPreview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg">Prévisions météo</CardTitle>
          <CardDescription>Paris, France</CardDescription>
        </div>
        <div className="rounded-full bg-hotel-primary/10 p-2">
          <Thermometer className="h-5 w-5 text-hotel-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mt-2">
          {weatherData.map((day) => (
            <div key={day.day} className="text-center">
              <p className="text-xs text-gray-500">{day.day}</p>
              <day.icon className="h-8 w-8 mx-auto my-2 text-hotel-accent" />
              <p className="text-sm font-medium">{day.temp}</p>
              <p className="text-xs text-gray-500">{day.precip}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>Les prévisions météo jouent un rôle crucial dans les tendances de réservation. Des conditions favorables prévoient une augmentation de 15% des réservations de dernière minute.</p>
        </div>
      </CardContent>
    </Card>
  );
}