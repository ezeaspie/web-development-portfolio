import React, {Component} from 'react';

class ProjectButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTooltip:false,
        }
    }

    render(){
        let project = this.props.project;
        let image = this.props.image;
        let tooltip = this.props.tooltip;
        return(
            <div
            >
                <button 
                onMouseOver={()=>{this.setState({showTooltip:true})}}
                onMouseOut={()=>{this.setState({showTooltip:false})}}
                style={{background: project.color}}>
                <a href={this.props.link}><img alt="GitHub" src={image}/></a>
                </button>
                <p className={this.state.showTooltip?"tooltip tooltip-shown":"tooltip"}>{tooltip}</p>
            </div>
        )
    }
}


export default ProjectButton;