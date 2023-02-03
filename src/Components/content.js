import React, { useState } from "react";
import { faker } from "@faker-js/faker";

export default function Content(props) {
  let [name, setName] = useState("");
  let [country, setCountry] = useState("");
  let [city, setCity] = useState("");
  let [zipCode, setZipCode] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  let generate_details = () => {
    setName(faker.name.fullName());
    setCountry(faker.address.country());
    setCity(faker.address.city());
    setZipCode(faker.address.zipCode());
    setEmail(faker.internet.email());
    setPhone(faker.phone.number());
  };

  let clearAll = () => {
    setName("");
    setCountry("");
    setCity("");
    setZipCode("");
    setEmail("");
    setPhone("");
  };
  // let handleOnChange = (event) => {};
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

        <div className="align-center container">
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
              <div>
                <div className="container mt-3 position-relative">
                  <div className="container">
                    <div className="container position-relative">
                      <table className="table">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">City</th>
                            <th scope="col">Zip Code</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                          </tr>
                        </thead>
                        <tbody className="table-group-divider table-light">
                          <tr>
                            <td>{name}</td>
                            <td>{country}</td>
                            <td>{city}</td>
                            <td>{zipCode}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mbr-section-btn mt-3">
                <button
                  className="btn btn-success display-4"
                  id="generateNameBtn"
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
                <strong>Work with Content</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                Click on the image to replace it. To change parameters of a
                block, click on <em>the blue gear icon</em>. You can set a
                background type and its content. Click on the Buttons parameter
                to enable buttons for this block. Click in the text to change
                your text style or color. Select text to change its formatting
                or add links.
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
                <p className="mbr-description mbr-fonts-style mt-2 align-center display-4">
                  Image Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content1 cid-s48vaXqeL6" id="content1-b">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-md-9">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Add new blocks</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                Temp-Details can generate you random details which you will use
                Anywhere
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
                <strong>Create new pages</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                You can have multiple pages in your project. Find the menu icon
                at the top left corner. Move your cursor over it to open the
                main menu. Click on the <strong>Pages </strong>tab to manage
                your pages. Don't forget to set your page title and description.
                This info is used by browsers and search engines. The home page
                of your project cannot be removed.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="content1 cid-s48vrXhP0J" id="content1-d">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-md-9">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                <strong>Publish your project</strong>
              </h3>
              <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                Click on the <strong>Publish </strong>button at the top right
                corner and select a needed publishing option. Use the publish
                option to publish your test site on our servers. You can publish
                your site locally if you don't want to publish it online yet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Content.defaultProps = {
  clearText: true
};
