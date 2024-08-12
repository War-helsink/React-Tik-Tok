import type { FC, FormEvent } from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useMatch} from "react-router-dom";

import { IonInput, IonIcon, type InputChangeEventDetail } from "@ionic/react";
import { searchSharp } from "ionicons/icons";

import styles from "./styles.module.scss";

const Search: FC = () => {
	const [keywords, setKeywords] = useState("");
	const isMatch = useMatch("search");
	const navigate = useNavigate();
	const { t } = useTranslation();

	useEffect(() => {
		if (isMatch) return;

		setKeywords("");
	}, [isMatch]);

	useEffect(() => {
		const val = keywords.trim();

		if (!val) return;

		navigate(`/search?q=${val}`);
	}, [keywords, navigate]);

	const handleChange = (ev: CustomEvent<InputChangeEventDetail>) => {
		setKeywords(ev.detail.value as string);
	};

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
	};

	return (
		<form className="w-[500px]" onSubmit={handleSubmit}>
			<IonInput
				type="text"
				name="search"
				className={styles.input}
				clearInput
				value={keywords}
				fill="outline"
				shape="round"
				placeholder={t("search")}
				onIonChange={handleChange}
			>
				<div slot="end" className="w-px h-1/2 bg-border-contrast" />
				<IonIcon
					slot="end"
					color="medium"
					className="text-xl"
					icon={searchSharp}
					aria-hidden="true"
				/>
			</IonInput>
		</form>
	);
};

export default Search;
