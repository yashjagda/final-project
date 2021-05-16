import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
//Link acts as <a> tag

export default class Home extends Component {
  render() {
    return (
      <div classNameName="wrapper">
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>
              Welcome to <span>Lambda Bucket</span>
            </h1>
            <h2>Backup your files with this Faas application.</h2>
            <div className="d-flex">
              <a href="/register" className="btn-get-started scrollto btn-info">
                Register
              </a>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-cloud-upload-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
                      />
                    </svg>
                    <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Upload your files</a>
                    </h4>
                    <p className="description">
                      Backup your pdf, jpg, png files in a safe and secure cloud
                      environment.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-cloud-download-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                      />
                    </svg>
                    <div className="icon">
                      <i className="bx bx-file"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Download your files</a>
                    </h4>
                    <p className="description">
                      Download your files in any device you desire to access it
                      or create a copy
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-pencil-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                      />
                    </svg>
                    <div className="icon">
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4 className="title">
                      <a href="">View files</a>
                    </h4>
                    <p className="description">
                      View the uploaded files right from the dashboard
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-archive-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
                      />
                    </svg>
                    <div className="icon">
                      <i className="bx bx-world"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Delete file</a>
                    </h4>
                    <p className="description">
                      Remove any file in your account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
