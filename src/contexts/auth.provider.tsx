import { UserType } from "@types";
import { ReactComponentElement, useMemo, useState } from "react";
import AuthContext, { AuthInterface } from "./auth.context";

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function AuthProvider ({ children }: Props) {

	const [token, setToken] = useState<string | undefined>(undefined);
	const [user, setUser] = useState<UserType>({} as UserType);

	const context = useMemo((): AuthInterface => ({
		token,
		user,
		setToken,
		setUser
	}), [token, user])

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	)
}
