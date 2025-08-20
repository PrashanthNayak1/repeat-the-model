import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'var(--gradient-main)',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				petal: {
					base: 'hsl(var(--petal-base))',
					border: 'hsl(var(--petal-border))',
					hover: 'hsl(var(--petal-hover))',
					active: 'hsl(var(--petal-active))'
				},
				flower: {
					center: 'hsl(var(--flower-center))',
					'center-hover': 'hsl(var(--flower-center-hover))',
					accent: 'hsl(var(--flower-accent))'
				},
				game: {
					shuffle: 'hsl(var(--button-shuffle))',
					delete: 'hsl(var(--button-delete))',
					enter: 'hsl(var(--button-enter))'
				}
			},
			backgroundImage: {
				'gradient-main': 'var(--gradient-main)',
				'gradient-sky': 'var(--gradient-sky)',
				'gradient-meadow': 'var(--gradient-meadow)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'petal': 'var(--shadow-petal)',
				'button': 'var(--shadow-button)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'petal-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-2px) scale(1.02)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'petal-float': 'petal-float 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
