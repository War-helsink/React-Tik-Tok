import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit-minmax": "repeat(auto-fit, minmax(220px, 1fr))",
			},
			width: {
				"custom-width": "calc(33.3% - 12px)",
			},
		},
		colors: {
			background: {
				contrast: "var(--background-contrast)",

			},
			border: {
				default:
					"var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, #c1c4cd)))) !important",
				contrast: "var(--border-contrast)",
			},
			primary: {
				default: "var(--ion-color-primary)",
				contrast: "var(--ion-color-primary-contrast)",
				shade: "var(--ion-color-primary-shade)",
				tint: "var(--ion-color-primary-tint)",
			},
			secondary: {
				default: "var(--ion-color-secondary)",
				contrast: "var(--ion-color-secondary-contrast)",
				shade: "var(--ion-color-secondary-shade)",
				tint: "var(--ion-color-secondary-tint)",
			},
			tertiary: {
				default: "var(--ion-color-tertiary)",
				contrast: "var(--ion-color-tertiary-contrast)",
				shade: "var(--ion-color-tertiary-shade)",
				tint: "var(--ion-color-tertiary-tint)",
			},
			light: {
				default: "var(--ion-color-light)",
				contrast: "var(--ion-color-light-contrast)",
				shade: "var(--ion-color-light-shade)",
				tint: "var(--ion-color-light-tint)",
			},
			medium: {
				default: "var(--ion-color-medium)",
				contrast: "var(--ion-color-medium-contrast)",
				shade: "var(--ion-color-medium-shade)",
				tint: "var(--ion-color-medium-tint)",
			},
			dark: {
				default: "var(--ion-color-dark)",
				contrast: "var(--ion-color-dark-contrast)",
				shade: "var(--ion-color-dark-shade)",
				tint: "var(--ion-color-dark-tint)",
			},
			success: {
				default: "var(--ion-color-success)",
				contrast: "var(--ion-color-success-contrast)",
				shade: "var(--ion-color-success-shade)",
				tint: "var(--ion-color-success-tint)",
			},
			warning: {
				default: "var(--ion-color-warning)",
				contrast: "var(--ion-color-warning-contrast)",
				shade: "var(--ion-color-warning-shade)",
				tint: "var(--ion-color-warning-tint)",
			},
			danger: {
				default: "var(--ion-color-danger)",
				contrast: "var(--ion-color-danger-contrast)",
				shade: "var(--ion-color-danger-shade)",
				tint: "var(--ion-color-danger-tint)",
			},
			step: {
				"50": "var(--ion-color-step-50)",
				"100": "var(--ion-color-step-100)",
				"150": "var(--ion-color-step-150)",
				"200": "var(--ion-color-step-200)",
				"250": "var(--ion-color-step-250)",
				"300": "var(--ion-color-step-300)",
				"350": "var(--ion-color-step-350)",
				"400": "var(--ion-color-step-400)",
				"450": "var(--ion-color-step-450)",
				"500": "var(--ion-color-step-500)",
				"550": "var(--ion-color-step-550)",
				"600": "var(--ion-color-step-600)",
				"650": "var(--ion-color-step-650)",
				"700": "var(--ion-color-step-700)",
				"750": "var(--ion-color-step-750)",
				"800": "var(--ion-color-step-800)",
				"850": "var(--ion-color-step-850)",
				"900": "var(--ion-color-step-900)",
				"950": "var(--ion-color-step-950)",
			},
			"tik-tok": {
				default: "var(--ion-color-tik-tok)",
				contrast: "var(--ion-color-tik-tok-contrast)",
				shade: "var(--ion-color-tik-tok-shade)",
				tint: "var(--ion-color-tik-tok-tint)",
			},
			"tik-tok-button": {
				default: "var(--ion-color-tik-tok-button)",
				contrast: "var(--ion-color-tik-tok-button-contrast)",
				shade: "var(--ion-color-tik-tok-button-shade)",
				tint: "var(--ion-color-tik-tok-button-tint)",
			},
		},
	},
	plugins: [],
};

export default config;
