import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import tailwindIcon from '../assets/tailwind.svg';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/node.svg';
import expressIcon from '../assets/express.svg';
import mongodbIcon from '../assets/mongodbIcon.svg';
import sqlserverIcon from '../assets/sqlserver.svg';
import cineverse1 from '../assets/cineverse1.jpg'
import cineverse2 from '../assets/cineverse2.jpg'
import cineverse3 from '../assets/cineverse3.jpg'
import cineverse4 from '../assets/cineverse4.png'
import cineverse5 from '../assets/cineverse5.png'
import booknrent1 from '../assets/booknrent1.jpg'
import booknrent2 from '../assets/booknrent2.png'
import booknrent3 from '../assets/booknrent3.png'
import hubspace1 from '../assets/hubspace1.jpeg'
import hubspace2 from '../assets/hubspace2.jpeg'
import hubspace3 from '../assets/hubspace3.jpeg'
import hubspace4 from '../assets/hubspace4.jpeg'
import hubspace5 from '../assets/hubspace5.jpeg'
import hubspace6 from '../assets/hubspace6.jpeg'

export const myprojects = [
    {
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
        githublink: "",
        sitelink: ""
    },
    {
        title: "CineVerse",
        description: `CinemaVerse is a full-stack theater management web application designed to provide users with a seamless and interactive movie-booking experience. Built using React on the frontend, Node.js and Express on the backend, and SQL Server for robust database management, the platform is optimized for performance, usability, and scalability.

        Seat and Show Selection: Users can view available shows and select seats in real-time via an intuitive interface.

        User Authentication: Secure login, signup using jwt/bcrypt.

        Movie Search: Easily search for movies by title.

        Top Rated Movies: Browse a dynamically generated list of the highest-rated movies.

        Reviews & Ratings: Authenticated users can leave reviews and rate movies, helping others choose what to watch.

        Newsletter Subscription: Users can subscribe to the newsletter and receive email updates about upcoming movies, promotions, and offers.

        Responsive UI: Mobile-friendly and optimized for various screen sizes for the best viewing experience.`,
        techstack: [reactIcon, nodeIcon, expressIcon, sqlserverIcon],
        images: [cineverse1, cineverse2, cineverse3, cineverse4, cineverse5],
        githublink: "",
        sitelink: ""
    },
    {
        title: "BookNRent",
        description: `This is a front-end clone of the BooknRent website, built entirely using HTML and CSS to replicate the visual structure and layout of the original platform. The project focuses on responsive design, clean layout, and structured content presentation — including landing pages, navigation, service sections, and contact forms.
        
        Clean and modern UI replicating BooknRent's core pages

        Responsive layout for mobile and desktop screens

        Custom CSS for layout, spacing, and basic hover effects

        Semantic HTML for accessibility and SEO-friendly structure`,
        techstack: [htmlIcon, cssIcon],
        images: [booknrent1, booknrent2, booknrent3],
        githublink: "",
        sitelink: ""
    }
];
