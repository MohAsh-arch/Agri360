(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navigation
        nav: {
            features: "Features",
            about: "About",
            contact: "Contact",
            signIn: "Sign In",
            signUp: "Sign Up"
        },
        // Landing Page
        landing: {
            hero: {
                title: "360° Farm Intelligence",
                subtitle: "Agri360",
                description: "Empower your farm with AI-driven insights. Optimize yields, conserve water, and make data-backed decisions for sustainable agriculture.",
                cta: "Get Started",
                learnMore: "Learn More"
            },
            features: {
                title: "Comprehensive Farm Management",
                subtitle: "Everything you need to modernize your agricultural operations",
                yieldPrediction: {
                    title: "Yield Prediction",
                    description: "AI-powered forecasting to predict harvest outcomes and optimize planting strategies."
                },
                weatherAnalytics: {
                    title: "Weather Analytics",
                    description: "Real-time weather data and predictive analytics to plan your farming activities."
                },
                smartIrrigation: {
                    title: "Smart Irrigation",
                    description: "Data-driven water management to conserve resources and maximize crop health."
                },
                mobileAccess: {
                    title: "Mobile Access",
                    description: "Manage your farm from anywhere with our mobile-optimized platform."
                },
                marketInsights: {
                    title: "Market Insights",
                    description: "Stay informed with real-time market prices and demand forecasts."
                },
                pestAlerts: {
                    title: "Pest & Disease Alerts",
                    description: "Early detection and preventive recommendations to protect your crops."
                }
            },
            stats: {
                accuracy: "Prediction Accuracy",
                waterSaved: "Water Saved",
                yieldIncrease: "Yield Increase",
                users: "Active Users"
            },
            cta: {
                title: "Ready to Transform Your Farm?",
                description: "Join thousands of farmers who are already using Agri360 to increase productivity and sustainability.",
                button: "Start Free Trial"
            }
        },
        // Auth Pages
        auth: {
            signIn: {
                title: "Welcome Back",
                subtitle: "Sign in to your Agri360 account",
                email: "Email Address",
                password: "Password",
                remember: "Remember me",
                forgot: "Forgot password?",
                button: "Sign In",
                noAccount: "Don't have an account?",
                signUpLink: "Sign up",
                success: "Sign in successful! Redirecting to dashboard..."
            },
            signUp: {
                title: "Create Account",
                subtitle: "Join Agri360 and start optimizing your farm",
                name: "Full Name",
                email: "Email Address",
                password: "Password",
                confirm: "Confirm Password",
                terms: "I agree to the Terms of Service and Privacy Policy",
                button: "Create Account",
                hasAccount: "Already have an account?",
                signInLink: "Sign in",
                success: "Account created successfully! Redirecting to dashboard..."
            }
        },
        // Dashboard
        dashboard: {
            title: "Dashboard",
            welcome: "Welcome back",
            overview: "Farm Overview",
            quickActions: "Quick Actions",
            // Yield Prediction
            yieldPrediction: {
                title: "Yield Prediction",
                currentSeason: "Current Season Forecast",
                expectedYield: "Expected Yield",
                tons: "tons",
                compared: "compared to last year",
                cropHealth: "Crop Health Score",
                optimal: "Optimal",
                harvestDate: "Expected Harvest",
                days: "days"
            },
            // Weather Analytics
            weather: {
                title: "Weather Analytics",
                current: "Current Conditions",
                forecast: "7-Day Forecast",
                temperature: "Temperature",
                humidity: "Humidity",
                rainfall: "Rainfall",
                windSpeed: "Wind Speed",
                optimal: "Optimal for planting"
            },
            // Smart Irrigation
            irrigation: {
                title: "Smart Irrigation",
                status: "System Status",
                active: "Active",
                inactive: "Inactive",
                waterUsage: "Water Usage Today",
                liters: "liters",
                nextSchedule: "Next Irrigation",
                soilMoisture: "Soil Moisture",
                zones: "zones need attention"
            },
            // Market Insights
            market: {
                title: "Market Insights",
                prices: "Current Market Prices",
                perTon: "/ton",
                trend: "Trend",
                up: "Up",
                down: "Down",
                stable: "Stable",
                recommendation: "Best time to sell",
                demand: "High Demand"
            },
            // Activities
            activities: {
                title: "Recent Activities",
                viewAll: "View All",
                noActivities: "No recent activities"
            },
            // Alerts
            alerts: {
                title: "Alerts & Notifications",
                pest: "Pest Alert",
                disease: "Disease Risk",
                weather: "Weather Warning",
                irrigation: "Irrigation Required",
                high: "High",
                medium: "Medium",
                low: "Low"
            },
            // Planning Tools
            planningTools: {
                title: "Planning Tools",
                subtitle: "Create and manage your farm plans",
                business: {
                    title: "Business Plan",
                    description: "Create comprehensive business strategies"
                },
                farming: {
                    title: "Farming Plan",
                    description: "Plan your crops and operations"
                },
                market: {
                    title: "Market Plan",
                    description: "Develop market and sales strategies"
                }
            }
        },
        // Planning Pages
        planning: {
            businessPlan: {
                title: "Business Plan Maker",
                subtitle: "Create and manage your farm business plan",
                sections: {
                    executive: "Executive Summary",
                    financial: "Financial Projections",
                    operations: "Operations Plan",
                    marketing: "Marketing Strategy"
                },
                buttons: {
                    save: "Save Plan",
                    export: "Export PDF",
                    new: "New Plan"
                }
            },
            farmingPlan: {
                title: "Farming Plan",
                subtitle: "Plan your crops, rotations, and farming activities",
                sections: {
                    crops: "Crop Planning",
                    rotation: "Crop Rotation",
                    schedule: "Activity Schedule",
                    resources: "Resource Allocation"
                },
                buttons: {
                    save: "Save Plan",
                    export: "Export PDF",
                    new: "New Plan"
                }
            },
            marketPlan: {
                title: "Market Plan",
                subtitle: "Develop your market strategy and sales plan",
                sections: {
                    analysis: "Market Analysis",
                    pricing: "Pricing Strategy",
                    distribution: "Distribution Channels",
                    promotion: "Promotion Plan"
                },
                buttons: {
                    save: "Save Plan",
                    export: "Export PDF",
                    new: "New Plan"
                }
            },
            aiChat: {
                title: "AI Assistant",
                placeholder: "Ask AI for help with your plan...",
                send: "Send",
                thinking: "AI is thinking...",
                error: "Failed to get response. Please try again."
            },
            editor: {
                placeholder: "Start writing your plan here...",
                lastSaved: "Last saved",
                autoSave: "Auto-saving..."
            }
        },
        // Marketplace
        marketplace: {
            title: "Marketplace",
            subtitle: "Buy and sell agricultural products",
            tabs: {
                all: "All Products",
                buying: "Buying",
                selling: "Selling",
                myListings: "My Listings"
            },
            filters: {
                category: "Category",
                allCategories: "All Categories",
                priceRange: "Price Range",
                location: "Location",
                condition: "Condition",
                search: "Search products...",
                apply: "Apply Filters",
                clear: "Clear"
            },
            categories: {
                crops: "Crops & Seeds",
                equipment: "Equipment",
                fertilizers: "Fertilizers",
                livestock: "Livestock",
                produce: "Fresh Produce",
                other: "Other"
            },
            product: {
                price: "Price",
                perUnit: "/unit",
                quantity: "Quantity Available",
                location: "Location",
                condition: "Condition",
                seller: "Seller",
                contact: "Contact Seller",
                buy: "Buy Now",
                addToCart: "Add to Cart",
                negotiate: "Negotiate Price",
                report: "Report"
            },
            listing: {
                title: "Create Listing",
                editTitle: "Edit Listing",
                productName: "Product Name",
                description: "Description",
                category: "Category",
                price: "Price",
                quantity: "Quantity",
                unit: "Unit",
                location: "Location",
                condition: "Condition",
                images: "Images",
                publish: "Publish Listing",
                update: "Update Listing",
                cancel: "Cancel",
                delete: "Delete Listing"
            },
            conditions: {
                new: "New",
                likeNew: "Like New",
                good: "Good",
                fair: "Fair"
            },
            units: {
                kg: "Kilograms",
                ton: "Tons",
                piece: "Pieces",
                bag: "Bags",
                liter: "Liters"
            },
            empty: {
                title: "No products found",
                description: "Try adjusting your filters or search terms",
                createListing: "Create your first listing"
            },
            actions: {
                newListing: "New Listing",
                viewDetails: "View Details",
                edit: "Edit",
                delete: "Delete",
                sold: "Mark as Sold"
            },
            messages: {
                listingCreated: "Listing created successfully!",
                listingUpdated: "Listing updated successfully!",
                listingDeleted: "Listing deleted successfully!",
                contactSeller: "Contact information will be shared"
            }
        }
    },
    ar: {
        // Navigation
        nav: {
            features: "المميزات",
            about: "عن التطبيق",
            contact: "اتصل بنا",
            signIn: "تسجيل الدخول",
            signUp: "إنشاء حساب"
        },
        // Landing Page
        landing: {
            hero: {
                title: "ذكاء زراعي بزاوية 360°",
                subtitle: "أجري360",
                description: "قم بتمكين مزرعتك برؤى مدعومة بالذكاء الاصطناعي. قم بتحسين المحاصيل، وحفظ المياه، واتخذ قرارات مدعومة بالبيانات من أجل زراعة مستدامة.",
                cta: "ابدأ الآن",
                learnMore: "اعرف المزيد"
            },
            features: {
                title: "إدارة شاملة للمزارع",
                subtitle: "كل ما تحتاجه لتحديث عملياتك الزراعية",
                yieldPrediction: {
                    title: "توقع المحاصيل",
                    description: "توقعات مدعومة بالذكاء الاصطناعي للتنبؤ بنتائج الحصاد وتحسين استراتيجيات الزراعة."
                },
                weatherAnalytics: {
                    title: "تحليلات الطقس",
                    description: "بيانات الطقس الفورية والتحليلات التنبؤية لتخطيط أنشطتك الزراعية."
                },
                smartIrrigation: {
                    title: "الري الذكي",
                    description: "إدارة المياه القائمة على البيانات للحفاظ على الموارد وتعظيم صحة المحاصيل."
                },
                mobileAccess: {
                    title: "الوصول عبر الجوال",
                    description: "قم بإدارة مزرعتك من أي مكان باستخدام منصتنا المحسّنة للهواتف المحمولة."
                },
                marketInsights: {
                    title: "رؤى السوق",
                    description: "ابق على اطلاع بأسعار السوق الفورية وتوقعات الطلب."
                },
                pestAlerts: {
                    title: "تنبيهات الآفات والأمراض",
                    description: "الكشف المبكر والتوصيات الوقائية لحماية محاصيلك."
                }
            },
            stats: {
                accuracy: "دقة التنبؤ",
                waterSaved: "توفير المياه",
                yieldIncrease: "زيادة المحصول",
                users: "المستخدمون النشطون"
            },
            cta: {
                title: "هل أنت مستعد لتحويل مزرعتك؟",
                description: "انضم إلى آلاف المزارعين الذين يستخدمون بالفعل أجري360 لزيادة الإنتاجية والاستدامة.",
                button: "ابدأ النسخة التجريبية المجانية"
            }
        },
        // Auth Pages
        auth: {
            signIn: {
                title: "مرحبًا بعودتك",
                subtitle: "قم بتسجيل الدخول إلى حسابك في أجري360",
                email: "عنوان البريد الإلكتروني",
                password: "كلمة المرور",
                remember: "تذكرني",
                forgot: "هل نسيت كلمة المرور؟",
                button: "تسجيل الدخول",
                noAccount: "ليس لديك حساب؟",
                signUpLink: "إنشاء حساب",
                success: "تم تسجيل الدخول بنجاح! جاري التوجيه إلى لوحة التحكم..."
            },
            signUp: {
                title: "إنشاء حساب",
                subtitle: "انضم إلى أجري360 وابدأ في تحسين مزرعتك",
                name: "الاسم الكامل",
                email: "عنوان البريد الإلكتروني",
                password: "كلمة المرور",
                confirm: "تأكيد كلمة المرور",
                terms: "أوافق على شروط الخدمة وسياسة الخصوصية",
                button: "إنشاء حساب",
                hasAccount: "هل لديك حساب بالفعل؟",
                signInLink: "تسجيل الدخول",
                success: "تم إنشاء الحساب بنجاح! جاري التوجيه إلى لوحة التحكم..."
            }
        },
        // Dashboard
        dashboard: {
            title: "لوحة التحكم",
            welcome: "مرحبًا بعودتك",
            overview: "نظرة عامة على المزرعة",
            quickActions: "إجراءات سريعة",
            // Yield Prediction
            yieldPrediction: {
                title: "توقع المحاصيل",
                currentSeason: "توقعات الموسم الحالي",
                expectedYield: "المحصول المتوقع",
                tons: "طن",
                compared: "مقارنة بالعام الماضي",
                cropHealth: "درجة صحة المحصول",
                optimal: "مثالي",
                harvestDate: "موعد الحصاد المتوقع",
                days: "يوم"
            },
            // Weather Analytics
            weather: {
                title: "تحليلات الطقس",
                current: "الظروف الحالية",
                forecast: "توقعات 7 أيام",
                temperature: "درجة الحرارة",
                humidity: "الرطوبة",
                rainfall: "هطول الأمطار",
                windSpeed: "سرعة الرياح",
                optimal: "مثالي للزراعة"
            },
            // Smart Irrigation
            irrigation: {
                title: "الري الذكي",
                status: "حالة النظام",
                active: "نشط",
                inactive: "غير نشط",
                waterUsage: "استهلاك المياه اليوم",
                liters: "لتر",
                nextSchedule: "الري التالي",
                soilMoisture: "رطوبة التربة",
                zones: "مناطق تحتاج اهتمام"
            },
            // Market Insights
            market: {
                title: "رؤى السوق",
                prices: "أسعار السوق الحالية",
                perTon: "/طن",
                trend: "الاتجاه",
                up: "صاعد",
                down: "هابط",
                stable: "مستقر",
                recommendation: "أفضل وقت للبيع",
                demand: "طلب مرتفع"
            },
            // Activities
            activities: {
                title: "الأنشطة الأخيرة",
                viewAll: "عرض الكل",
                noActivities: "لا توجد أنشطة حديثة"
            },
            // Alerts
            alerts: {
                title: "التنبيهات والإشعارات",
                pest: "تنبيه آفات",
                disease: "خطر مرض",
                weather: "تحذير طقس",
                irrigation: "الري مطلوب",
                high: "مرتفع",
                medium: "متوسط",
                low: "منخفض"
            },
            // Planning Tools
            planningTools: {
                title: "أدوات التخطيط",
                subtitle: "إنشاء وإدارة خطط مزرعتك",
                business: {
                    title: "خطة العمل",
                    description: "إنشاء استراتيجيات أعمال شاملة"
                },
                farming: {
                    title: "خطة الزراعة",
                    description: "خطط محاصيلك وعملياتك"
                },
                market: {
                    title: "خطة السوق",
                    description: "تطوير استراتيجيات السوق والمبيعات"
                }
            }
        },
        // Planning Pages
        planning: {
            businessPlan: {
                title: "صانع خطة العمل",
                subtitle: "إنشاء وإدارة خطة عمل مزرعتك",
                sections: {
                    executive: "الملخص التنفيذي",
                    financial: "التوقعات المالية",
                    operations: "خطة العمليات",
                    marketing: "استراتيجية التسويق"
                },
                buttons: {
                    save: "حفظ الخطة",
                    export: "تصدير PDF",
                    new: "خطة جديدة"
                }
            },
            farmingPlan: {
                title: "خطة الزراعة",
                subtitle: "خطط محاصيلك ودوراتك وأنشطتك الزراعية",
                sections: {
                    crops: "تخطيط المحاصيل",
                    rotation: "دورة المحاصيل",
                    schedule: "جدول الأنشطة",
                    resources: "تخصيص الموارد"
                },
                buttons: {
                    save: "حفظ الخطة",
                    export: "تصدير PDF",
                    new: "خطة جديدة"
                }
            },
            marketPlan: {
                title: "خطة السوق",
                subtitle: "تطوير استراتيجية السوق وخطة المبيعات",
                sections: {
                    analysis: "تحليل السوق",
                    pricing: "استراتيجية التسعير",
                    distribution: "قنوات التوزيع",
                    promotion: "خطة الترويج"
                },
                buttons: {
                    save: "حفظ الخطة",
                    export: "تصدير PDF",
                    new: "خطة جديدة"
                }
            },
            aiChat: {
                title: "مساعد الذكاء الاصطناعي",
                placeholder: "اسأل الذكاء الاصطناعي للمساعدة في خطتك...",
                send: "إرسال",
                thinking: "الذكاء الاصطناعي يفكر...",
                error: "فشل في الحصول على استجابة. يرجى المحاولة مرة أخرى."
            },
            editor: {
                placeholder: "ابدأ في كتابة خطتك هنا...",
                lastSaved: "آخر حفظ",
                autoSave: "جاري الحفظ التلقائي..."
            }
        },
        // Marketplace
        marketplace: {
            title: "السوق",
            subtitle: "شراء وبيع المنتجات الزراعية",
            tabs: {
                all: "جميع المنتجات",
                buying: "للشراء",
                selling: "للبيع",
                myListings: "قوائمي"
            },
            filters: {
                category: "الفئة",
                allCategories: "جميع الفئات",
                priceRange: "نطاق السعر",
                location: "الموقع",
                condition: "الحالة",
                search: "البحث عن المنتجات...",
                apply: "تطبيق الفلاتر",
                clear: "مسح"
            },
            categories: {
                crops: "المحاصيل والبذور",
                equipment: "المعدات",
                fertilizers: "الأسمدة",
                livestock: "الثروة الحيوانية",
                produce: "المنتجات الطازجة",
                other: "أخرى"
            },
            product: {
                price: "السعر",
                perUnit: "/وحدة",
                quantity: "الكمية المتاحة",
                location: "الموقع",
                condition: "الحالة",
                seller: "البائع",
                contact: "اتصل بالبائع",
                buy: "اشتر الآن",
                addToCart: "أضف إلى السلة",
                negotiate: "تفاوض على السعر",
                report: "إبلاغ"
            },
            listing: {
                title: "إنشاء قائمة",
                editTitle: "تعديل القائمة",
                productName: "اسم المنتج",
                description: "الوصف",
                category: "الفئة",
                price: "السعر",
                quantity: "الكمية",
                unit: "الوحدة",
                location: "الموقع",
                condition: "الحالة",
                images: "الصور",
                publish: "نشر القائمة",
                update: "تحديث القائمة",
                cancel: "إلغاء",
                delete: "حذف القائمة"
            },
            conditions: {
                new: "جديد",
                likeNew: "شبه جديد",
                good: "جيد",
                fair: "مقبول"
            },
            units: {
                kg: "كيلوجرام",
                ton: "طن",
                piece: "قطعة",
                bag: "كيس",
                liter: "لتر"
            },
            empty: {
                title: "لم يتم العثور على منتجات",
                description: "حاول تعديل الفلاتر أو مصطلحات البحث",
                createListing: "أنشئ قائمتك الأولى"
            },
            actions: {
                newListing: "قائمة جديدة",
                viewDetails: "عرض التفاصيل",
                edit: "تعديل",
                delete: "حذف",
                sold: "وضع علامة كمباع"
            },
            messages: {
                listingCreated: "تم إنشاء القائمة بنجاح!",
                listingUpdated: "تم تحديث القائمة بنجاح!",
                listingDeleted: "تم حذف القائمة بنجاح!",
                contactSeller: "سيتم مشاركة معلومات الاتصال"
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/language-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Load language from localStorage
            const savedLang = localStorage.getItem("language");
            if (savedLang && (savedLang === "en" || savedLang === "ar")) {
                setLanguage(savedLang);
            }
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Save language to localStorage and update document direction
            localStorage.setItem("language", language);
            document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = language;
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const value = {
        language,
        setLanguage,
        t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language],
        dir: language === "ar" ? "rtl" : "ltr"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/language-context.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "pLm22SyN9hhMwhzV6kRSzXDFALQ=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@vercel/analytics/dist/next/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = getScriptSrc(props);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = `${props.basePath}/insights`;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            var _a;
            if (props.beforeSend) {
                (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
            }
        }
    }["Analytics.useEffect"], [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            inject({
                framework: props.framework || "react",
                basePath: props.basePath ?? getBasePath(),
                ...props.route !== void 0 && {
                    disableAutoTrack: true
                },
                ...props
            });
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_7eb84fc9._.js.map