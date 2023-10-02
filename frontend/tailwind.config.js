module.exports = {
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        "dark",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "forest",
        "aqua",
        "black",
        "luxury",
        "dracula",
        "business",
        "night",
        "coffee",
      ],
      darkTheme: "night",
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    },
  };
  