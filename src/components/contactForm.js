import React,{Component} from 'react';
import { navigateTo } from "gatsby-link";
import LinkedIn from '../images/linkedin.png';
import CodePen from '../images/codepen.png';
import WebLogo from '../images/website-logo.png';
import GitHub from '../images/github-circle.png';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFormComplete:false,
            name:"",
            email:"",
            message:"",
            showError:false,
        };
      }
    
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        if(this.state.name !== "" && this.state.email!== "" && this.state.message!== ""){
            const form = e.target;
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
              })
            })
              .then(() => navigateTo(form.getAttribute("action")))
              .catch(error => alert(error));
        }
        else{
            this.setState({showError:true});
        }
        
    };

    render(){
        return(
            <div id="contact" className="contact-section">
                <div className=" content-container-default">
                <h2>Contact me</h2>
                <div className="contact-links">
                    <a href="https://github.com/ezeaspie" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="LinkedIn"></img></a>
                    <a href="https://www.linkedin.com/in/ezequiel-espinoza-3834a6182/" rel="noopener noreferrer" target="_blank"><img src={LinkedIn} alt="LinkedIn"></img></a>
                    <a href="https://codepen.io/EzeAsPie/#" target="_blank" rel="noopener noreferrer"><img src={CodePen} alt="codepen"></img></a>
                    <a href="https://www.ezequielespinoza.com/" target="blank" rel="noopener noreferrer"><img src={WebLogo} alt="personal-website"></img></a>
                </div>
                <p>Need help with your site or project? Send me a message and let's get in touch.</p>
                <form
                    className="contact-form"
                    name="contact"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your name:<br />
                        <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your email:<br />
                        <input type="email" name="email" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Message:<br />
                        <textarea name="message" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                        {
                            this.state.showError?
                            <p className="error">Please fill out all fields.</p>
                            : null
                        }
                    </p>
                    </form>
                </div>
            </div>
        )
    }
} 

export default ContactForm;