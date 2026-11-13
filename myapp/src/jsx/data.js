// ------------------------------------------------------------
//  All the text on the site lives in this file.
//  Change anything here — you don't need to touch the components.
// ------------------------------------------------------------

export const site = {
  name: "Ahmed Jama",
  firstName: "Ahmed",
  initials: "AJ",
  role: "Full-stack developer & hardware specialist",
  location: "United Kingdom",
  email: "ahmedjama_02@outlook.com", // change to your real email
  phone: "", // optional — add your number here if you want it on the site
  github: "https://github.com/Ahjama31",
  resumeUrl: "/ahmed-jama-cv.pdf", // the CV file lives in the /public folder
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact me" },
];

export const hero = {
  greeting: "Hello, I'm",
  // These rotate with the typing effect
  roles: [
    "Full-stack developer",
    "Computer hardware specialist",
    "Computer Science graduate",
    "IT support engineer",
  ],
  tagline:
    "I work on both sides of the machine: I build full-stack web apps with React, Java and Spring Boot, and I build, upgrade and repair the computers they run on — CPUs, GPUs, RAM and everything in between.",
  marquee: [
    "React",
    "Java",
    "Spring Boot",
    "CPU & GPU installs",
    "RAM upgrades",
    "PC builds",
    "C# & Unity",
    "C++",
    "MySQL",
    "Networking",
    "Diagnostics",
  ],
};

export const about = {
  title: { before: "Software and hardware —", em: "I work on both", after: "." },
  paragraphs: [
    "I'm Ahmed, a Computer Science graduate from Brunel University with a well-rounded understanding of both hardware and software engineering.",
    "My skill set bridges the gap between low-level hardware configuration and modern software development, from assembling and configuring PC components, optimising BIOS settings, and managing system performance to designing RESTful APIs and developing responsive applications with React.",
  ],
  facts: [
    { label: "Degree", value: "BSc Computer Science, Brunel" },
    { label: "Specialism", value: "Full-stack & PC hardware" },
    { label: "Currently", value: "Building Nexus" },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "HTML & CSS",
    "C#",
    "C++",
    "SQL / MySQL",
    "Unity",
    "JUnit",
    "Git & GitHub",
    "Postman",
    "Networking",
    "Microsoft 365",
    "Agile / Scrum",
    "PC building",
  ],
};

