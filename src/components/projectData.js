import React from 'react';
import NextBus0 from '../images/projects/NextBusExpress.jpg';
import NextBus1 from '../images/projects/NextBusExpressMobile.jpg';
import PirateSeas0 from '../images/projects/PirateSeas.jpg';
import PirateSeas1 from '../images/projects/PirateSeasBattle.jpg';
import Website0 from '../images/projects/WebsiteCapture.jpg';
import Website1 from '../images/projects/WebsiteMobile.jpg';
import Spotify0 from '../images/projects/SpotifyDesktop.jpg';
import Spotify1 from '../images/projects/SpotifyMobile.jpg';
import EED from '../images/projects/ezequielespinozadev1.jpg';
import EED1 from '../images/projects/ezequielespinozadev2.jpg';

const projectFactory = (name,description,skills,images,color,links) => {
    return{
        name,
        description,
        skills,
        images,
        color,
        links,
    }
}

let projects = [
    projectFactory(
        "ezequielespinoza.com",
        <div className="project-description">
            <p>A <span className="accent">personal website</span> that boasts a <span className="accent">gallery</span>, <span className="accent">blog</span>, and <span className="accent">comic reader</span>.</p>
            <p>The site is built using the static-site generator <span>Gatsby</span> because it makes <span className="accent">image optimization</span> and <span className="accent">Search Engine Optimization</span> easy. The intergation with <span className="accent">GraphQL</span> also made it an appealing choice, as it was possible to build a blog without the need for a database or extensive backend.</p>
            <p>The site's gallery makes use of GraphQL queries and Gatsby's image optimization to <span className="accent">lazy-load</span> the images and scale them depending on screen size, making it <span className="accent">fast</span> despite loading multiple images.</p>
            <p>The blog takes Markdown documents and using Gatsby plugins is able to dynamically create blog post pages for each file.</p>
            <p>The comic reader allows visitors to read my comics. The site creates pages for each chapter and is easy to navigate from page to page or chapter to chapter.</p>
        </div>,
        ["React","Gatsby","GraphQL","SEO","HTML","Performance","Responsive Design","CSS","Netlify"],
        [Website0,Website1],
        "#ecb309",
        [
            "https://github.com/ezeaspie/gatsby-art-site",
            "https://www.ezequielespinoza.com/",
        ]
    ),
    projectFactory(
        "Next Bus Express",
        <div className="project-description">
            <p><span className="accent">Next Bus Express</span> is a simple but effective web app that allows a user to look up bus stops and routes in the MetroBus system.</p>
            <p>Next Bus Express can perform searches of <span className="accent">street intersections, bus stop ID's, and route names</span>. The <span className="accent">Node.js</span> based <span className="accent">Express</span> backend then connects to the <span className="accent">Metro API</span> and handles <span className="accent">routing</span> to return relevant and easy to read results.</p>
            <p>Next Bus Express also makes use of <span className="accent">localForage</span> to remember stops the user has saved and show the schedule when the app is opened.</p>
        </div>,
        ["Node.js","Express","EJS","APIs","Javascript","CSS","Heroku","LocalForage","Geolocation","Responsive Design","HTML"],
        [NextBus0,NextBus1],
        "#673ab7",
        [
            "https://github.com/ezeaspie/metro-bus-app",
            "http://next-bus-express.herokuapp.com/",
        ]
    ),
    projectFactory(
        "Youtube-Spotify Playlists",
        <div className="project-description">
            <p>Using both the <span className="accent">Spotify and Youtube APIs</span>, this app allows a user to sign in and select one of their Spotify playlists and <span className="accent">export it to their Youtube account</span> with just a few clicks.</p>
            <p>Songs from the Spotify playlist are searched, then the videos returned from the Youtube API are <span className="accent">added to a new playlist</span> that will be shown on the user's Youtube account!</p>
        </div>,
        ["React","Node.js","OAuth","APIs","AJAX","Express","Heroku","Javascript","Responsive Design","CSS","HTML",],
        [Spotify0,Spotify1],
        "#303f9f",
        [
            "https://github.com/ezeaspie/youtube-spotify-backend",
            "https://youtube-spotify-frontend.herokuapp.com/",
        ]
    ),
    projectFactory(
        "ezequielespinoza.dev",
        <div className="project-description">
            <p>This portfolio site was built using <span className="accent">React</span>. A majority of the <span className="accent">CSS and Animations</span> are hand-coded.</p>
            <p>Fully <span className="accent">responsive</span>, the site looks and feels great on all devices and <span className="accent">across browsers</span>.</p>
            <p>Form submission is handled with <span className="accent">Gatsby</span> and <span className="accent">Netlify</span> services.</p>
        </div>,
        ["React","Gatsby", "SASS", "CSS + Animation","SEO","Performance","Responsive Design","Javascript","HTML"],
        [EED,EED1],
        "#2D932D",
        [
            "https://github.com/ezeaspie/web-development-portfolio",
            "https://ezequielespinoza.dev/",
        ]
        
    ),
    projectFactory(
        "Pirate Seas",
        <div className="project-description">
            <p>I have developed a small game called <span className="accent">Pirate Seas</span> in where players command a fleet of upgradable ships against pirates and fleets poised to steal their valuable cargo.</p>
            <p><span className="accent">React</span> allows for rendering of menus, shops, and even combat sequences! The game is capable of generating random opponents and unique ships to add to your fleet. It also varies the prices of goods on every visit - so know when to buy and sell!</p>
            <p>The game allows a player to save and pick up where they left off using <span className="accent">LocalStorage</span></p>
        </div>,
        ["React","CSS + Animation","Game Design","Javascript","HTML"],
        [PirateSeas0,PirateSeas1],
        "#00bcd4",
        [
            "https://github.com/ezeaspie/pirate-ship-game",
            "https://pirate-seas.netlify.com/",
        ]
        
    ),    
]

export default projects;