module.exports = [
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "chat",
    ()=>chat,
    "dashboard",
    ()=>dashboard,
    "default",
    ()=>__TURBOPACK__default__export__,
    "farms",
    ()=>farms,
    "harvest",
    ()=>harvest,
    "marketplace",
    ()=>marketplace,
    "plans",
    ()=>plans,
    "user",
    ()=>user
]);
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
// Mock authentication - stores users in localStorage
const mockUsers = (()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {};
})();
const saveMockUsers = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
async function request(path, options = {}) {
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const res = await fetch(`${API_BASE}${path}`, {
        credentials: "include",
        ...options,
        headers
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
    }
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) return res.json();
    return res.text();
}
const auth = {
    register: (data)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try {
                    if (!data.email || !data.password) {
                        reject(new Error("Email and password required"));
                        return;
                    }
                    if (mockUsers[data.email]) {
                        reject(new Error("User already exists"));
                        return;
                    }
                    mockUsers[data.email] = {
                        email: data.email,
                        password: data.password,
                        name: data.name || "User"
                    };
                    saveMockUsers();
                    const token = "mock_token_" + Date.now();
                    localStorage.setItem("token", token);
                    localStorage.setItem("user_email", data.email);
                    resolve({
                        token,
                        user: {
                            email: data.email,
                            name: data.name || "User"
                        }
                    });
                } catch (err) {
                    reject(err);
                }
            }, 500);
        });
    },
    login: (data)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try {
                    if (!data.email || !data.password) {
                        reject(new Error("Email and password required"));
                        return;
                    }
                    const user = mockUsers[data.email];
                    if (!user || user.password !== data.password) {
                        reject(new Error("Invalid email or password"));
                        return;
                    }
                    const token = "mock_token_" + Date.now();
                    localStorage.setItem("token", token);
                    localStorage.setItem("user_email", data.email);
                    resolve({
                        token,
                        user: {
                            email: user.email,
                            name: user.name
                        }
                    });
                } catch (err) {
                    reject(err);
                }
            }, 500);
        });
    },
    me: ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const email = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                else {
                    resolve(null);
                }
            }, 100);
        });
    }
};
const user = {
    getProfile: ()=>{
        return new Promise((resolve)=>{
            const email = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            resolve({
                email,
                name: mockUsers[email]?.name || "User",
                avatar: "/placeholder-user.jpg"
            });
        });
    },
    updateProfile: (data)=>Promise.resolve({
            success: true
        })
};
const marketplace = {
    listListings: ()=>Promise.resolve([
            {
                id: 1,
                name: "Corn Seeds",
                price: 50,
                quantity: 100
            },
            {
                id: 2,
                name: "Wheat Seeds",
                price: 45,
                quantity: 80
            }
        ]),
    createListing: (data)=>Promise.resolve({
            id: Date.now(),
            ...data
        }),
    createOrder: (data)=>Promise.resolve({
            id: Date.now(),
            status: "pending"
        })
};
const farms = {
    createFarm: (data)=>Promise.resolve({
            id: Date.now(),
            ...data
        }),
    getFarm: (id)=>Promise.resolve({
            id,
            name: "Farm 1",
            area: 100
        }),
    analyzeSoil: (data)=>Promise.resolve({
            quality: "Good",
            pH: 6.8
        })
};
const harvest = {
    createHarvestPlan: (data)=>Promise.resolve({
            id: Date.now(),
            ...data
        }),
    listHarvestPlans: ()=>Promise.resolve([
            {
                id: 1,
                crop: "Corn",
                date: "2025-09-15",
                yield: 1000
            }
        ])
};
const dashboard = {
    getStats: ()=>Promise.resolve({
            totalYield: 5000,
            waterUsed: 12000,
            cropHealth: 95,
            revenue: 50000
        }),
    computeAndStore: (data)=>Promise.resolve({
            computed: true
        })
};
const chat = {
    chat: (data)=>Promise.resolve({
            response: "This is a mock AI response to: " + data.message
        })
};
const plans = {
    create: (data)=>Promise.resolve({
            id: Date.now(),
            ...data
        }),
    list: ()=>Promise.resolve([]),
    get: (id)=>Promise.resolve({
            id,
            title: "Plan 1"
        }),
    update: (id, data)=>Promise.resolve({
            id,
            ...data
        }),
    remove: (id)=>Promise.resolve({
            success: true
        })
};
const __TURBOPACK__default__export__ = {
    auth,
    user,
    marketplace,
    farms,
    harvest,
    dashboard,
    chat,
    plans
};
}),
];

//# sourceMappingURL=lib_api_ts_7b69fe3b._.js.map