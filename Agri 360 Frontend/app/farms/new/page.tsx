"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function CreateFarmPage() {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const router = useRouter()

  const handleCreate = async () => {
    try {
      const api = (await import("@/lib/api")).farms
      await api.createFarm({ name, country })
      router.push("/farms")
    } catch (err) {
      alert("Failed to create farm")
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create Farm</h1>
      <div className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label>Country</Label>
          <Input value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleCreate}>Create</Button>
          <Button variant="outline" onClick={() => router.push('/farms')}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}