// Detailed areas of expertise — shown inside the About me section
export const expertise = [
  {
    title: "PC building & upgrades",
    tag: "Hardware",
    featured: true,
    intro:
      "Planning, building and upgrading desktop computers, with every part matched for compatibility, power and cooling.",
    points: [
      "CPU installation: matching the processor to the motherboard socket and chipset, seating it correctly, applying thermal paste and mounting air or AIO liquid coolers.",
      "GPU installation: fitting graphics cards in PCIe x16 slots, checking case clearance and PSU connectors (8-pin / 12VHPWR), and installing the right drivers.",
      "RAM upgrades: checking DDR4 vs DDR5 support and capacity limits, filling slots for dual-channel, and enabling XMP / EXPO profiles for rated speed.",
      "Storage: installing NVMe M.2 and SATA SSDs and hard drives, cloning drives, partitioning and moving systems onto faster storage.",
      "Power supplies: working out wattage from component power draw, choosing efficient (80 Plus) units, and tidy cable management for airflow.",
      "BIOS / UEFI: setting boot order, updating firmware, enabling virtualisation and Secure Boot, and installing Windows with all drivers.",
    ],
  },
  {
    title: "Diagnostics & repair",
    tag: "Hardware",
    featured: true,
    intro:
      "Finding out why a computer won't boot, crashes or runs slowly, and fixing the actual cause rather than the symptom.",
    points: [
      "Reading POST beep codes and motherboard debug LEDs to narrow down CPU, RAM, GPU or boot faults.",
      "Testing memory with MemTest86 and stress-testing CPUs and GPUs while watching temperatures and clock speeds.",
      "Spotting thermal throttling, failing drives (SMART data), unstable overclocks and power-delivery problems.",
      "Isolating faults by swapping components one at a time, and cleaning dust and re-pasting overheating systems.",
      "Troubleshooting software, hardware and network issues for students and staff at Brunel University.",
    ],
  },
  {
    title: "Software engineering",
    tag: "Software",
    intro:
      "Designing and building reliable programs using object-oriented principles, planning first and testing throughout.",
    points: [
      "Java (OOP, Swing GUIs, file handling), C# and C++.",
      "System design with UML class and sequence diagrams and pseudocode before coding.",
      "Unit testing with JUnit to catch bugs early and keep code dependable.",
      "Game development in Unity with C#, including UI design and iterative play-testing.",
    ],
  },
  {
    title: "Full-stack web development",
    tag: "Software",
    intro:
      "Building complete web applications — the interface people use, the API behind it and the database underneath.",
    points: [
      "Front ends in React.js, JavaScript, HTML and CSS: components, state, routing and responsive layouts.",
      "RESTful APIs in Spring Boot with GET, POST, PUT and DELETE endpoints and meaningful HTTP status codes.",
      "Connecting front end to back end with fetch and Axios, validating input on both sides.",
      "Testing APIs in Postman and working in IntelliJ, Eclipse and VS Code.",
    ],
  },
  {
    title: "Databases & networking",
    tag: "Infrastructure",
    intro:
      "Storing data properly and understanding how machines talk to each other.",
    points: [
      "Designing MySQL schemas with related tables, primary and foreign keys, and writing SQL queries for full CRUD.",
      "Networking fundamentals: IP addressing, subnets, DNS, DHCP, TCP/UDP and routing.",
      "Security basics: authentication, access control, user permissions and GDPR-compliant data handling.",
      "Supporting students with networking and cybersecurity lab work.",
    ],
  },
  {
    title: "Computer science foundations",
    tag: "Theory",
    intro:
      "The theory from my degree that ties the hardware and the software together.",
    points: [
      "Computer architecture: how a CPU fetches, decodes and executes instructions, cores and threads, cache levels and the memory hierarchy.",
      "Operating systems: processes, memory management, file systems and how drivers connect hardware to software.",
      "Data structures and algorithms: arrays, lists, trees, hash maps, searching, sorting and Big-O complexity.",
      "Agile and Scrum: user stories, sprint planning and running a team as Scrum Master and Product Owner.",
    ],
  },
];

// type: "work" or "education" — shown as a small badge
export const experience = [
  {
    period: "Sep 2024 — Now",
    type: "work",
    title: "Customer Service",
    place: "IKEA · Milton Keynes",
    points: [
      "Process sales, exchanges and refunds on the tills with secure, permission-based till access.",
      "Use IKEA's internal systems to find customer orders, update inventory status and fix order discrepancies.",
      "Work with team leads to resolve till problems such as system freezes and barcode errors.",
      "Give fast, friendly help with orders, product availability and returns in a busy store.",
    ],
  },
  {
    period: "Jul 2024 — Aug 2024",
    type: "work",
    title: "IT Assistant & Web Developer (Internship)",
    place: "Brunel University · Uxbridge, London",
    points: [
      "Supported 1st- and 2nd-year Computer Science students with assignments and lab work.",
      "Helped students with networking, cybersecurity, web, app and game development.",
      "Built and maintained responsive, user-friendly websites.",
      "Troubleshot software, hardware and network issues, explaining fixes clearly.",
    ],
  },
  {
    period: "Sep 2021 — Sep 2024",
    type: "education",
    title: "BSc (Hons) Computer Science",
    place: "Brunel University London",
    points: [
      "Studied programming, software engineering, computer architecture, networking, databases and cybersecurity.",
      "Final-year project: Ocean Wave, an educational recycling game built in Unity and C#.",
      "Group projects in full-stack development with React, Spring Boot and MySQL.",
    ],
  },
  {
    period: "May 2022 — Oct 2022",
    type: "work",
    title: "Catering Operative",
    place: "dnata · Stansted Airport",
    points: [
      "Picked and packed food and drink for flights using digital manifests and flight schedules.",
      "Used handheld scanners and tracking systems to record stock and update logs in real time.",
      "Fixed scanning errors and reported faulty or missing stock using data reports.",
    ],
  },
  {
    period: "Jun 2021 — Oct 2021",
    type: "work",
    title: "Call Handler — NHS Test and Trace",
    place: "NHS · Remote",
    points: [
      "Handled high call volumes during the COVID-19 pandemic, keeping information confidential.",
      "Logged case data in Salesforce and NHS portals in line with GDPR.",
      "Helped callers fix account access and verification problems on online forms.",
    ],
  },
  {
    period: "Sep 2019 — Aug 2021",
    type: "education",
    title: "A Levels in IT & Business",
    place: "Luton College · Luton",
    points: ["Diploma in IT and Business, building the base for my Computer Science degree."],
  },
];

