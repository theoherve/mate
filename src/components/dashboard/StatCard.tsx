import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  change, 
  className 
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {Icon && (
          <div className="h-8 w-8 rounded-md bg-hotel-primary/10 flex items-center justify-center text-hotel-primary">
            <Icon size={18} />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <CardDescription className="text-xs text-gray-500 mt-1">
            {description}
          </CardDescription>
        )}
        {change && (
          <div className={cn(
            "flex items-center mt-2 text-xs font-medium",
            change.positive ? "text-green-600" : "text-red-600"
          )}>
            <span className="inline-block mr-1">
              {change.positive ? "↑" : "↓"}
            </span>
            <span>{change.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}