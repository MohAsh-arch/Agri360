"use client"

import { useLanguage } from "@/contexts/language-context"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, TrendingDown, Droplets, Cloud, Thermometer, Wind, AlertTriangle, CheckCircle, Calendar, DollarSign, Activity, BarChart3, FileText, Sprout, TrendingUpIcon, ShoppingCart } from 'lucide-react'

// Mock data for charts
const yieldData = [
  { month: "Jan", yield: 45, target: 50 },
  { month: "Feb", yield: 52, target: 50 },
  { month: "Mar", yield: 48, target: 50 },
  { month: "Apr", yield: 61, target: 60 },
  { month: "May", yield: 68, target: 65 },
  { month: "Jun", yield: 75, target: 70 },
]

const weatherData = [
  { day: "Mon", temp: 24, humidity: 65 },
  { day: "Tue", temp: 26, humidity: 62 },
  { day: "Wed", temp: 25, humidity: 68 },
  { day: "Thu", temp: 27, humidity: 60 },
  { day: "Fri", temp: 28, humidity: 58 },
  { day: "Sat", temp: 26, humidity: 63 },
  { day: "Sun", temp: 25, humidity: 66 },
]

const irrigationData = [
  { zone: "Zone 1", usage: 850 },
  { zone: "Zone 2", usage: 720 },
  { zone: "Zone 3", usage: 910 },
  { zone: "Zone 4", usage: 680 },
]

export default function DashboardPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t.dashboard.title}</h1>
          <p className="text-muted-foreground">{t.dashboard.welcome}</p>
        </div>

        {/* Planning Tools Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{t.dashboard.planningTools.title}</h2>
          <p className="text-muted-foreground mb-4">{t.dashboard.planningTools.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/dashboard/business-plan">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{t.dashboard.planningTools.business.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.dashboard.planningTools.business.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/farming-plan">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Sprout className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{t.dashboard.planningTools.farming.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.dashboard.planningTools.farming.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/market-plan">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TrendingUpIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{t.dashboard.planningTools.market.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.dashboard.planningTools.market.description}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/marketplace">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">{t.marketplace.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.marketplace.subtitle}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t.dashboard.yieldPrediction.expectedYield}
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245 {t.dashboard.yieldPrediction.tons}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <TrendingUp className="h-3 w-3 text-primary mr-1" />
                <span className="text-primary">+12%</span>
                <span className="mx-1">{t.dashboard.yieldPrediction.compared}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t.dashboard.weather.temperature}
              </CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">26°C</div>
              <p className="text-xs text-muted-foreground mt-1">
                {t.dashboard.weather.optimal}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t.dashboard.irrigation.waterUsage}
              </CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,160 {t.dashboard.irrigation.liters}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <TrendingDown className="h-3 w-3 text-primary mr-1" />
                <span className="text-primary">-8%</span>
                <span className="mx-1">vs average</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t.dashboard.market.title}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$425{t.dashboard.market.perTon}</div>
              <p className="text-xs text-primary mt-1">
                {t.dashboard.market.demand}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Yield Prediction Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t.dashboard.yieldPrediction.title}</CardTitle>
              <CardDescription>{t.dashboard.yieldPrediction.currentSeason}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  yield: {
                    label: "Actual Yield",
                    color: "hsl(var(--chart-1))",
                  },
                  target: {
                    label: "Target",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="yield"
                      stroke="var(--color-yield)"
                      strokeWidth={2}
                      name="Actual Yield"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="var(--color-target)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-xs text-muted-foreground">{t.dashboard.yieldPrediction.cropHealth}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Progress value={92} className="flex-1" />
                    <span className="text-sm font-medium">92%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.dashboard.yieldPrediction.harvestDate}</p>
                  <p className="text-sm font-medium mt-1">45 {t.dashboard.yieldPrediction.days}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge variant="default" className="mt-1">{t.dashboard.yieldPrediction.optimal}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>{t.dashboard.alerts.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.dashboard.alerts.pest}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Aphids detected in Zone 3
                  </p>
                  <Badge variant="destructive" className="mt-2 text-xs">
                    {t.dashboard.alerts.high}
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                <Cloud className="h-5 w-5 text-accent mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.dashboard.alerts.weather}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Heavy rainfall expected tomorrow
                  </p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {t.dashboard.alerts.medium}
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Droplets className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t.dashboard.alerts.irrigation}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Zone 2 soil moisture below 40%
                  </p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {t.dashboard.alerts.medium}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weather Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>{t.dashboard.weather.title}</CardTitle>
              <CardDescription>{t.dashboard.weather.forecast}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  temp: {
                    label: t.dashboard.weather.temperature,
                    color: "hsl(var(--chart-2))",
                  },
                  humidity: {
                    label: t.dashboard.weather.humidity,
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="var(--color-temp)"
                      strokeWidth={2}
                      name={t.dashboard.weather.temperature}
                    />
                    <Line
                      type="monotone"
                      dataKey="humidity"
                      stroke="var(--color-humidity)"
                      strokeWidth={2}
                      name={t.dashboard.weather.humidity}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div className="text-center">
                  <Thermometer className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Temp</p>
                  <p className="text-sm font-medium">26°C</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Humidity</p>
                  <p className="text-sm font-medium">65%</p>
                </div>
                <div className="text-center">
                  <Wind className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Wind</p>
                  <p className="text-sm font-medium">12 km/h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Irrigation */}
          <Card>
            <CardHeader>
              <CardTitle>{t.dashboard.irrigation.title}</CardTitle>
              <CardDescription>{t.dashboard.irrigation.waterUsage}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  usage: {
                    label: "Water Usage",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={irrigationData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="zone" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="usage"
                      fill="var(--color-usage)"
                      radius={[4, 4, 0, 0]}
                      name="Liters"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">{t.dashboard.irrigation.status}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{t.dashboard.irrigation.active}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.dashboard.irrigation.soilMoisture}</p>
                  <p className="text-sm font-medium mt-1">2 {t.dashboard.irrigation.zones}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Insights */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{t.dashboard.market.title}</CardTitle>
            <CardDescription>{t.dashboard.market.prices}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Wheat</p>
                <p className="text-2xl font-bold mb-1">$425{t.dashboard.market.perTon}</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary">+5.2%</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Corn</p>
                <p className="text-2xl font-bold mb-1">$380{t.dashboard.market.perTon}</p>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary">+3.8%</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Soybeans</p>
                <p className="text-2xl font-bold mb-1">$510{t.dashboard.market.perTon}</p>
                <div className="flex items-center gap-1">
                  <TrendingDown className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-destructive">-1.2%</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Rice</p>
                <p className="text-2xl font-bold mb-1">$395{t.dashboard.market.perTon}</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">{t.dashboard.market.stable}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
