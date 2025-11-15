"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, CheckCircle2 } from 'lucide-react'

export default function SignInPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const api = (await import("@/lib/api")).auth
      const res: any = await api.login({ email, password })
      // save token if provided
      if (res?.token) localStorage.setItem("token", res.token)
      setIsSuccess(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (err: any) {
      alert(err.message || "Login failed")
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {isSuccess && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
                <p className="text-lg font-medium">{t.auth.signIn.success}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <Sprout className="h-8 w-8" />
          <span>Agri360</span>
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight text-balance">
            {t.landing.hero.title}
          </h1>
          <p className="text-lg text-primary-foreground/90 text-pretty">
            {t.landing.hero.description}
          </p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          © 2025 Agri360. All rights reserved.
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center md:hidden mb-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Sprout className="h-6 w-6 text-primary" />
              <span>Agri360</span>
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="hidden md:flex justify-end">
            <LanguageSwitcher />
          </div>

          <Card className="border-2">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">{t.auth.signIn.title}</CardTitle>
              <CardDescription className="text-base">{t.auth.signIn.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.auth.signIn.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="farmer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t.auth.signIn.password}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="remember"
                      checked={remember}
                      onCheckedChange={(checked) => setRemember(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm cursor-pointer">
                      {t.auth.signIn.remember}
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    {t.auth.signIn.forgot}
                  </Link>
                </div>

                <Button type="submit" className="w-full h-11 text-base">
                  {t.auth.signIn.button}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">{t.auth.signIn.noAccount}</span>{" "}
                <Link href="/signup" className="text-primary font-medium hover:underline">
                  {t.auth.signIn.signUpLink}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
