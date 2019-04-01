import React , {Component} from 'react';
import techList from '../components/techData';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

class Tech extends Component {
    render(){
        return(
            <div className="tech-category">
                <div className="content-container-default">
                <Zoom>
                <h2>Technology</h2>
                <p>Tools and technologies that I am comfortable using:</p>
                <ul className="tech-list">
                    {
                        techList.map((technology)=>{
                            return(
                                <li className="tech">
                                    <img alt={technology.name} src={technology.image}/>
                                    <p><b>{technology.name}</b></p>
                                </li>
                            )
                        })
                    }
                </ul>
                </Zoom>
                </div>
            </div>
        )
    }
}

export default Tech;