import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", { email, password });
            alert("Login successful");
            console.log("Login response:", response.data);
        } catch (error) {
            // Safely access error message or fall back to default message
            const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again.";
            alert(errorMessage);
            console.error("Login error:", error); // for debugging
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md w-80">
                <h2 className="mb-4 text-xl font-semibold text-center">Login</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" className="w-full p-2 mb-4 border rounded" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" className="w-full p-2 mb-4 border rounded" />
                <button type="submit" className="w-full p-2 font-semibold text-white bg-blue-500 rounded">Login</button>
            </form>
        </div>
        
    );
}

export default Login;