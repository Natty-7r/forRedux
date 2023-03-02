import React, { useState } from "react";

import {
  FaFacebook,
  FaTelegram,
  FaVoicemail,
  FaTwitter,
  FaMailBulk,
  FaMapMarked,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
// import "./Footer.css";
import "./FooterBlack.css";
export default () => {
  const [email, setEmail] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section footer_section">
      <div className="footer_main">
        <div className="footer_part  footer_part-contact_info">
          <div className="footer_part_header">Eyu leather</div>
          <div className="footer_part_content footer_part_content-contact">
            <div className="content_list content_list-contact">
              {" "}
              <FaMapMarked className="footer_icon content_list-icon" />
              <p className="content_list-text">
                International city France Cluster Building Q-08, Shop 1,2,3 & 5,
                Dubai
              </p>
            </div>
            <div className="content_list content_list-contact">
              {" "}
              <FaMailBulk className="footer_icon content_list-icon" />
              <p className="content_list-text ">info@mylaveri.com</p>
            </div>
            <div className="content_list content_list-contact">
              {" "}
              <FaPhone className="footer_icon content_list-icon" />
              <p className="content_list-text">+23510180924</p>
            </div>
            <div className="content_list content_list_links">
              {" "}
              <FaFacebook className="footer_icon footer_link" />
              <FaTelegram className="footer_icon footer_link" />
              <FaInstagram className="footer_icon footer_link" />
              <FaMailBulk className="footer_icon footer_link" />
              <FaTwitter className="footer_icon footer_link" />
            </div>
          </div>
        </div>
        <div className="footer_part  footer_part-compnay_info">
          <div className="footer_part_header">information</div>
          <div className="footer_part_content">
            <a
              href=""
              className="content_list footer_link ">
              about us{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              contact us{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              privacy{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              terms & contidions
            </a>
          </div>
        </div>

        <div className="footer_part  footer_part-account_info">
          <div className="footer_part_header">my account</div>
          <div className="footer_part_content">
            {" "}
            <a
              href=""
              className="content_list footer_link ">
              order{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              cart{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              check out{" "}
            </a>
            <a
              href=""
              className="content_list footer_link ">
              shipping{" "}
            </a>
          </div>
        </div>
        <div className="footer_part  footer_part-newsletter">
          <div className="footer_part_header">news letter</div>
          <div className="footer_part_header-sub">
            {" "}
            Subscribe to mailing list to receive updates on new arrivals,
            special offers and discount information.
          </div>
          <form
            className="footer_part_content footer_form"
            onSubmit={handleSubmitForm}>
            <input
              className="input input_footer"
              type="text"
              placeholder="Email address"
            />
            <button className="btn btn_footer">subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer_sub">
        <span>Copyright 2023 Eyu leather</span>
        <span>
          |Developed by
          <span className="developer"> DEV-X</span>
        </span>
      </div>
    </section>
  );
};
