const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Mock authentication - stores users in localStorage
const mockUsers = (() => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("mock_users")
    return stored ? JSON.parse(stored) : {}
  }
  return {}
})()

const saveMockUsers = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("mock_users", JSON.stringify(mockUsers))
  }
}

async function request(path: string, options: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }
  if (token) headers["Authorization"] = `Bearer ${token}`

  const res = await fetch(`${API_BASE}${path}`, {
    credentials: "include",
    ...options,
    headers,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }

  const contentType = res.headers.get("content-type") || ""
  if (contentType.includes("application/json")) return res.json()
  return res.text()
}

export const auth = {
  register: (data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (!data.email || !data.password) {
            reject(new Error("Email and password required"))
            return
          }
          if (mockUsers[data.email]) {
            reject(new Error("User already exists"))
            return
          }
          mockUsers[data.email] = { email: data.email, password: data.password, name: data.name || "User" }
          saveMockUsers()
          const token = "mock_token_" + Date.now()
          localStorage.setItem("token", token)
          localStorage.setItem("user_email", data.email)
          resolve({ token, user: { email: data.email, name: data.name || "User" } })
        } catch (err) {
          reject(err)
        }
      }, 500)
    })
  },
  login: (data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (!data.email || !data.password) {
            reject(new Error("Email and password required"))
            return
          }
          const user = mockUsers[data.email]
          if (!user || user.password !== data.password) {
            reject(new Error("Invalid email or password"))
            return
          }
          const token = "mock_token_" + Date.now()
          localStorage.setItem("token", token)
          localStorage.setItem("user_email", data.email)
          resolve({ token, user: { email: user.email, name: user.name } })
        } catch (err) {
          reject(err)
        }
      }, 500)
    })
  },
  me: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const email = typeof window !== "undefined" ? localStorage.getItem("user_email") : null
        if (email && mockUsers[email]) {
          resolve({ email, name: mockUsers[email].name })
        } else {
          resolve(null)
        }
      }, 100)
    })
  },
}

export const user = {
  getProfile: () => {
    return new Promise((resolve) => {
      const email = typeof window !== "undefined" ? localStorage.getItem("user_email") : null
      resolve({ email, name: mockUsers[email!]?.name || "User", avatar: "/placeholder-user.jpg" })
    })
  },
  updateProfile: (data: any) => Promise.resolve({ success: true }),
}

export const marketplace = {
  listListings: () => Promise.resolve([
    { id: 1, name: "Corn Seeds", price: 50, quantity: 100 },
    { id: 2, name: "Wheat Seeds", price: 45, quantity: 80 },
  ]),
  createListing: (data: any) => Promise.resolve({ id: Date.now(), ...data }),
  createOrder: (data: any) => Promise.resolve({ id: Date.now(), status: "pending" }),
}

export const farms = {
  createFarm: (data: any) => Promise.resolve({ id: Date.now(), ...data }),
  getFarm: (id: string) => Promise.resolve({ id, name: "Farm 1", area: 100 }),
  analyzeSoil: (data: any) => Promise.resolve({ quality: "Good", pH: 6.8 }),
}

export const harvest = {
  createHarvestPlan: (data: any) => Promise.resolve({ id: Date.now(), ...data }),
  listHarvestPlans: () => Promise.resolve([
    { id: 1, crop: "Corn", date: "2025-09-15", yield: 1000 },
  ]),
}

export const dashboard = {
  getStats: () => Promise.resolve({
    totalYield: 5000,
    waterUsed: 12000,
    cropHealth: 95,
    revenue: 50000,
  }),
  computeAndStore: (data: any) => Promise.resolve({ computed: true }),
}

export const chat = {
  chat: (data: any) => Promise.resolve({ response: "This is a mock AI response to: " + data.message }),
}

export const plans = {
  create: (data: any) => Promise.resolve({ id: Date.now(), ...data }),
  list: () => Promise.resolve([]),
  get: (id: string) => Promise.resolve({ id, title: "Plan 1" }),
  update: (id: string, data: any) => Promise.resolve({ id, ...data }),
  remove: (id: string) => Promise.resolve({ success: true }),
}

export default {
  auth,
  user,
  marketplace,
  farms,
  harvest,
  dashboard,
  chat,
  plans,
}
