import React from 'react';
import '../HomePage.css';

function HomePage() {
  return (
    <>
      <div>
        <div
          id="myCarousel"
          class="carousel slide mb-6 por2"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner por3">
            <div class="carousel-item por4">
              <img
                class="d-block w-100 "
                src="https://zimiorganics.com/blog/images/1.jpg"
                alt="Image 1"
              />
              <h8 className="por7">
                "Crafting Wellness with Love: Your Journey to Organic Bliss"
              </h8>

              <div class="container containerb">
                <div class="carousel-caption text-start"></div>
              </div>
            </div>
            <div class="carousel-item por4 active">
              <img
                class="d-block w-100 "
                src="https://agriculturepost.com/wp-content/uploads/2020/09/5-schemes-promoting-organic-farming-in-India.jpg"
                alt="Image 1"
              />
              <h8 className="por5">Welcome to Eco-Choice</h8>
              <div class="container containerb">
                <div class="carousel-caption"></div>
              </div>
            </div>
            <div class="carousel-item por4">
              <img
                class="d-block w-100 "
                src="https://www.wegmans.com/wp-content/uploads/1097052-hero-wegmans-organic-farm-1.jpg"
                alt="Image 1"
              />
              <h8 className="por6">
                "Discover the Purity of Nature through Our Organic Creations"
              </h8>
              <div class="container containerb">
                <div class="carousel-caption text-end"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container containerb marketing por1">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://www.dahu.bio/images/photos/agriculture/organic-product.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">Heading</h2>
          </div>
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://5.imimg.com/data5/DW/VD/HC/SELLER-1035160/organic-grains.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">Heading</h2>
          </div>
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://www.healthkart.com/connect/wp-content/uploads/2016/07/banner-26.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">Heading</h2>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              First featurette heading.
              <span class="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.
              <span class="text-body-secondary">See for yourself.</span>
            </h2>
            <p class="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              And lastly, this one.
              <span class="text-body-secondary">Checkmate.</span>
            </h2>
            <p class="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-bg)"
              ></rect>
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider" />
      </div>
    </>
  );
}

export default HomePage;
