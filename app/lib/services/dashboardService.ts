'use client'

import apiClient from '../apiClient'

export interface DashboardData {
  kpis: {
    yield: string
    price: string
    weather: string
    water: string
    soil: string
    profit: string
  }
  activities: Array<{
    activity: string
    date: string
    status: string
  }>
}

export const dashboardService = {
  async getDashboardData(): Promise<DashboardData> {
    try {
      return await apiClient.get<DashboardData>('/dashboard')
    } catch (error) {
      console.log('Using mock data due to API unavailability')
      return {
        kpis: {
          yield: '2,450 kg',
          price: '45 EGP/kg',
          weather: '78°C',
          water: '30%',
          soil: '92%',
          profit: '105,000 EGP',
        },
        activities: [
          {
            activity: 'Wheat yield prediction updated',
            date: 'Today, 10:30 AM',
            status: 'Completed',
          },
          {
            activity: 'Water irrigation schedule created',
            date: 'Yesterday, 3:15 PM',
            status: 'Active',
          },
          {
            activity: 'Market price alert: Tomatoes up 12%',
            date: '2 days ago',
            status: 'Notified',
          },
        ],
      }
    }
  },

  async getFarmStats() {
    try {
      return await apiClient.get('/dashboard/farms')
    } catch {
      return { farms: 0, totalArea: '0 hectares' }
    }
  },

  async getWeatherData(location: string) {
    try {
      return await apiClient.get(`/dashboard/weather?location=${location}`)
    } catch {
      return { temperature: '25°C', condition: 'Sunny' }
    }
  },
}
