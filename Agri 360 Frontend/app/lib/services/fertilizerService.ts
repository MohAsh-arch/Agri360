'use client'

import apiClient from '../apiClient'

export interface FertilizerRequest {
  crop: string
  soilType: string
  landSize: string
  growthStage: string
}

export interface FertilizerPlan {
  nitrogen: string
  phosphorus: string
  potassium: string
  timeline: Array<{ phase: string; application: string }>
  brands: string[]
  totalCost: string
}

export const fertilizerService = {
  async getFertilizerRecommendation(data: FertilizerRequest): Promise<FertilizerPlan> {
    try {
      return await apiClient.post('/simple', data)
    } catch (error) {
      console.log('Using default fertilizer plan')
      return {
        nitrogen: '150 kg/ha',
        phosphorus: '75 kg/ha',
        potassium: '100 kg/ha',
        timeline: [
          { phase: 'Vegetative', application: 'Full dose' },
          { phase: 'Flowering', application: 'Half dose' },
          { phase: 'Fruiting', application: 'Quarter dose' },
        ],
        brands: ['Brand A', 'Brand B', 'Brand C'],
        totalCost: '2,500 EGP',
      }
    }
  },

  async getCropFertilizerData(crop: string) {
    try {
      return await apiClient.get(`/simple/fertilizer/${crop}`)
    } catch {
      return { crop, recommendations: {} }
    }
  },
}
