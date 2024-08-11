import {
	type FC,
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
} from "react";

export interface IThemeContext {
	isDark: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("context error");
	}

	return context;
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		localStorage.setItem("theme", JSON.stringify(!isDark));
		setIsDark((prev) => !prev);
	};

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme) {
			setIsDark(JSON.parse(theme) as boolean);
		} else {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
			setIsDark(prefersDark.matches);
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("ion-palette-dark", isDark);
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
