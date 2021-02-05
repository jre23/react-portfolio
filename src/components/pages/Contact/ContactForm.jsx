import React from "react";

const styles = {
  submitBtn: {
    backgroundColor: "#5680e9",
    borderRadius: "50%"
  }
}

const ContactForm = props => {
  return (
    <>
      <section className="col-12 col-sm-6 pt-4 pl-4 pr-4 submit-background">
        <header>
          <h1>General Inquiries</h1>
        </header>
        <hr />
        <form onSubmit={props.handleSubmit} data-target="Thanks" action="https://formspree.io/f/xrgodlyl" method="POST">
          <div className="pl-3 col-12 col-md-10">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" placeholder="Name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" placeholder="Email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea className="form-control" rows="3" placeholder="Message" name="message" required></textarea>
            </div>
          </div>
          <div className="pb-4">
            <button type="submit" className="btn btn-sm py-2 px-2 submit-btn" style={styles.submitBtn}>Submit
                </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ContactForm;