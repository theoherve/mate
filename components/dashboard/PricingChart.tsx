import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Données simulées pour le graphique
const data = [
  { name: 'Standard', Recommandé: 120, Concurrence: 100, Actuel: 110 },
  { name: 'Confort', Recommandé: 180, Concurrence: 165, Actuel: 170 },
  { name: 'Deluxe', Recommandé: 250, Concurrence: 230, Actuel: 220 },
  { name: 'Suite', Recommandé: 380, Concurrence: 340, Actuel: 350 },
];

export function PricingChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">Prix moyens par chambre</CardTitle>
        <CardDescription>Comparatif prix recommandés, concurrence et prix actuels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}€`} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                formatter={(value) => [`${value}€`, '']}
              />
              <Legend />
              <Bar dataKey="Concurrence" fill="#8E9196" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Actuel" fill="#0FA0CE" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Recommandé" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}