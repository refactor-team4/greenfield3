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
                <a id="welcome">Welcome admin</a>
              </li>

              <li>
                <router-link to="/"
                  ><a><span class="icon-user"></span>Log Out</a></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <div id="add">
    <label class="label">Product Name</label>
    <input
      class="input"
      type="text"
      placeholder="Product Name"
      v-model="productName"
    />
    <label class="label">img</label>
    <input
      class="input"
      type="text"
      placeholder="Product img"
      v-model="productImg"
    />
    <label class="label">Price</label>
    <input
      class="input"
      type="text"
      placeholder="Price"
      v-model="productPrice"
    />

    <button
      class="btn btn-primary hvr-sweep-to-right"
      id="save"
      v-on:click="addPost"
    >
      SAVE
    </button>
  </div>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <!-- <div class="sidebar"> -->
          <!-- <div class="border-box">
		<div class="box-title">Tour Search</div>
		<div class="input-group">
			<input type="text" class="form-control" placeholder="Search Site">
			<div class="input-group-btn">
				<button class="btn btn-primary">Search</button>
			</div>
		</div>
	</div> -->
          <!-- 
	<div class="border-box">
		<div class="box-title">Choose Country</div>
		<select class="form-control selectpicker">
			<option value="">Choose</option>
		</select>
	</div> -->

          <!-- <div class="border-box">
		<div class="box-title">Difficulty</div>
		<div> -->
          <!-- <div class="btn-group" data-toggle="buttons">
				<label class="btn btn-default active"  data-toggle="tooltip" data-placement="bottom" title="Easy">
					<input type="radio" name="options" id="option1" checked>
					<span class="icon-easy"></span>
				</label>
				<label class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Easy">
					<input type="radio" name="options" id="option2">
					<span class="icon-medium"></span>
				</label>
				<label class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Difficult">
					<input type="radio" name="options" id="option3">
					<span class="icon-difficult"></span>
				</label>
				<label class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Hard">
					<input type="radio" name="options" id="option4">
					<span class="icon-hard"></span>
				</label>
				<label class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Extreme">
					<input type="radio" name="options" id="option5">
					<span class="icon-extreme"></span>
				</label>
			</div> -->
          <!-- </div> -->
          <!-- </div> -->

          <!-- <div class="border-box"> -->
          <!-- <div class="box-title">Price Range</div>
		<div class="price-widget">
			<div id="price-slider"></div>
			<div id="amount-min" class="pull-left"></div>
			<div id="amount-max" class="pull-right"></div>
		</div> -->
          <!-- </div> -->

          <!-- <div class="border-box">
		<div class="box-title">Category</div>
		<ul class="checklist">
			<li><input type="checkbox"> All Style</li>
			<li><input type="checkbox"> Trekking</li>
			<li><input type="checkbox"> Hiking &amp; Sightseeing</li>
			<li><input type="checkbox"> Relaxation</li>
			<li><input type="checkbox"> Adventure</li>
		</ul>
	</div> -->

          <!-- <div class="border-box"> -->
          <!-- <div class="box-title">Duration</div>
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
			</div> -->
          <!-- <div class="col-sm-6">
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
			</div> -->
          <!-- </div>
	</div>

</div> -->
        </div>
        <div id="buttons">
          <router-link to="ProductsAdmin"
            ><button class="btn btn-primary hvr-sweep-to-right hey">
              access your products page
            </button></router-link
          >
          <router-link to="EventsAdmin"
            ><button class="btn btn-primary hvr-sweep-to-right hey">
              access your events page
            </button></router-link
          >
        </div>
      </div>
      <div id="grid">
        <article
          id="products"
          v-for="(item, index) in this.products"
          :key="index"
          class="post-list full-img"
        >
          <img class="post-img" v-bind:src="item.imgUrl" />
          <div class="post-summary">
            <header>
              <h4 class="post-title">
                <p>Product:</p>
                <a href="#">{{ item.productName }}</a>
              </h4>
              <p class="byline author vcard">
                <span class="dot">·</span>
                <span class="comments">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
              </p>
            </header>
            <div class="post-excerpt">
              <span>Price:</span> {{ item.price }}<br><br>
              <span class="updated">
                {{ moment(item.createdAt) }}
              </span>
            </div>

            <span
              @click="remove(item.productName)"
              id="delete"
              class="btn btn-primary hvr-sweep-to-right"
              >Delete</span
            >
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Products",
  props: ["data"],
  mounted() {
    console.log(this.products);
  },

  data() {
    return {
      productName: "",
      productPrice: "",
      productImg: "",
      uploadedImg: false,
      products: [],
    };
  },

  methods: {
    moment(option) {
      return moment(option).fromNow();
    },
    fetchData() {
      axios
        .get("http://localhost:5000/admin/fetch")
        .then(({ data }) => {
          this.products = { data }.data;
          console.log("products :", this.products);
        })
        .catch((err) => console.error(err));
    },
    uploadImage(e) {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "easy-life");

      axios
        .post("https://api.cloudinary.com/v1_1/REZmed/image/upload", data)
        .then(({ data }) => {
          console.log(data);
          this.ImgUrl = data.secure_url;
          this.uploadedImg = !this.uploadedImg;
        })
        .catch((err) => console.error(err));
    },
    remove(name) {
      console.log(name);
      axios.delete(`http://localhost:5000/admin/delete/${name}`).then(() => {
        this.fetchData();
      });
    },
    addPost() {
      let post = {
        productName: this.productName,
        productPrice: this.productPrice,
        productImg: this.productImg,
        products: [],
      };
      console.log("post :", post);
      axios
        .post("http://localhost:5000/admin/add", post)
        .then((response) => {
          console.log("response.data:", response.data);
          this.fetchData();
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchData();
  },
};

// export default {
//   name: "AddProduct",
//   data() {
//     return {
//       productName: "",
//       productPrice: "",
//       productimg : ""
//     };
//   },
//   methods: {
//     // Create New product
//     async saveProduct() {
//       try {
//         await axios.post("http://localhost:5000/products", {
//           product_name: this.productName,
//           product_price: this.productPrice,
//         });
//         this.productName = "";
//         this.productPrice = "";
//         this.productimg = ""
//         this.$router.push("/");
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   },
// };
</script>

<style scoped>
#delete {
  background-color: crimson;
  cursor: pointer;
}
#delete :hover {
  background-color: rgb(99, 22, 22);
}
#add {
  border-radius: 50px;
  width: 600px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 30px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 5px;
  top: 400px;
  left: 100px;
}
#save {
  margin-left: 30%;
}
#products {
  position: relative;
  left: 40%;
  width: 400px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 30px;
}
#grid {
  width: 800px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  justify-content: center;
  align-items: left;
  position: relative;
  left: 23%;
}
#buttons {
  position: relative;
  bottom: 90px;
  right: 10%;
  display: flex;
  justify-content: space-between;
  gap: 200px;
}
.hey {
  height: 80px;
}
#welcome {
  margin-right: 650px;
  font-size: 30pt;
}
</style>
