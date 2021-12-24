<template>
  <div>
    <header class="nav-menu fixed">
      <nav class="navbar normal transparent">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="index.html">
              <img
                src="assets/img/logo.png"
                alt="Mold Discover Html Template"
              />
            </a>
          </div>

          <div class="collapsed">
            <ul class="nav">
              <li>
                <router-link to="/"><a>Home</a></router-link>
              </li>
              <li>
                <router-link to="events"><a>Events</a></router-link>
              </li>
              <li>
                <router-link to="products"><a>Products</a></router-link>
              </li>
              <li>
                <router-link to="blogs"><a>Blogs</a></router-link>
              </li>
              <li>
                <router-link to="Login"
                  ><a><span class="icon-user"></span>Sign In</a></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="carousel slide carousel-fade full-height stick-top">
      <div class="carousel-inner">
        <div
          class="item with-overlay active"
          style="background-image: url('assets/img/trip_detail/4.jpg')"
        >
          <div class="carousel-caption center-txt">
            <h1 class="main-header">Enjoy Adventure</h1>
            <hr />
            <p class="sub-header">Here you can really make your self happy</p>
            <a href="footer" class="btn btn-lg btn-primary hvr-sweep-to-right"
              >Explore More</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="container-fluid" id="bobi">
        <div class="section-title center">
          <h3 id="bobii">Featured Guides</h3>
        </div>
        <div class="row team">
          <div class="col-sm-6 col-md-2">
            <div class="member" id="bob">
              <div class="image">
                <img
                  src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7DNHW-5e9f26b8fe08-512"
                  alt=""
                />
              </div>
              <h4 class="name">Ala Jridi</h4>
              <h5 class="detail">Junior Developer</h5>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean
              </p>
              <div class="social">
                <a
                  href="https://www.facebook.com/profile.php?id=100005139885531"
                  class="icon icon-facebook"
                ></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-google"></a>
                <a href="#" class="icon icon-rss"></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-2">
            <div class="member" id="bob">
              <div class="image">
                <img
                  src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7BZL0-537f4e38e96b-512"
                  alt=""
                />
              </div>
              <h4 class="name">Wael Ajabi</h4>
              <h5 class="detail">Junior Developer</h5>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean
              </p>
              <div class="social">
                <a
                  href="https://www.facebook.com/profile.php?id=100005139885531"
                  class="icon icon-facebook"
                ></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-google"></a>
                <a href="#" class="icon icon-rss"></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-2">
            <div class="member" id="bob">
              <div class="image">
                <img
                  src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F792U8-da3cca97550c-512"
                  alt=""
                />
              </div>
              <h4 class="name">Ahmed Bouafif</h4>
              <h5 class="detail">Junior Developer</h5>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean
              </p>
              <div class="social">
                <a
                  href="https://www.facebook.com/profile.php?id=100005139885531"
                  class="icon icon-facebook"
                ></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-google"></a>
                <a href="#" class="icon icon-rss"></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-2">
            <div class="member" id="bob">
              <div class="image">
                <img
                  src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7A96U-3007546eb85d-512"
                  alt=""
                />
              </div>
              <h4 class="name">Sahar Boukari</h4>
              <h5 class="detail">Junior Developer</h5>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean
              </p>
              <div class="social">
                <a href="#" class="icon icon-facebook"></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-google"></a>
                <a href="#" class="icon icon-rss"></a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-2">
            <div class="member" id="bob">
              <div class="image">
                <img
                  src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F75SBA-07578c1aaff8-512"
                  alt=""
                />
              </div>
              <h4 class="name">Saddem Aidy</h4>
              <h5 class="detail">Junior Developer</h5>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean
              </p>
              <div class="social">
                <a href="#" class="icon icon-facebook"></a>
                <a href="#" class="icon icon-twitter"></a>
                <a href="#" class="icon icon-google"></a>
                <a href="#" class="icon icon-rss"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 col-md-3">
            <h3>Mold Discover</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, quia, architecto? A, reiciendis eveniet! Esse est
              eaque adipisci natus rerum laudantium accusamus magni.
            </p>
          </div>
          <div class="col-sm-5 col-md-2">
            <h3>Quick Link</h3>
            <ul>
              <li>Holiday Package</li>
              <li>Summer Adventure</li>
              <li>Bus and Trasnportation</li>
              <li>Ticket and Hotel Booking</li>
              <li>Trek and Hikings</li>
            </ul>
          </div>
          <div class="col-sm-5 col-md-2">
            <h3>Contact Info</h3>
            <ul>
              <li>Mold Discover</li>
              <li>mycamp@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
