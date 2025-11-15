// In-memory mock database for development/testing
export class InMemoryDB {
  constructor() {
    this.users = [
      {
        id: "507f1f77bcf86cd799439011",
        name: "Ahmed Farmer",
        email: "ahmed@example.com",
        phone: "0123456789",
        location: "Cairo, Egypt",
        password: "$2a$10$0p.4vRKr8AAirNjObiHgGecb5VPCpAErvL8QEAtbqvKY.7qnXJlaC", // password123
        profilePicture: "https://i.pravatar.cc/150?img=1",
        createdAt: new Date("2024-01-15"),
        farmSize: "50 acres",
        cropsGrown: ["Wheat", "Corn"],
        experience: "15 years"
      },
      {
        id: "507f1f77bcf86cd799439012",
        name: "Fatima Agriculture",
        email: "fatima@example.com",
        phone: "0987654321",
        location: "Giza, Egypt",
        password: "$2a$10$0p.4vRKr8AAirNjObiHgGecb5VPCpAErvL8QEAtbqvKY.7qnXJlaC", // password123
        profilePicture: "https://i.pravatar.cc/150?img=2",
        createdAt: new Date("2024-02-10"),
        farmSize: "35 acres",
        cropsGrown: ["Cotton", "Vegetables"],
        experience: "10 years"
      }
    ];

    this.dashboardData = {
      kpis: {
        totalFarms: 3,
        totalArea: "128 acres",
        activeCrops: 7,
        revenue: "$45,230",
        revenueGrowth: "+12%",
        profitMargin: "28%"
      },
      activities: [
        { id: 1, type: "irrigation", crop: "Wheat", date: new Date(), status: "completed" },
        { id: 2, type: "fertilizer", crop: "Corn", date: new Date(), status: "in_progress" },
        { id: 3, type: "harvest", crop: "Cotton", date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), status: "scheduled" }
      ],
      weather: {
        current: 28,
        condition: "Sunny",
        humidity: "65%",
        windSpeed: "12 km/h"
      }
    };
  }

  // User methods
  async findUserByEmail(email) {
    return this.users.find(u => u.email === email);
  }

  async findUserById(id) {
    return this.users.find(u => u.id === id);
  }

  async createUser(userData) {
    const newUser = {
      id: new Date().getTime().toString(),
      ...userData,
      createdAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }

  // Dashboard methods
  async getDashboardData(userId) {
    return this.dashboardData;
  }

  async updateDashboardData(userId, updates) {
    this.dashboardData = { ...this.dashboardData, ...updates };
    return this.dashboardData;
  }

  // Generic methods
  async findById(collection, id) {
    if (collection === 'users') return this.findUserById(id);
    return null;
  }

  async findOne(collection, query) {
    if (collection === 'users') return this.findUserByEmail(query.email);
    return null;
  }

  async create(collection, data) {
    if (collection === 'users') return this.createUser(data);
    return null;
  }
}

export default new InMemoryDB();
