'use client'

import apiClient from '../apiClient'

export interface WaterScheduleRequest {
  cropType: string
  fieldSize: string
}

export interface WaterSchedule {
  totalWater: string
  cost: string
  efficiency: string
  schedule: Array<{
    period: string
    needed: string
    action: string
  }>
}

export const waterService = {
  async generateWaterSchedule(data: WaterScheduleRequest): Promise<WaterSchedule> {
    try {
      return await apiClient.post('/dashboard', data)
    } catch (error) {
      console.log('Using default water schedule')
      return {
        totalWater: '177mm',
        cost: '1,770 EGP',
        efficiency: '93%',
        schedule: [
          { period: 'Week 1', needed: '45mm', action: 'Irrigate' },
          { period: 'Week 2', needed: '38mm', action: 'Monitor' },
          { period: 'Week 3', needed: '52mm', action: 'Irrigate' },
          { period: 'Week 4', needed: '42mm', action: 'Monitor' },
        ],
      }
    }
  },

  async getWaterTips(cropType: string) {
    try {
      return await apiClient.get(`/dashboard/water-tips/${cropType}`)
    } catch {
      return {
        tips: [
          'Irrigate early morning to reduce evaporation',
          'Add mulch to retain soil moisture',
          'Use drip irrigation for efficiency',
          'Monitor soil moisture regularly',
        ],
      }
    }
  },
}
