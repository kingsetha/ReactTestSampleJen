import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Style.css";

function Edit() {
  

  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Movie Ticket Booking Management system</title>

        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

        <script
          src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />

        <link href="Style.css" rel="stylesheet" />
      </head>
      <body id="page-top">
        <header class="masthead d-flex align-items-center">
          <div class="container px-4 px-lg-5 text-center">
            <h1 class="mb-1"></h1>
            <h3 class="mb-5">
              <em>Movie Ticket Booking Management system</em>
            </h3>
            <br></br>
            <br></br>
            <a class="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a>
          </div>
        </header>

        <section class="content-section bg-light" id="about">
          <div class="container px-4 px-lg-5 text-center">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-10">
                <h2>Customer Satisfaction is the ultimate goal our theatre!</h2>
                <p class="lead mb-7">
                  This app features a flexible, UX friendly.
                </p>
                <a class="btn btn-dark btn-xl" href="#services">
                  What We Offer
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          class="content-section bg-primary text-white text-center"
          id="services"
        >
          <div class="container px-4 px-lg-5">
            <div class="content-section-heading">
              <h3 class="text-secondary mb-0">Services</h3>
              <h2 class="mb-5">What We Offer</h2>
            </div>
            <div class="row gx-4 gx-lg-5">
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-screen-smartphone"></i>
                </span>
                <h4>
                  <strong>Better Sound</strong>
                </h4>
                <p class="text-faded mb-0">Looks great to hear</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-graph"></i>
                </span>
                <h4>
                  <strong>Air Conditioner</strong>
                </h4>
                <p class="text-faded mb-0">Book it fast and get it fast.</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-hourglass"></i>
                </span>
                <h4>
                  <strong>Unlimited Popcorn</strong>
                </h4>
                <p class="text-faded mb-0">Buy 1 Get Unlimited</p>
              </div>
              <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
                  <i class="icon-mustache"></i>
                </span>
                <h4>
                  <strong>3D display</strong>
                </h4>
                <p class="text-faded mb-0">Graphical view is in your hand</p>
              </div>
            </div>
          </div>
        </section>

        <section class="callout">
          <div class="container px-4 px-lg-5 text-center">
            <h2 class="mx-auto mb-5">
              Welcome-to
              <em>-our-</em>
              website!
            </h2>
            <a class="btn btn-primary btn-xl" href="">
              Download Now!
            </a>
          </div>
        </section>

        <section class="content-section" id="portfolio">
          <div class="container px-4 px-lg-5">
            <div class="content-section-heading text-center">
              <h3 class="text-secondary mb-0">Our specialisation</h3>
              <h2 class="mb-5">Recent goods</h2>
            </div>
            <div class="row gx-0">
              <div class="col-lg-6">
                <a class="portfolio-item" href="#!">
                  <div class="caption">
                    <div class="caption-content">
                      <div class="h2">Better Cushion</div>
                      <p class="mb-0">makes u feel great!</p>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoG48OPJ48ngMRZHLvIrsYN_UF5wqYOBoWQ&s"
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-lg-6">
                <a class="portfolio-item" href="!#">
                  <div class="caption">
                    <div class="caption-content">
                      <div class="h2">Comfortable seat</div>
                      <p class="mb-0">A Good seat decides your mood!</p>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZuvgxARfmz64Q1MvENqTWuE5-yzKY24TOA&s"
                    alt="..."
                  />
                </a>
              </div>
              <div class="col-lg-6">
                <a class="portfolio-item" href="#!">
                  <div class="caption">
                    <div class="caption-content">
                      <div class="h2">Cleaned zone</div>
                      <p class="mb-0">Neatness is beauty!</p>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM16Oj9XfGeESX9yC-2HllPIyrjpv3SY4gwg&s"
                    alt=".."
                  />
                </a>
              </div>
              <div class="col-lg-6">
                <a class="portfolio-item" href="#!">
                  <div class="caption">
                    <div class="caption-content">
                      <div class="h2">True review</div>
                      <p class="mb-0">
                        Keeps you posted about the movie review.
                      </p>
                    </div>
                  </div>
                  <img
                    class="img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlIwwYL6VZKVFrkMtZMndmIn3rNqJq-s-dw&s"
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section bg-primary text-white">
          <div class="container px-4 px-lg-5 text-center">
            <h2 class="mb-4">The buttons below are impossible to resist...</h2>
            <a class="btn btn-xl btn-light me-4" href="#!">
              Click Me!
            </a>
            <a class="btn btn-xl btn-dark" href="#!">
              Look at Me!
            </a>
          </div>
        </section>

        <div class="map" id="contact">
          <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
          <br />
          <small>
            <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
          </small>
        </div>

        <footer class="footer text-center">
          <div class="container px-4 px-lg-5">
            <ul class="list-inline mb-5">
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#!">
                  <i class="icon-social-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#!">
                  <i class="icon-social-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="#!">
                  <i class="icon-social-github"></i>
                </a>
              </li>
            </ul>
            <p class="text-muted small mb-0">
              Copyright &copy; movieTicketBooking Website 2024
            </p>
          </div>
        </footer>

        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="js/scripts.js"></script>
      </body>
    </div>
  );
}

export default Edit;
