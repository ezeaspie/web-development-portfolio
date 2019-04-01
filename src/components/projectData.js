import React from 'react';
import NextBus0 from '../images/projects/NextBusExpress.jpg';
import NextBus1 from '../images/projects/NextBusExpressMobile.jpg';
import PirateSeas0 from '../images/projects/PirateSeas.jpg';
import PirateSeas1 from '../images/projects/PirateSeasBattle.jpg';
import Website0 from '../images/projects/WebsiteCapture.jpg';
import Website1 from '../images/projects/WebsiteMobile.jpg';
import Spotify0 from '../images/projects/SpotifyDesktop.png';
import Spotify1 from '../images/projects/SpotifyMobile.png';
import EED from '../images/projects/ezequielespinozadev1.png';
import EED1 from '../images/projects/ezequielespinozadev2.png';

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
            <p>I have built a personal website that boasts a gallery, blog, and comic reader.</p>
            <p>The site is built using the static-site generator <span>Gatsby</span>. Gatsby was chosen because it makes image optimization and Search Engine Optimization easy. The intergation with GraphQL also made it an appealing choice, as it was possible to build a blog without the need for a database or extensive backend.</p>
            <p>The site's gallery makes use of GraphQL queries and Gatsby's image optimization to lazy-load the images and scale them depending on screen size, making it fast despite loading multiple images.</p>
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
            <p>I'm the creator of <span className="accent">Next Bus Express</span>, a simple but effective web app that allows a user to look up bus stops and routes in the MetroBus system.</p>
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
            <p>Wanting to convert a few playlists I had on my Spotify account to my Youtube account without having to manually search for every video in the playlist inspired me to create this app.</p>
            <p>Using both the Spotify and Youtube APIs, this app allows a user to sign in and select one of their Spotify playlists and export it to their Youtube account with just a few clicks.</p>
            <p>Songs from the Spotify playlist are searched, then the videos returned from the Youtube API are added to a new playlist that will be shown on the user's Youtube account!</p>
        </div>,
        ["React","Node.js","OAuth","APIs","AJAX","Express","Heroku","Javascript","Responsive Design","CSS","HTML",],
        [Spotify0,Spotify1],
        "#303f9f",
        [
            "https://github.com/ezeaspie/gatsby-art-site",
            "https://github.com/ezeaspie/gatsby-art-site",
        ]
    ),
    projectFactory(
        "ezequielespinoza.dev",
        <div className="project-description">
            <p>This portfolio site was built using React. A majority of the CSS and Animations are hand-coded.</p>
            <p>Fully responsive, the site looks and feels great on all devices and across browsers.</p>
            <p>Form submission is handled with Gatsby and Netlify services.</p>
        </div>,
        ["React","Gatsby", "SASS", "CSS + Animation","SEO","Performance","Responsive Design","Javascript","HTML"],
        [EED,EED1],
        "#2D932D",
        [
            "https://github.com/ezeaspie/gatsby-art-site",
            "https://github.com/ezeaspie/gatsby-art-site",
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
            "https://github.com/ezeaspie/gatsby-art-site",
            "https://github.com/ezeaspie/gatsby-art-site",
        ]
        
    ),    
]

export default projects;