import React from "react";

const ContactForm = (props) => {
  return (
    <>
      <section className="col-12 col-sm-6 pt-4 pl-4 pr-4 submit-background text-center">
        <header>
          <h1>General Inquiries</h1>
        </header>
        <hr />
        <form
          onSubmit={props.handleSubmit}
          data-target="Thanks"
          action="https://formspree.io/f/xrgodlyl"
          method="POST"
        >
          <div className="m-auto col-11">
            <div className="form-group">
              <label htmlFor="inputName"></label>
              <input
                type="text"
                className="form-control text-center"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail"></label>
              <input
                type="email"
                className="form-control text-center"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage"></label>
              <textarea
                className="form-control text-center"
                rows="3"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <div className="pb-4">
            <button type="submit" className="btn btn-dark btn-sm py-2 px-2">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
