import { createContext, useState, useEffect, useContext } from "react";
import type { FC, ReactNode } from "react";

import { type Volume, createVolume, isVolumeInRange } from "shared/interfaces";

export interface IVolumeContext {
	volume: Volume;
	setVolume: (value: number) => void;
}

export const VolumeContext = createContext<IVolumeContext | undefined>(
	undefined,
);

export const useVolume = () => {
	const context = useContext(VolumeContext);

	if (!context) {
		throw new Error("context error");
	}

	return context;
};

interface VolumeProviderProps {
	children: ReactNode;
}

export const VolumeProvider: FC<VolumeProviderProps> = ({ children }) => {
	const [volume, setVolumeState] = useState<Volume>(() => {
		const storedVolume = localStorage.getItem("volume");
		if (storedVolume) {
			const parsedVolume = JSON.parse(storedVolume);
			return createVolume(parsedVolume);
		}
		return createVolume(1);
	});

	const setVolume = (value: number) => {
		const newVolume = createVolume(value);
		setVolumeState(newVolume);
	};

	useEffect(() => {
		if (isVolumeInRange(volume)) {
			localStorage.setItem("volume", JSON.stringify(volume));
		}
	}, [volume]);

	return (
		<VolumeContext.Provider value={{ volume, setVolume }}>
			{children}
		</VolumeContext.Provider>
	);
};
