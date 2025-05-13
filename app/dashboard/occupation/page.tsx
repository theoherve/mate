"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const data = [
  { name: "Lundi", occupation: 75 },
  { name: "Mardi", occupation: 82 },
  { name: "Mercredi", occupation: 68 },
  { name: "Jeudi", occupation: 79 },
  { name: "Vendredi", occupation: 65 },
];

export default function OccupationPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Occupation des espaces</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux d'occupation moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">74%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% par rapport à la semaine dernière
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Espaces les plus occupés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Salle de réunion A</div>
            <p className="text-xs text-muted-foreground">
              92% d'occupation
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heures de pointe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14h-16h</div>
            <p className="text-xs text-muted-foreground">
              Pic d'occupation journalier
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Espaces disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/20</div>
            <p className="text-xs text-muted-foreground">
              Espaces libres actuellement
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Occupation par jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="occupation" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendrier</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
