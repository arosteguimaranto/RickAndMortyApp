import { useState } from "react";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
	const [user, setUser] = useState<User | null>(() => {
		const storedUser = localStorage.getItem("user");
    return storedUser? JSON.parse(storedUser) : null;
	})
	const navigate = useNavigate()

	const logIn = (user: User) => {
		localStorage.setItem("user", JSON.stringify(user));
		setUser(user);
		navigate('/')
	};

	const logOut = () => {
		setUser(null);
		navigate('/')
		localStorage.removeItem("user");
	};

	return {
		user,
		logOut,
		logIn,
	};
};

export default useAuth;
