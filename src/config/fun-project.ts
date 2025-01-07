export interface FunProject {
  id: string;
  title: string;
  description: string;
  image: string;
  height: number;
  githubLink: string;
  demoLink: string;
  tags: string[];
}

export const funProjects: FunProject[] = [
  {
    id: "0",
    title: "React-Native-App",
    description: "A simple React-Native app to display a timer and a countdown",
    image: "/images/react-native-app.jpeg",
    height: 600,
    githubLink: "https://github.com/lfednail/react-native-app",
    demoLink: "https://rn-timer.vercel.app/",
    tags: ["React-Native", "JavaScript", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    id: '1',
    title: 'Aurora Tracker',
    description: 'A real-time aurora borealis prediction and tracking application using weather and solar activity data.',
    image: '/images/Aurora.png',
    height: 600,
    githubLink: 'https://github.com/yourusername/aurora-tracker',
    demoLink: 'https://aurora-tracker.demo',
    tags: ['React', 'Node.js', 'Weather API']
  },
  {
    id: '2',
    title: 'Weather App',
    description: 'A weather app that displays current weather conditions, hourly forecast, and radar image for a given location.',
    image: '/images/weather.jpeg',
    height: 600,
    githubLink: 'https://github.com/yourusername/weather-app',
    demoLink: 'https://weather-app.demo',
    tags: ['React', 'Node.js', 'OpenWeatherMap API']
  },
  {
    id: '3',
    title: 'Nature Gallery',
    description: 'An interactive gallery showcasing natural phenomena with dynamic filtering and animations.',
    image: '/images/nature-gallery.jpeg',
    height: 600,
    githubLink: '',
    demoLink: '',
    tags: ['Next.js', 'Framer Motion']
  },
 ];