export const projects = [
  {
    title: "Coding Learning Platform",
    type: "Full-stack web app",
    description:
      "A full-stack platform for learning to code, with guided React tutorials, exercises and progress tracking for every user.",
    highlights: [
      "Interactive React front end with tutorials, component examples, state exercises and routing.",
      "RESTful Spring Boot API for lessons, progress and code snippets (GET / POST / PUT / DELETE).",
      "MySQL schema for users, lessons, exercises and progress; APIs tested in Postman.",
      "Agile workflow with user stories, sprints, and Git branching and pull requests.",
    ],
    tags: ["React", "Spring Boot", "MySQL", "Axios", "REST API"],
    code: "https://www.youtube.com/watch?v=Vj6slMW7h1E&t=555s",
    live: "",
    featured: true,
  },
  {
    title: "Ocean Wave",
    type: "Educational game",
    description:
      "My final-year project: a Unity game that teaches players about waste disposal and recycling.",
    highlights: [
      "Built in Unity with C#, with game UIs designed for young players.",
      "Planned with UML diagrams and managed with a personal Scrum process.",
      "Improved through user testing, with positive feedback on its educational impact.",
      "MYSQL database to store users information and game scores",
      "PHP was used to act as a inbetweener for the database and frontend of the game."
    ],
    tags: ["C#", "Unity", "UML", "Scrum","PHP"],
    code: "https://youtu.be/DOpSGxHxTyU",
    live: "",
  },
    {
    title: "Calculator",
    type: "App Development",
    description:
      "Using Eclipse IDE to make a calculator using JAVA",
    highlights: [
      "Learnt Java and its syntax",
      "The calculator has no errors and works",
      "I used eclipse's built in UI to give the Calculator interface instead of it being static code",
    ],
    tags: ["Eclipse", "Java", "Java Swing",],
    code: "https://www.youtube.com/watch?v=s2shXUwF5NI",
    live: "",
  },
  {
    title: "Flight Seat Booking",
    type: "Java desktop app",
    description:
      "A Java GUI application where users choose a seat on a plane and book their ticket.",
    highlights: [
      "Designed with UML diagrams and pseudocode before coding.",
      "Text-file storage that prevents the same seat being booked twice.",
      "Tested with JUnit for reliable, error-free bookings.",
    ],
    tags: ["Java", "Swing GUI", "JUnit","Read and Write from Excel"],
    code: "#",
    live: "",
  },
    {
    title: "Feeding London",
    type: "Full-stack web app",
    description:
      "A web app tackling the UN goal of Zero Hunger by letting businesses post discounted food before it goes to waste.",
    highlights: [
      "Scrum Master and Product Owner: led sprint planning and kept the team on schedule.",
      "Built React features for food adverts and user profiles.",
      "Connected the React front end to a Spring Boot and MySQL back end.",
    ],
    tags: ["React", "Java", "Spring Boot", "MySQL", "Git"],
    code: "",
    live: "",
  },

];
