import axios from "axios";

export const RegisterAPI = async (username: string , email: string , password: string) => {
    const response = await axios.post("https://cafoot-backend.onrender.com/api/auth/register", {
        username,
        email,
        password
    });

    if (response.status !== 201) {
        throw new Error(response.data?.message || "Registration failed");
    }

    const data = await response.data;

    localStorage.setItem("token", data.token);

    return data;
}