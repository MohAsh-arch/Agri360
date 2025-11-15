'use client'

import apiClient from '../apiClient'

export interface CropPlanRequest {
  cropType: string
  soilType: string
  harvestDate: string
  expectedYield: string
  waterAvailability: string
}

export interface CropPlan {
  yield: string
  water: string
  confidence: string
  riskLevel: string
  timeline?: Array<{ week: string; tasks: number }>
  waterRequirements?: Array<{ phase: string; usage: number }>
}

export const farmingService = {
  async generateCropPlan(data: CropPlanRequest): Promise<CropPlan> {
    try {
      return await apiClient.post<CropPlan>('/simple', data)
    } catch (error) {
      console.log('Using default crop plan')
      return {
        yield: '2,450 kg',
        water: '30%',
        confidence: '92%',
        riskLevel: 'Low',
      }
    }
  },

  async getCropRecommendations(cropType: string) {
    try {
      return await apiClient.get(`/simple/recommendations/${cropType}`)
    } catch {
      return { crop: cropType, recommendations: [] }
    }
  },

  async getSoilAnalysis(soilType: string) {
    try {
      return await apiClient.get(`/simple/soil/${soilType}`)
    } catch {
      return { soilType, ph: 7, fertility: 'Good' }
    }
  },
}
