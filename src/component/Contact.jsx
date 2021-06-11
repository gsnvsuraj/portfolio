import { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {

    render () {
        return (
            <>
                <div className="contactPageBody">
					
                    <div className="contactBody">

						<div className="contactLeft">

							<div className="formHeading">
								<h1>
									Contact Me
								</h1>
							</div>

							<form className="form-inline">

								<div className="form-group form-elements">
									<label className="sr-only" htmlFor="inputName">Name</label>
									<input type="text" className="form-control" id="inputName" placeholder="Name" required />
								</div>

								<div className="form-group form-elements">
									<label className="sr-only" htmlFor="inputEmail">Email Address</label>
									<input type="email" className="form-control" id="inputEmail" placeholder="Email" required />
								</div>

								<div className="form-group form-elements">
									<label className="sr-only" htmlFor="inputMessage">Message</label>
									<textarea className="form-control" rows="4" id="inputMessage" placeholder="Leave a Message" required></textarea>
								</div>

								<button type="submit" className="btn btn-primary" id="sendBtn">Send</button>

							</form>

						</div>

						<div className="contactCenter">
							<div className="separateLineBefore"></div>

							<div className="separaterText">
								or
							</div>

							<div className="separateLineAfter"></div>
						</div>

						<div className="contactRight">

							<div className="socialHeading">
								<h2>
									Connect with Me
								</h2>

								<div>
									<p>Social Links -</p>
									<ul>
										<li>Facebook</li>
										<li>GitHub</li>
										<li>LinkedIn</li>
										<li>Twitter</li>
										<li>Stack Overflow</li>
									</ul>
								</div>

							</div>
							
						</div>

                    </div>

                </div>
            </>
        )
    }

}

export default Contact;