import React, { useState } from "react";
import { faker } from "@faker-js/faker";

export default function Content() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const generate_details = () => {
    setName(faker.name.fullName());
    setCountry(faker.address.country());
    setCity(faker.address.city());
    setZipCode(faker.address.zipCode());
    setEmail(faker.internet.email());
    setPhone(faker.phone.number());
  };

  const clearAll = () => {
    setName("");
    setCountry("");
    setCity("");
    setZipCode("");
    setEmail("");
    setPhone("");
  };
  const handleChange = () => { };
  return (
    <>
      <div
        className="header1 cid-s48MCQYojq mbr-fullscreen mbr-parallax-background"
        id="header1-f"
        style={{
          color: "darkblue",
          marginTop: -40
        }}
      >
        <div
          className="mbr-overlay"
          style={{
            opacity: 0.8,
            backgroundColor: "white"
          }}
        ></div>

        <div className="align-center container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>Generate Temp-Details</strong>
              </h1>
              <p className="mbr-text mbr-fonts-style display-7">
                Here You Can Easily &nbsp;
                <strong>
                  <em>Generate Temp-Details</em>
                </strong>
                Which Will Be Use Anywhere as<em> You want to use</em>.
              </p>
            </div>
            <div className="row justify-content-center">

              <div className="col-12 col-lg-9  display-class  border-solid" id="hideTable" >


                <hr />
                <label htmlFor="fname" className="mx-2">Full Name &nbsp;<input className="objectFit " type="text" name="" id="fname" value={name} onChange={handleChange} /></label>
                <label htmlFor="country" className="mx-2">Country &nbsp;<input className="objectFit " type="text" name="" id="country" value={country} onChange={handleChange} /></label>
                <label htmlFor="city" className="mx-2">City &nbsp;<input className="objectFit " type="text" name="" id="city" value={city} onChange={handleChange} /></label>
                <hr />
                <label htmlFor="zipCode" className="mx-2">ZipCode &nbsp;<input className="objectFit " type="text" name="" id="zipCode" value={zipCode} onChange={handleChange} /></label>
                <label htmlFor="email" className="mx-2">Email &nbsp;<input className="objectFit " type="text" name="" id="email" value={email} onChange={handleChange} /></label>
                <label htmlFor="phone" className="mx-2">Phone &nbsp;<input className="objectFit " type="text" name="" id="phone" value={phone} onChange={handleChange} /></label>
                <hr />

              </div>

            </div>

            <div className="align-center container">
              <div className="mbr-section-btn mt-3">
                <button
                  className="btn btn-success display-4"
                  id="generateDetailsBtn"
                  onClick={generate_details}
                >
                  Generate
                </button>
                <button
                  className="btn btn-danger display-4 display-class"
                  id="clearBtn"
                  onClick={clearAll}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content1 cid-s48udlf8KU" id="content1-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-md-9">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Time is money</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                Temporary details website is a website that provides temporary information, usually for a short period of time. It can be used for various purposes such as event announcements, product launches, sales promotions, and more. The information on a temporary details website is usually updated frequently, and the website itself may be taken down after the event or promotion is over. The focus of a temporary details website is to provide quick and easy access to relevant information for a specific purpose.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="image3 cid-s48upRUlSD" id="image3-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className="image-wrapper">
                <a href="https:www.mei.edu/sites/default/files/styles/featured_image_article/public/2021-01/Sigheh%20Certificate.jpg?itok=hvYpSbY9">
                  <img
                    src="assets/images/mbr-1646x1097.jpg"
                    alt="WebsiteBuild"
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content1 cid-s48vrXhP0J" id="content1-d">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-md-9">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Our Goal</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                The goal of a temporary details website is to provide essential information to its visitors in a timely and efficient manner. The purpose of a temporary details website can vary, but some common goals include:

                Event announcements: A temporary details website can be used to announce and promote events such as concerts, festivals, conferences, or product launches.

                Sales promotions: Companies can use a temporary details website to promote sales and discounts on products or services.

                Limited-time offers: Businesses may use a temporary details website to promote limited-time offers or promotions, such as discounts or free trials.

                Temporary information: In some cases, organizations may use a temporary details website to provide temporary information, such as construction updates or temporary office locations.

                Regardless of the purpose, the goal of a temporary details website is to provide relevant information to visitors in a quick and convenient way, while also directing them to take a specific action, such as signing up for an event or making a purchase.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="content1 cid-s48vnjULo4" id="content1-c">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-md-9">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Description</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                Description typically refers to a brief, temporary description of a company or organization. It is typically used as placeholder text or interim content for a website that is under construction or being updated. This description provides a quick overview of the company's purpose, products, services, values, and mission, allowing visitors to get a basic understanding of what the company does. The "Temp Details About Us" description may also include contact information, such as a phone number or email address, for visitors who want to learn more about the company or get in touch. The description is usually replaced with a more comprehensive, permanent "About Us" page once the website is complete.
              </h4>
            </div>
          </div>
        </div>
      </div>

    </>
  );

}

