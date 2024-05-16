import React, { ReactNode, createContext, useContext, useState } from 'react'

interface User{
    name: string;
    email: string;
}

interface AuthContextProps{
    user: User | null;
    logIn: (user: User) => void;
    logOut: () => void;

}



const AuthContext = createContext<AuthContextProps | undefined>(undefined);




export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const logIn = (user: User) => {
setUser(user);
    };

    const logOut = () => {
        setUser(null);
    };

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

export const useAuth = (): AuthContextProps => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContext;
}


