'use client'

import apiClient from '../apiClient'

interface LoginPayload {
  email: string
  password: string
}

interface RegisterPayload {
  name: string
  email: string
  password: string
  phone?: string
}

interface AuthResponse {
  success: boolean
  token: string
  user: {
    _id: string
    name: string
    email: string
    phone?: string
  }
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/login', payload)
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/register', payload)
  },

  async logout() {
    // Clear token from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
    apiClient.setToken(null)
  },

  async verifyToken(): Promise<{ valid: boolean }> {
    try {
      return await apiClient.get<{ valid: boolean }>('/auth/verify')
    } catch {
      return { valid: false }
    }
  },

  setAuthToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
    apiClient.setToken(token)
  },

  getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token')
    }
    return null
  },
}
