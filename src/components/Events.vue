<template>
  <div>
    <header class="nav-menu fixed">
      <nav class="navbar normal">
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
    <section
      class="page-img"
      style="background-image: url('assets/img/coast/6.jpg')"
    >
      <div class="page-img-txt container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <br />
            <div class="map-image">
              <img
                class="img-responsive"
                src="assets/img/map/africa.png"
                alt=""
              />
            </div>
            <br />
            <br />
          </div>
          <div class="col-sm-7">
            <h1>Africa</h1>
            <div class="term-description">
              <p>
                Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
                hendrerit fringilla. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
                consectetuer lacinia. Nam pretium turpis et arcu.
              </p>

              <p>
                Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu,
                accumsan a, consectetuer eget, posuere ut, mauris. Praesent
                adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc
                nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="sidebar">
              <div class="border-box">
                <div class="box-title">Tour Search</div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Site"
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>

              <div class="border-box">
                <div class="box-title">Choose Country</div>
                <select class="form-control selectpicker">
                  <option value="">Choose</option>
                </select>
              </div>

              <div class="border-box">
                <div class="box-title">Difficulty</div>
                <div>
                  <div class="btn-group" data-toggle="buttons">
                    <label
                      class="btn btn-default active"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Easy"
                    >
                      <input type="radio" name="options" id="option1" checked />
                      <span class="icon-easy"></span>
                    </label>
                    <label
                      class="btn btn-default"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Easy"
                    >
                      <input type="radio" name="options" id="option2" />
                      <span class="icon-medium"></span>
                    </label>
                    <label
                      class="btn btn-default"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Difficult"
                    >
                      <input type="radio" name="options" id="option3" />
                      <span class="icon-difficult"></span>
                    </label>
                    <label
                      class="btn btn-default"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Hard"
                    >
                      <input type="radio" name="options" id="option4" />
                      <span class="icon-hard"></span>
                    </label>
                    <label
                      class="btn btn-default"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Extreme"
                    >
                      <input type="radio" name="options" id="option5" />
                      <span class="icon-extreme"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="border-box">
                <div class="box-title">Price Range</div>
                <div class="price-widget">
                  <div id="price-slider"></div>
                  <div id="amount-min" class="pull-left"></div>
                  <div id="amount-max" class="pull-right"></div>
                </div>
              </div>

              <div class="border-box">
                <div class="box-title">Category</div>
                <ul class="checklist">
                  <li><input type="checkbox" /> All Style</li>
                  <li><input type="checkbox" /> Trekking</li>
                  <li><input type="checkbox" /> Hiking &amp; Sightseeing</li>
                  <li><input type="checkbox" /> Relaxation</li>
                  <li><input type="checkbox" /> Adventure</li>
                </ul>
              </div>

              <div class="border-box">
                <div class="box-title">Duration</div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Days</label>
                      <select class="form-control selectpicker">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Nights</label>
                      <select class="form-control selectpicker">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="row item">
              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_1.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-hard"></span>
                      <h4 class="title"><a href="#">Routeburn Track</a></h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">New Zealand</span>
                      <span class="grade">Hard</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_2.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-difficult"></span>
                      <h4 class="title"><a href="#">Fitz Roy Trek</a></h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">Patagonia, Argentina</span>
                      <span class="grade">Difficult</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_3.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-hard"></span>
                      <h4 class="title"><a href="#">Annapurna Circuit</a></h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">Nepal</span>
                      <span class="grade">Hard</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_4.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-medium"></span>
                      <h4 class="title"><a href="#">Overland Track</a></h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">Australia</span>
                      <span class="grade">Medium</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_5.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-difficult"></span>
                      <h4 class="title"><a href="#">The Haute Route</a></h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">France-Switzerland</span>
                      <span class="grade">Difficult</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6">
                <div class="item-grid">
                  <div
                    class="item-img"
                    style="
                      background-image: url('assets/img/trip_detail/thumb_6.jpg');
                    "
                  >
                    <div class="item-overlay">
                      <a href="trip_detail.html"
                        ><span class="icon-binocular"></span
                      ></a>
                    </div>
                  </div>
                  <div class="item-desc">
                    <div class="item-info">
                      <span class="icon-hard"></span>
                      <h4 class="title">
                        <a href="#">Torres del Paine Circuit</a>
                      </h4>
                    </div>

                    <div class="sub-title">
                      <span class="location">Chile</span>
                      <span class="grade">Easy</span>
                    </div>

                    <div class="item-detail">
                      <div class="left">
                        <div class="day">
                          <span class="icon-sun"></span>3 Days
                        </div>
                        <div class="night">
                          <span class="icon-moon"></span>2 Nights
                        </div>
                      </div>
                      <div class="right">
                        <div class="price">USD 121</div>
                        <a
                          href="trip_detail.html"
                          class="btn btn-primary hvr-sweep-to-right"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pagination-wrap">
              <span class="total">Total 127</span>
              <nav class="pull-right">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="First">First</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item active">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item"><span class="page-link">..</span></li>
                  <li class="page-item">
                    <a class="page-link" href="#">99</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Last">Last</a>
                  </li>
                </ul>
              </nav>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
  name: "Events",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
