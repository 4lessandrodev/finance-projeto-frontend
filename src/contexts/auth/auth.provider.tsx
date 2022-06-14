import { UserType } from "@types";
import { ReactComponentElement, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext, { AuthInterface } from "./auth.context";

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function AuthProvider ({ children }: Props) {
	const [user, setUser] = useState<UserType>({} as UserType);
	const [cookies, setCookie] = useCookies<string>(['token']);

	const context = useMemo((): AuthInterface => ({
		user,
		token: cookies.token as string,
		setToken: (token?: string) => {
			const expires = new Date();
			const hours = expires.getHours();
			expires.setHours(hours + 8);
			setCookie('token', token, { path: '/', expires, secure: true });
		},
		setUser
	}), [user, setCookie, cookies])

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	)
}
