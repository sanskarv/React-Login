import { useState } from "react";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/users/register", { name, email, password, role });
            alert("User registered successfully");
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSignup} className="p-6 bg-white rounded shadow-md w-80">
                <h2 className="mb-4 text-xl font-semibold text-center">Signup</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Name" className="w-full p-2 mb-4 border rounded" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" className="w-full p-2 mb-4 border rounded" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" className="w-full p-2 mb-4 border rounded" />
                <select value={role} onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-4 border rounded">
                    <option value="student">Student</option>
                    <option value="recruiter">Recruiter</option>
                </select>
                <button type="submit" className="w-full p-2 font-semibold text-white bg-green-500 rounded">Signup</button>
            </form>
        </div>
    );
}

export default Signup;