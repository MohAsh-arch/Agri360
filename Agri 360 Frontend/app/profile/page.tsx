"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    import("@/lib/api").then(async ({ user }) => {
      try {
        const data = await user.getProfile()
        setProfile(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {profile ? (
        <div className="space-y-4 max-w-md">
          <div>
            <Label>Name</Label>
            <Input value={profile.name || ""} readOnly />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={profile.email || ""} readOnly />
          </div>
          <div>
            <Button onClick={() => router.push("/dashboard")}>Back</Button>
          </div>
        </div>
      ) : (
        <div>No profile data</div>
      )}
    </div>
  )
}
