import Link from "../Link";
import { NavStyle } from "./style";

export interface LinkProps {
	url: string;
	value: string;
}

export interface NavProps {
	linkProps: LinkProps[];
}

export default function Nav({ linkProps }: NavProps) { 
	return (
		<NavStyle>
			{linkProps.map((link, i) => (
				<Link
					key={`${i}-${link.value}`}
					value={link.value}
					url={link.url}
					color={'white'}
					hoverColor={'orange'}
				/>
			))}
		</NavStyle>
	)
}
