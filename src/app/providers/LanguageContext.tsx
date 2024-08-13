import {
	type FC,
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
} from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export interface ILanguageContext {
	language: string;
	setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(
	undefined,
);

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("context error");
	}

	return context;
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<string>(i18n.language);

	useEffect(() => {
		const language = localStorage.getItem("language");
		if (language) {
			setLanguage(language);
		}
	}, []);

	useEffect(() => {
		if (i18n.language !== language) {
			localStorage.setItem("language", language);
			i18n.changeLanguage(language);
		}
	}, [language, i18n]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
