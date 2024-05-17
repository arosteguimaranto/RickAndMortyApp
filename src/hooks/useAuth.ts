import { useState } from "react";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const navigate = useNavigate()

	const logIn = (user: User) => {
		setUser(user);
		navigate('/')
	};

	const logOut = () => {
		setUser(null);
		navigate('/')
	};

	return {
		user,
		logOut,
		logIn,
	};
};

export default useAuth;
