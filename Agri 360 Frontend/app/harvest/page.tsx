"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HarvestPage() {
  const [plans, setPlans] = useState<any[]>([])
  const [name, setName] = useState("")

  useEffect(() => {
    import("@/lib/api").then(async ({ harvest }) => {
      try {
        const res = await harvest.listHarvestPlans()
        setPlans(Array.isArray(res) ? res : [])
      } catch (err) {
        console.error(err)
      }
    })
  }, [])

  const create = async () => {
    try {
      const api = (await import("@/lib/api")).harvest
      await api.createHarvestPlan({ name })
      const res = await api.listHarvestPlans()
      setPlans(Array.isArray(res) ? res : [])
      setName("")
    } catch (err) {
      alert("Failed to create harvest plan")
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Harvest Plans</h1>
      <div className="space-y-4 mb-6">
        <div>
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Button onClick={create}>Create</Button>
      </div>

      <div>
        {plans.length === 0 ? (
          <div className="p-4 border">No harvest plans yet.</div>
        ) : (
          <ul className="space-y-2">
            {plans.map((p) => (
              <li key={p._id} className="p-3 border rounded">{p.name || p.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
