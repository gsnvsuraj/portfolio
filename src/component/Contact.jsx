import React from 'react';
import Title from './Title';
import '../styles/Contact.css';


const Contact = () => {

	return (
		<>
			<div className="contactPageBody">
				
				<div className="contactBody">

					<div className="contactLeft">
						<img src="https://unsplash.it/300/500" alt="project" />
					</div>


					<div className="contactRight">

						<Title title="Contact Me" />

						<form className="form-inline">

							<div className="form-group form-elements">
								<label className="formName" htmlFor="inputName">Name</label>
								<input type="text" className="form-control" id="inputName" placeholder="Name" required />
							</div>

							<div className="form-group form-elements">
								<label className="formName" htmlFor="inputEmail">Email Address</label>
								<input type="email" className="form-control" id="inputEmail" placeholder="Email" required />
							</div>

							<div className="form-group form-elements">
								<label className="formName" htmlFor="inputMessage">Message</label>
								<textarea className="form-control" rows="4" id="inputMessage" placeholder="Leave a Message" required></textarea>
							</div>

							<button type="submit" className="sendBtn">Send</button>

						</form>

					</div>
						

				</div>

			</div>
		</>
	);

}

export default Contact;