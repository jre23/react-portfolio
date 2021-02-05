import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import API from "../../../utils/API";
import "../../../styles/Contact.css";

const Contact = () => {
  const [gifState, setGifState] = useState({
    gif: "english bulldog",
    image: ""
  })

  useEffect(() => {
    const giphyAPI = () => {
      API.search(gifState.gif).then(res => {
        // use Math.random() to choose a random gif
        let randomIndex = Math.floor(Math.random() * 23);
        let imageURL = res.data.data[randomIndex].images.fixed_height.url;
        setGifState({ gif: gifState.gif, image: imageURL })
      }).catch((e) => {
        console.log(e)
      });
    };

    giphyAPI();
  }, [gifState.gif]);

  const handleSubmit = event => {
    event.preventDefault();
    let dataValue = event.target.getAttribute("data-target");
    setGifState({ ...gifState, gif: dataValue });
    // used formspree to handle form submissions. reference: https://formspree.io/forms/xrgodlyl/integration
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Thanks for your inquiry!");
      } else {
        alert("Oops! There was an error.");
      }
    };
    xhr.send(data);
  }

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
            <div><img className="img-fluid" alt="english bulldog or thank you gif" src={gifState.image}></img>
            </div>
            <br />
          </section >
          <ContactForm handleSubmit={handleSubmit} />
        </div>
      </main>
    </>
  )
}

export default Contact;