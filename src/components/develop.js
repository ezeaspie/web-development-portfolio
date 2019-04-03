import React from 'react';
import Design from '../images/design.png';
import DevelopImage from '../images/develop.png';
import Deploy from '../images/deploy.png';

const Develop = () => (
    <div className="develop-section">
        <div className="develop-card content-container-default">
            <img src={Design} alt="whiteboard"></img>
            <h3>Design</h3>
            <p>Start with a plan.</p><p>Let's talk about UI/UX, the layout and colors of your project, and how we can bring it to life in order to speed up and organize the process.</p>
        </div>
        <div className="develop-card content-container-default">
            <img src={DevelopImage} alt="develop-computer"></img>
            <h3>Develop</h3>
            <p>Modern tools for a modern site.</p><p>Let's choose the right technologies for the job and get to work. I take into account responsiveness - so your site looks great on any device, accessiblity - to ensure you reach the most people, and performance - to make your site load fast.</p>
        </div>
        <div className="develop-card content-container-default">
            <img src={Deploy} alt="deploy-computer"></img>
            <h3>Deploy</h3>
            <p>Get it on the Web.</p><p>When development is finished, I can help with hosting, registering domains, and Search Engine Optimization in order to get your site ready for anyone to see.</p>
        </div>
    </div>
)

export default Develop;