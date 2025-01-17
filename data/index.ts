export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudyNotion ~ An Edtech Platform",
    des: " Designed, and deployed StudyNotion, a cutting-edge MERN stack educational platform incorporating MongoDB, Express.js, React.js, and Node.js, with JWT authentication",
    img: "/project1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://study-notion-ruddy-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Co-Partner ~ Web Version",
    des: " Developed a co-partner app leveraging React Native, JWT, Express, and MongoDB to address the challenge of college students finding project partners.",
    img: "/project2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://github.com/sagarpandey142/Co-Partner-Web-",
  },
  {
    id: 3,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ui.yoom.com",
  },

  {
    id: 4,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  }
];

export const testimonials = [
  {
    quote:
      "Working with LaunchLane was a game-changer for our business. They built a stunning, user-friendly website that perfectly represents our brand. Their attention to detail, creativity, and technical expertise were beyond impressive. If you're looking for a team to bring your vision to life, LaunchLane is the one.",
    name: "Emily Carter",
    title: "CEO of BrightPath Solutions",
  },
  {
    quote:
      "LaunchLane transformed our outdated website into a modern masterpiece. The process was seamless, and their team was incredibly supportive and knowledgeable throughout. They didn't just deliver a website; they delivered a platform that truly connects with our audience. Highly recommended!",
    name: "James Thornton",
    title: "Marketing Manager at SkyBound Logistics",
  },
  {
    quote:
      "From start to finish, LaunchLane exceeded our expectations. They created a sleek and professional website that not only looks fantastic but also performs flawlessly. Their dedication to understanding our needs and delivering exceptional results was unparalleled. LaunchLane is the perfect partner for any web project.",
    name: "Sophia Bennett",
    title: "Founder of Lumière Design Co.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    Link:"https://github.com/sagarpandey142"
  },
  {
    id: 2,
    img: "/twit.svg",
    Link:"https://x.com/sagarwebsec"
  },
  {
    id: 3,
    img: "/link.svg",
    Link:"https://www.linkedin.com/in/sagar-pandey-038a0a316/"
  },
];
