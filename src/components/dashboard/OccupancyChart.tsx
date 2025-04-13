import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Données simulées pour le graphique
const data = [
  { name: 'Jan', Actuelle: 65, Prédiction: 70, Année_précédente: 60 },
  { name: 'Fév', Actuelle: 70, Prédiction: 75, Année_précédente: 65 },
  { name: 'Mar', Actuelle: 75, Prédiction: 80, Année_précédente: 70 },
  { name: 'Avr', Actuelle: 80, Prédiction: 85, Année_précédente: 75 },
  { name: 'Mai', Actuelle: 85, Prédiction: 90, Année_précédente: 80 },
  { name: 'Jun', Actuelle: 80, Prédiction: 85, Année_précédente: 75 },
  { name: 'Jul', Actuelle: 90, Prédiction: 95, Année_précédente: 85 },
  { name: 'Aoû', Actuelle: 95, Prédiction: null, Année_précédente: 90 },
  { name: 'Sep', Actuelle: null, Prédiction: 90, Année_précédente: 85 },
  { name: 'Oct', Actuelle: null, Prédiction: 85, Année_précédente: 80 },
  { name: 'Nov', Actuelle: null, Prédiction: 80, Année_précédente: 75 },
  { name: 'Déc', Actuelle: null, Prédiction: 75, Année_précédente: 70 },
];

export function OccupancyChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg">Taux d'occupation</CardTitle>
        <CardDescription>Comparaison entre les taux actuels, prédits et historiques</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                formatter={(value) => [`${value}%`, '']}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="Année_précédente" 
                stroke="#8E9196" 
                fill="#8E9196" 
                fillOpacity={0.1}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Area 
                type="monotone" 
                dataKey="Actuelle" 
                stroke="#0FA0CE" 
                fill="#0FA0CE" 
                fillOpacity={0.1}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Area 
                type="monotone" 
                dataKey="Prédiction" 
                stroke="#9b87f5" 
                fill="#9b87f5" 
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}