import { auth, onAuthStateChanged } from '@/lib/firebase/auth';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export interface AuthContextType {
    user: any | null;
    initializing: boolean;
}

export const AuthContext = createContext<AuthContextType>(undefined!);

export interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [initializing, setinitializing] = useState(true);
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setinitializing(false);
        });
        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={{ user, initializing }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuthContext must be used within an AuthProvider');
    return context;
};
