import React, { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../types";
import useAuth from "../hooks/useAuth";

interface AuthContextProps {
	user: User | null;
	logIn: (user: User) => void;
	logOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { user, logIn, logOut } = useAuth();
	return (
		<AuthContext.Provider
			value={{
				user,
				logIn,
				logOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = (): AuthContextProps => {
	const authContext = useContext(AuthContext);
	if (!authContext) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return authContext;
};
