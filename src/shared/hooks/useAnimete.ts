import type { Dispatch, SetStateAction } from "react";
import { useState, useRef, useEffect } from "react";

export const useAnimation: (
	delay: number,
) => [boolean, Dispatch<SetStateAction<boolean>>] = (delay: number) => {
	const timer = useRef<NodeJS.Timeout | null>(null);
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		if (animated) {
			timer.current = setTimeout(() => setAnimated(false), delay);
		}
	}, [animated, delay]);

	return [animated, setAnimated];
};
