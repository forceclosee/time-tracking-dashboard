# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). This project is a dynamic React dashboard built with Vite that allows users to view and switch between daily, weekly, and monthly activity statistics with a responsive layout.

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### Features

- **Responsive Layout**: Adjusts seamlessly across mobile, tablet, and desktop screens.
- **Interactive Hover States**: Displays smooth visual feedback when hovering over cards and interactive buttons.
- **Timeframe Switcher**: Toggles between daily, weekly, and monthly statistics dynamically.
- **Dynamic Data Binding**: Loads and displays activity statistics from a local JSON dataset.
- **Visual Categorization**: Uses distinct colors and icons to represent different activities (Work, Play, Study, etc.).

### Screenshot

<!-- isi screenshot -->

![](./screenshot.jpg)

### Links

- Solution URL: [solution URL](https://your-solution-url.com) <!-- ganti link -->
- Live Site URL: [live site URL](https://your-live-site-url.com) <!-- ganti link -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React 19](https://reactjs.org/) - JS library
- [Vite 8](https://vite.dev/) - Build tool
- [Fontsource](https://fontsource.org/) - Font loader

### What I learned

In this project, I learned how to manage dynamic data and connect state across React components.

- **Dynamic Data Mapping from JSON**

  I learned how to import a local JSON file directly and render it dynamically using the `.map()` array method. This keeps the code clean and scalable by avoiding hardcoded elements.

  ```jsx
  import DATA from "../data/data.json";

  export default function StatCards({ selectedTimeframe }) {
    const statCards = DATA.map((data) => {
      // ...
      return (
        <StatCard
          key={data.title}
          title={data.title}
          currentStat={`${currentStat}${currentStat <= 1 ? "hr" : "hrs"}`}
          previousStat={`${previousText}${previousStat}${previousStat <= 1 ? "hr" : "hrs"}`}
        />
      );
    });
    return <>{statCards}</>;
  }
  ```

- **State Lifting and Management**

  I learned how to lift state up to a common parent component (`TrackerDashboard`) so that the active timeframe selection in `ProfileCard` can instantly update the stats displayed in `StatCards`.

  ```jsx
  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,_1.3555rem_+_0.6163vi,_1.75rem)]">
      <ProfileCard
        setSelectedTimeframe={setSelectedTimeframe}
        selectedTimeframe={selectedTimeframe}
      />
      <StatCards selectedTimeframe={selectedTimeframe} />
    </div>
  );
  ```

### Continued development

In the future, I plan to continue developing this project by focusing on the following areas:

- **Component Animations**: Implementing smooth transitions (using CSS keyframes or Framer Motion) when statistics change to make the user interface feel more polished and premium.
- **Custom React Hooks**: Refactoring the timeframe switching and string mapping logic into a custom hook to make the codebase more modular and maintainable.
- **Interactive Data Editing**: Allowing users to edit their tracked hours or add new activity categories directly from the dashboard interface.
- **Database Integration**: Connecting the application to a serverless database (like Supabase or Firebase) to persist user data across sessions.

### Useful resources

- [TinyPNG](https://tinypng.com/) - Helped me compress and optimize the images in the project without losing quality, making the page load faster.
- [Cloudinary](https://cloudinary.com/) - Used to host the Open Graph and Twitter card images for social media sharing.
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjlophiddqccjgplachon0304v) - Chrome extension that allowed me to overlay the design mockup directly on my live page for pixel-perfect accuracy.
- [Fontsource](https://fontsource.org/) - This made self-hosting fonts incredibly easy. I simply installed the font package via npm and imported it directly into my JS file, eliminating the hassle of managing font files manually or relying on external CDNs.
- [Fluid Typography Calculator](https://royalfig.github.io/fluid-typography-calculator/) - A helpful tool for calculating responsive font sizes using CSS clamp(), which makes it easy to generate fluid text sizing that adapts smoothly between screen widths.

### AI Collaboration

I collaborated with Antigravity (Gemini) to document the project details and clarify core React architectures.

**How I used it:**

- **README Documentation**: Refined the features, what I learned, and continued development sections to ensure clear, concise, and well-structured documentation.
- **State Lifting Explanation**: Provided guidance and conceptual explanations on how to lift state up in React to manage shared data between sibling components.

Collaborating with the AI helped speed up the documentation process and reinforced my understanding of state management patterns in React.

## Author

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)
