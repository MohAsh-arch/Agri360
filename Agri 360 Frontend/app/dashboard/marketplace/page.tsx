"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Search, Filter, Plus, MapPin, Package, TrendingUp, MessageCircle, Edit, Trash2, ArrowLeft } from 'lucide-react'

export default function MarketplacePage() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    import("@/lib/api").then(({ marketplace }) => {
      marketplace
        .listListings()
        .then((res: any) => setProducts(Array.isArray(res) ? res : []))
        .catch(() => setProducts([]))
        .finally(() => setLoading(false))
    })
  }, [])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">{t.marketplace.title}</h1>
            </div>
            <p className="text-muted-foreground">{t.marketplace.subtitle}</p>
          </div>

          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                {t.marketplace.actions.newListing}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{t.marketplace.listing.title}</DialogTitle>
                <DialogDescription>
                  Fill in the details to create your listing
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>{t.marketplace.listing.productName}</Label>
                  <Input placeholder="e.g., Premium Wheat Seeds" />
                </div>

                <div className="space-y-2">
                  <Label>{t.marketplace.listing.description}</Label>
                  <Textarea placeholder="Describe your product..." rows={3} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t.marketplace.listing.category}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.marketplace.filters.category} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crops">{t.marketplace.categories.crops}</SelectItem>
                        <SelectItem value="equipment">{t.marketplace.categories.equipment}</SelectItem>
                        <SelectItem value="fertilizers">{t.marketplace.categories.fertilizers}</SelectItem>
                        <SelectItem value="livestock">{t.marketplace.categories.livestock}</SelectItem>
                        <SelectItem value="produce">{t.marketplace.categories.produce}</SelectItem>
                        <SelectItem value="other">{t.marketplace.categories.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>{t.marketplace.listing.condition}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.marketplace.filters.condition} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">{t.marketplace.conditions.new}</SelectItem>
                        <SelectItem value="likeNew">{t.marketplace.conditions.likeNew}</SelectItem>
                        <SelectItem value="good">{t.marketplace.conditions.good}</SelectItem>
                        <SelectItem value="fair">{t.marketplace.conditions.fair}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>{t.marketplace.listing.price}</Label>
                    <Input type="number" placeholder="0" />
                  </div>

                  <div className="space-y-2">
                    <Label>{t.marketplace.listing.quantity}</Label>
                    <Input type="number" placeholder="0" />
                  </div>

                  <div className="space-y-2">
                    <Label>{t.marketplace.listing.unit}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">{t.marketplace.units.kg}</SelectItem>
                        <SelectItem value="ton">{t.marketplace.units.ton}</SelectItem>
                        <SelectItem value="piece">{t.marketplace.units.piece}</SelectItem>
                        <SelectItem value="bag">{t.marketplace.units.bag}</SelectItem>
                        <SelectItem value="liter">{t.marketplace.units.liter}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t.marketplace.listing.location}</Label>
                  <Input placeholder="e.g., Cairo, Egypt" />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    {t.marketplace.listing.cancel}
                  </Button>
                  <Button
                    onClick={async () => {
                      // minimal create listing: gather fields from DOM (simplified) or implement form state
                      // For now, publish a placeholder listing to backend then refresh
                      try {
                        const api = (await import("@/lib/api")).marketplace
                        await api.createListing({ title: "New Listing", description: "Created from UI" })
                        setIsCreateDialogOpen(false)
                        // refresh
                        setLoading(true)
                        const res = await api.listListings()
                        setProducts(Array.isArray(res) ? res : [])
                      } catch (err) {
                        console.error(err)
                        setIsCreateDialogOpen(false)
                      } finally {
                        setLoading(false)
                      }
                    }}
                  >
                    {t.marketplace.listing.publish}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t.marketplace.filters.search}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder={t.marketplace.filters.category} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.marketplace.filters.allCategories}</SelectItem>
                  <SelectItem value="crops">{t.marketplace.categories.crops}</SelectItem>
                  <SelectItem value="equipment">{t.marketplace.categories.equipment}</SelectItem>
                  <SelectItem value="fertilizers">{t.marketplace.categories.fertilizers}</SelectItem>
                  <SelectItem value="livestock">{t.marketplace.categories.livestock}</SelectItem>
                  <SelectItem value="produce">{t.marketplace.categories.produce}</SelectItem>
                  <SelectItem value="other">{t.marketplace.categories.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">{t.marketplace.tabs.all}</TabsTrigger>
            <TabsTrigger value="buying">{t.marketplace.tabs.buying}</TabsTrigger>
            <TabsTrigger value="selling">{t.marketplace.tabs.selling}</TabsTrigger>
            <TabsTrigger value="myListings">{t.marketplace.tabs.myListings}</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {filteredProducts.length === 0 ? (
              <Card className="p-12">
                <div className="text-center space-y-4">
                  <Package className="h-16 w-16 mx-auto text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t.marketplace.empty.title}</h3>
                    <p className="text-muted-foreground">{t.marketplace.empty.description}</p>
                  </div>
                </div>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-2 right-2">
                        {t.marketplace.conditions[product.condition as keyof typeof t.marketplace.conditions]}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate">{product.name}</CardTitle>
                          <CardDescription className="line-clamp-2 mt-1">
                            {product.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          ${product.price}
                          <span className="text-sm font-normal text-muted-foreground">
                            /{product.unit}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {product.quantity} {product.unit} {t.marketplace.product.quantity.toLowerCase()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">{product.location}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 gap-2">
                          <MessageCircle className="h-4 w-4" />
                          {t.marketplace.product.contact}
                        </Button>
                        <Button variant="outline" className="flex-1">
                          {t.marketplace.actions.viewDetails}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="buying">
            <Card className="p-12">
              <div className="text-center space-y-4">
                <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Your Buying Activity</h3>
                  <p className="text-muted-foreground">View products you're interested in buying</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="selling">
            <Card className="p-12">
              <div className="text-center space-y-4">
                <Package className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Your Selling Activity</h3>
                  <p className="text-muted-foreground">Track your sales and orders</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="myListings">
            <Card className="p-12">
              <div className="text-center space-y-4">
                <Package className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.marketplace.empty.createListing}</h3>
                  <p className="text-muted-foreground mb-4">Start selling your agricultural products</p>
                  <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    {t.marketplace.actions.newListing}
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
