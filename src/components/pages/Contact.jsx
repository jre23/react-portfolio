import React from "react";
import API from "../../utils/API";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <main className="container my-5 pt-4">
        {/* <!-- row and column for h1 title and form --> */}
        <div className="row">
          <section className="col-12 col-sm-6 text-white pt-4 pl-4 pr-4 contact-border-background">
            <h1 className="contact-header">Contact Info</h1>
            <hr />
            <div className="contact-info">
              <h5>Joel Estrada</h5> Seattle, WA<br /> Email: <a href=" mailto:jre.estrada@gmail.com?subject=Joel's Portfolio Contact
                    Email">jre.estrada@gmail.com</a><br />
                  Phone: (253) 249-3170<br />
            </div>
            <div id="mood-giphy" className="giphy-size">
            </div>
            <br />
          </section >
          <section className="col-12 col-sm-6 pt-4 pl-4 pr-4 submit-background">
            <header>
              <h1>General Inquiries</h1>
            </header>
            <hr />
            <form>
              <div className="pl-3 col-12 col-md-10">
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className="form-control" id="inputName" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputMessage">Message</label>
                  <textarea className="form-control" id="inputMessage" rows="3" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="pb-4">
                <button type="submit" className="btn btn-sm py-2 px-2 submit-btn" data-target="Thanks">Submit
                    </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}

export default Contact;