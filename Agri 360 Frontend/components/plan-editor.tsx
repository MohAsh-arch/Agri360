"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Save, Download, FileText, Send, Loader2, Sparkles } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PlanEditorProps {
  title: string
  sections: { [key: string]: string }
  planType: "business" | "farming" | "market"
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export function PlanEditor({ title, sections, planType }: PlanEditorProps) {
  const { t, language } = useLanguage()
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])
  const [planContent, setPlanContent] = useState<{ [key: string]: string }>(
    Object.keys(sections).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  )
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isAiThinking, setIsAiThinking] = useState(false)

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(planContent).some(content => content.length > 0)) {
        handleSave()
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [planContent])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const payload = {
        planType,
        sections: planContent,
        // optional metadata
        title,
      }
      const api = (await import("@/lib/api")).plans
      // Create a new plan (backend should return created plan)
      const res: any = await api.create(payload)
      // If backend returns an id or timestamps, we can capture them
      if (res) {
        setLastSaved(new Date())
      }
    } catch (err) {
      console.error("Failed to save plan", err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleExport = () => {
    // Create a simple text export
    let exportContent = `${title}\n${"=".repeat(title.length)}\n\n`
    Object.entries(sections).forEach(([key, sectionTitle]) => {
      exportContent += `${sectionTitle}\n${"-".repeat(sectionTitle.length)}\n${planContent[key] || ""}\n\n`
    })
    
    const blob = new Blob([exportContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${planType}-plan.txt`
    a.click()
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = { role: "user", content: inputMessage }
    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsAiThinking(true)

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500))

    const aiResponses = {
      business: [
        "Based on your farm size and location, I recommend focusing on organic certification to increase market value by 20-30%.",
        "Your financial projections look solid. Consider adding a section on risk management and contingency planning.",
        "For marketing strategy, emphasize your sustainable farming practices - consumers are willing to pay premium prices for sustainably grown produce.",
      ],
      farming: [
        "I suggest implementing crop rotation with legumes to naturally improve soil nitrogen levels and reduce fertilizer costs.",
        "Based on weather patterns, consider planting drought-resistant varieties for the summer season.",
        "Your activity schedule looks good. I'd recommend adding buffer time for weather delays, especially during harvest.",
      ],
      market: [
        "Current market trends show increasing demand for locally sourced produce. Consider partnering with local restaurants and farmers markets.",
        "Your pricing strategy is competitive. Consider dynamic pricing based on seasonal availability to maximize profits.",
        "Direct-to-consumer sales channels could increase your profit margins by 15-25% compared to wholesale.",
      ],
    }

    const responses = aiResponses[planType]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    const aiMessage: Message = { role: "assistant", content: randomResponse }
    setMessages(prev => [...prev, aiMessage])
    setIsAiThinking(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
      {/* Editor Section - 2 columns */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{title}</CardTitle>
              <div className="flex items-center gap-2">
                {isSaving && (
                  <Badge variant="outline" className="gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    {t.planning.editor.autoSave}
                  </Badge>
                )}
                {lastSaved && !isSaving && (
                  <span className="text-xs text-muted-foreground">
                    {t.planning.editor.lastSaved}: {lastSaved.toLocaleTimeString()}
                  </span>
                )}
                <Button onClick={handleSave} size="sm" variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  {t.planning[`${planType}Plan` as keyof typeof t.planning].buttons.save}
                </Button>
                <Button onClick={handleExport} size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  {t.planning[`${planType}Plan` as keyof typeof t.planning].buttons.export}
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {/* Section Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {Object.entries(sections).map(([key, sectionTitle]) => (
                <Button
                  key={key}
                  variant={activeSection === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection(key)}
                >
                  {sectionTitle}
                </Button>
              ))}
            </div>

            {/* Editor */}
            <Textarea
              value={planContent[activeSection] || ""}
              onChange={(e) =>
                setPlanContent({ ...planContent, [activeSection]: e.target.value })
              }
              placeholder={t.planning.editor.placeholder}
              className="flex-1 resize-none font-mono"
            />
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Section - 1 column */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {t.planning.aiChat.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 min-h-0">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                {t.planning.aiChat.placeholder}
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-3 rounded-lg",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground ml-8"
                    : "bg-muted mr-8"
                )}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            {isAiThinking && (
              <div className="p-3 rounded-lg bg-muted mr-8">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t.planning.aiChat.thinking}
                </p>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              placeholder={t.planning.aiChat.placeholder}
              disabled={isAiThinking}
            />
            <Button onClick={handleSendMessage} disabled={isAiThinking || !inputMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
