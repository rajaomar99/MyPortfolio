import tailwindIcon from "../assets/tailwind.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodbIcon.svg";
import sqlserverIcon from "../assets/sqlserver.svg";
import nextjsIcon from "../assets/nextjs.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import typescriptIcon from "../assets/typescript.svg";
import socketioIcon from "../assets/socketioIcon.svg";
import prismaIcon from "../assets/prismaIcon.svg";
import cineverse1 from "../assets/cineverse1.jpg";
import cineverse2 from "../assets/cineverse2.jpg";
import cineverse3 from "../assets/cineverse3.jpg";
import cineverse4 from "../assets/cineverse4.png";
import cineverse5 from "../assets/cineverse5.png";
import hubspace1 from "../assets/hubspace1.jpeg";
import hubspace2 from "../assets/hubspace2.jpeg";
import hubspace3 from "../assets/hubspace3.jpeg";
import hubspace4 from "../assets/hubspace4.jpeg";
import hubspace5 from "../assets/hubspace5.jpeg";
import hubspace6 from "../assets/hubspace6.jpeg";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import konvo1 from "../assets/konvo1.png";
import konvo2 from "../assets/konvo2.png";
import konvo3 from "../assets/konvo3.png";
import konvo4 from "../assets/konvo4.png";

export const myprojects = [
  {
    index: 0,
    title: "HubSpace By TT",
    description: `HubSpace by TT is a modern coworking space management web application designed to offer professionals a streamlined and interactive workspace-booking experience. Built with a clean, responsive UI and a robust backend architecture, the platform emphasizes convenience, flexibility, and user engagement—making it easy for individuals and teams to access coworking services anytime.

        Plan Exploration: Users can browse through a variety of coworking plans, each with detailed description and features.

        Room Booking: Seamlessly book meeting rooms or gaming rooms through an intuitive scheduling interface that shows real-time availability.

        Contact Form: A built-in contact portal allows users to quickly reach out with inquiries, partnership requests, or support needs.

        User-Friendly Dashboard: A modern central dashboard summarizing plan details, benefits and faq's for quick access.

        Workspace Highlights: Explore amenities, workspace photos, and environment details to get a clear sense of the coworking experience.

        Secure Handling: Safe submission of booking and contact details with validated forms and backend protection.

        Admin Panel: An admin panel where authorized people can view bookings by date and delete bookings.

        Responsive UI: Fully optimized for mobile, tablet, and desktop to ensure a smooth user experience across devices.`,
    techstack: [reactIcon, nodeIcon, expressIcon, mongodbIcon, tailwindIcon],
    images: [hubspace1, hubspace2, hubspace3, hubspace4, hubspace5, hubspace6],
    githublink: "https://github.com/rajaomar99/HubSpaceByTT",
    sitelink: "https://www.hubspacebytt.com",
  },
  {
    index: 1,
    title: "Circle",
    description: `Circle is a full-stack social media web application designed to provide users with a seamless and engaging community experience. Built using Next.js 14 with React on the frontend, Prisma ORM and PostgreSQL for robust database management, and Clerk for authentication, the platform is optimized for performance, real-time interactivity, and scalability.
        
        Posts & Image Sharing: Users can create text and image-based posts with support for media uploads powered by UploadThing.

        Likes & Comments: Authenticated users can like and comment on posts, fostering community engagement and discussion.

        Follow System: Users can follow and unfollow others, building a personalized feed tailored to their social circle.

        User Profiles: Each user has a dedicated profile page showcasing their posts, bio, location, website, and follower/following stats.

        Real-Time Notifications: Users receive instant notifications for likes, comments, and new followers, keeping them always in the loop.

        Who to Follow: A smart sidebar suggests relevant users to follow, helping users grow their network.

        User Authentication: Secure sign-in and sign-up powered by Clerk, with protected routes enforced via middleware.

        Responsive UI: Mobile-friendly design with a dedicated mobile navbar and adaptive layouts optimized for all screen sizes.
        `,
    techstack: [nextjsIcon, typescriptIcon, postgresqlIcon, prismaIcon, tailwindIcon],
    images: [circle1, circle2, circle3],
    githublink: "https://github.com/rajaomar99/Circle",
    sitelink: "",
  },
  {
    index: 2,
    title: "CineVerse",
    description: `CineVerse is a full-stack theater management web application designed to provide users with a seamless and interactive movie-booking experience. Built using React on the frontend, Node.js and Express on the backend, and SQL Server for robust database management, the platform is optimized for performance, usability, and scalability.

        Seat and Show Selection: Users can view available shows and select seats in real-time via an intuitive interface.

        User Authentication: Secure login, signup using jwt/bcrypt.

        Movie Search: Easily search for movies by title.

        Top Rated Movies: Browse a dynamically generated list of the highest-rated movies.

        Reviews & Ratings: Authenticated users can leave reviews and rate movies, helping others choose what to watch.

        Newsletter Subscription: Users can subscribe to the newsletter and receive email updates about upcoming movies, promotions, and offers.

        Responsive UI: Mobile-friendly and optimized for various screen sizes for the best viewing experience.`,
    techstack: [reactIcon, nodeIcon, expressIcon, sqlserverIcon],
    images: [cineverse1, cineverse2, cineverse3, cineverse4, cineverse5],
    githublink: "https://github.com/rajaomar99/CineVerse",
    sitelink: "",
  },
  {
    index: 3,
    title: "Konvo",
    description: `Konvo is a full-stack real-time chat web application designed to provide users with a seamless and interactive messaging experience. Built using React on the frontend, Node.js and Express on the backend, and MongoDB for robust database management, the platform is optimized for performance, usability, and scalability.

        Real-Time Communication: Users can send and receive instant messages in real-time via an intuitive interface.

        User Authentication: Secure login, signup using jwt/bcrypt.

        Image Sharing: Easily upload and share images in conversations.

        Online Status: View a dynamically updated indicator of active and offline users.

        Modern Interface: Authenticated users can enjoy a clean, light-themed UI, making conversations visually engaging.

        State Management: Application state is managed efficiently using Zustand, ensuring an optimal and bug-free messaging experience.

        Responsive UI: Mobile-friendly and optimized for various screen sizes for the best viewing experience.`,
    techstack: [reactIcon, nodeIcon, expressIcon, mongodbIcon, tailwindIcon, socketioIcon],
    images: [konvo1, konvo2, konvo3, konvo4],
    githublink: "https://github.com/rajaomar99/Konvo",
    sitelink: "",
  },
];
