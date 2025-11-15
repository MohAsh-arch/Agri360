// In-memory fallback database for development when MongoDB is not available
class InMemoryDB {
  constructor() {
    this.data = {
      users: [],
      farms: [],
      crops: [],
      businessPlans: [],
      fertilizers: [],
    }
  }

  // Users
  createUser(userData) {
    const user = { ...userData, _id: Date.now().toString() }
    this.data.users.push(user)
    return user
  }

  findUserByEmail(email) {
    return this.data.users.find(u => u.email === email)
  }

  // Mock data
  getMockDashboard() {
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
        { activity: 'Wheat yield prediction updated', date: 'Today, 10:30 AM', status: 'Completed' },
        { activity: 'Water irrigation schedule created', date: 'Yesterday, 3:15 PM', status: 'Active' },
        { activity: 'Market price alert: Tomatoes up 12%', date: '2 days ago', status: 'Notified' },
      ],
    }
  }
}

export default new InMemoryDB()
