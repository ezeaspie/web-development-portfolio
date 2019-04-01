import CSS from '../images/css.png';
import Express from '../images/express.png';
import Gatsby from '../images/gatsby.png';
import Git from '../images/git.png';
import Heroku from '../images/heroku.png';
import HTML from '../images/HTML.png';
import JavaScript from '../images/javascript.png';
import jQuery from '../images/jquery.gif';
import Netlify from '../images/netlify.png';
import Node from '../images/node.png';
import React from '../images/react.png';
import Webpack from '../images/webpack.png';
import Sass from '../images/sass.png';
import BootStrap from '../images/bootstrap.png';
import Photoshop from '../images/photoshop.jpg';

const techFactory = (name,image) =>{
    return {
        name,
        image,
    }
}

let techList = [
    techFactory("HTML",HTML),
    techFactory("CSS",CSS),
    techFactory("JavaScript",JavaScript),
    techFactory("Gatsby",Gatsby),
    techFactory("React",React),
    techFactory("Express",Express),
    techFactory("Sass",Sass),
    techFactory("jQuery",jQuery),
    techFactory("Node.js",Node),
    techFactory("Webpack",Webpack),
    techFactory("Heroku",Heroku),
    techFactory("Git",Git),
    techFactory("Netlify",Netlify),
    techFactory('Bootstrap',BootStrap),
    techFactory('Photoshop',Photoshop),
];

export default techList;