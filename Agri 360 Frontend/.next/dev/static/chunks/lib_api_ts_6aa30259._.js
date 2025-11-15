(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
// Mock authentication - stores users in localStorage
const mockUsers = (()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const stored = localStorage.getItem("mock_users");
        return stored ? JSON.parse(stored) : {};
    }
    //TURBOPACK unreachable
    ;
})();
const saveMockUsers = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("mock_users", JSON.stringify(mockUsers));
    }
};
async function request(path, options = {}) {
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") : "TURBOPACK unreachable";
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
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
                const email = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("user_email") : "TURBOPACK unreachable";
                if (email && mockUsers[email]) {
                    resolve({
                        email,
                        name: mockUsers[email].name
                    });
                } else {
                    resolve(null);
                }
            }, 100);
        });
    }
};
const user = {
    getProfile: ()=>{
        return new Promise((resolve)=>{
            const email = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("user_email") : "TURBOPACK unreachable";
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=lib_api_ts_6aa30259._.js.map