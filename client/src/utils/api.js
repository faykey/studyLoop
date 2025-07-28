const API_BASE = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/$/, '') || "http://localhost:5000";

// Generic request function
async function request(path, method = "GET", data = null, isProtected = false) {
    const headers = { "Content-Type": "application/json" };

    if (isProtected) {
        const token = localStorage.getItem("token");
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    const config = { method, headers };
    if (data) config.body = JSON.stringify(data);

    try {
        const res = await fetch(`${API_BASE}${path}`, config);
        const json = await res.json();

        if (!res.ok) throw new Error(json.message || "API Error");
        return json;
    } catch (err) {
        console.error("API Request Failed:", {
            path: `${API_BASE}${path}`,
            method,
            data,
            error: err.message,
        });
        throw err;
    }
}

// API functions
export function registerUser(fullName, email, password) {
    return request("/api/user/register", "POST", { fullName, email, password });
}

export function loginUser(email, password) {
    return request("/api/user/login", "POST", { email, password });
}

export function getUserProfile() {
    return request("/api/user/me", "GET", null, true);
}

// Get total question count by logged-in user
export function getUserQuestionCount() {
    return request("/api/questions/user/count", "GET", null, true);
}

// Get total answer count by logged-in user
export function getUserAnswerCount() {
    return request("/api/answers/user/count", "GET", null, true);
}

// Fetch full streak + achievements info
export function getUserStreakDetails() {
    return request("/api/streak/full", "GET", null, true);
}