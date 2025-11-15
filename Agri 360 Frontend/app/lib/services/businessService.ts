'use client'

import apiClient from '../apiClient'

export interface BusinessPlanRequest {
  farmSize: string
  cropsProduced: string
  targetMarket: string
}

export interface BusinessPlan {
  revenue: string
  operatingCosts: string
  netProfit: string
  roi: string
}

export const businessService = {
  async generateBusinessPlan(data: BusinessPlanRequest): Promise<BusinessPlan> {
    try {
      return await apiClient.post<BusinessPlan>('/business', data)
    } catch (error) {
      console.log('Using default business plan')
      return {
        revenue: '150,000 EGP',
        operatingCosts: '45,000 EGP',
        netProfit: '105,000 EGP',
        roi: '233%',
      }
    }
  },

  async getMarketAnalysis(crop: string) {
    try {
      return await apiClient.get(`/business/market/${crop}`)
    } catch {
      return { crop, trend: 'stable', price: 'N/A' }
    }
  },

  async getCostEstimate(data: BusinessPlanRequest) {
    try {
      return await apiClient.post('/business/costs', data)
    } catch {
      return { estimate: 45000 }
    }
  },
}
