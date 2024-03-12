import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div class="row justify-content-center">
        <div class="col-lg-9 mx-auto">
          <div class="custom-card mt-2 mx-auto p-4 bg-light">
            <div class="card-body bg-light">
              <div class="container center-content">
                <form id="contact-form" role="form">
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_name">Prénom *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Please enter your firstname *"
                            required="required"
                            data-error="Firstname is required."
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_lastname">Nom *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            class="form-control"
                            placeholder="Please enter your lastname *"
                            required="required"
                            data-error="Lastname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_lastname">Entreprise *</label>
                          <input
                            id="form_entreprise"
                            type="text"
                            name="entreprise"
                            class="form-control"
                            placeholder="Please enter your entreprise *"
                            required="required"
                            data-error="L'entreprise is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <input
                          type="submit"
                          class="btn btn-success btn-send  pt-2 btn-block
                            "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
