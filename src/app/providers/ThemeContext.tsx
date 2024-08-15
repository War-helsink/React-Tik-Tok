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
	const [isDark, setIsDark] = useState<boolean>(() => {
		const theme = localStorage.getItem("theme");
		if (theme) {
			return JSON.parse(theme) as boolean;
		}
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
		return prefersDark.matches;
	});

	const toggleTheme = () => {
		localStorage.setItem("theme", JSON.stringify(!isDark));
		setIsDark((prev) => !prev);
	};

	useEffect(() => {
		document.documentElement.classList.toggle("ion-palette-dark", isDark);
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
