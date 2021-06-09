import { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {

    render () {
        return (
            <>
                <div className="contactBody">
					
                    <div className="formBody">

						<div className="formLeft">
							<img src="https://placebeard.it/600x400" alt="placeholder image" />
						</div>

						<div className="formRight">

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

                    </div>

                </div>
            </>
        )
    }

}

export default Contact;