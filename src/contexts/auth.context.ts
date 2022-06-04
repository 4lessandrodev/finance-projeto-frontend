import { UserType } from "@types";
import { createContext, useContext } from "react";

export interface AuthInterface {
	token?: string;
	user?: UserType | {};
	setUser: (user: UserType) => void;
	setToken: (token: string) => void;
}

const AuthContext = createContext<AuthInterface>({
	token: undefined,
	user: {} as UserType,
	setUser: (_user: UserType) => {},
	setToken: (_token: string) => {}
});

export function useAuth(): AuthInterface {
	return useContext(AuthContext);
}

export default AuthContext;
