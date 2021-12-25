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
                                <router-link to="events">
                                    <a>Events</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="products">
                                    <a>Products</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="blogs">
                                    <a>Blogs</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="Login">
                                    <a>
                                        <span class="icon-user"></span>
                                        Sign In
                                    </a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section
            class="page-img"
            style="background-image: url('assets/img/home_img/mountain.jpg')"
        >
            <div class="page-img-txt container">
                <div class="row">
                    <div class="col-sm-8">
                        <h1 class="main-head">Blogs List</h1>
                    </div>
                </div>
            </div>
        </section>
        <main>
            <div class="container">
                <div class="row">
                    <div v-if="searched" class="col-sm-8">
                        <article
                            v-for="(item, index) in SearchedBlogs"
                            :key="index"
                            class="post-list full-img"
                        >
                            <img class="post-img" v-bind:src="item.imgUrl" />

                            <div class="post-summary">
                                <header>
                                    <h4 class="post-title">
                                        <a href="#">{{ item.title }}</a>
                                    </h4>
                                    <p class="byline author vcard">
                                        <span class="italic">By</span>
                                        &nbsp;
                                        <a href="#" rel="author">
                                            {{ item.userName }}
                                        </a>
                                        <span class="dot">·</span>
                                        <span class="updated">
                                            {{ moment(item.createdAt) }}
                                        </span>
                                        <span class="dot">·</span>
                                        <span class="comments">
                                            <i
                                                class="fas fa-map-marker-alt"
                                            ></i>
                                            <a>{{ item.place }}</a>
                                        </span>
                                    </p>
                                </header>
                                <div class="post-excerpt">
                                    {{ item.content.slice(0, 248) }}
                                    <span id="span">read more ...</span>
                                </div>

                                <router-link :to="`/blogDetails/${item.postId}/${item.userId}/${this.data}`">
                                    <span
                                        class="btn btn-primary hvr-sweep-to-right"
                                    >
                                        Read More
                                    </span>
                                </router-link>
                            </div>
                        </article>
                    </div>

                    <div v-if="initial" class="col-sm-8">
                        <article
                            v-for="item in Blogs"
                            :key="item.id"
                            class="post-list full-img"
                        >
                            <img class="post-img" v-bind:src="item.imgUrl" />

                            <div class="post-summary">
                                <header>
                                    <h4 class="post-title">
                                        <a href="#">{{ item.title }}</a>
                                    </h4>
                                    <p class="byline author vcard">
                                        <span class="italic">By</span>
                                        &nbsp;
                                        <a rel="author">
                                            {{ item.userName }}
                                        </a>
                                        <span class="dot">·</span>
                                        <span class="updated">
                                            {{ moment(item.createdAt) }}
                                        </span>
                                        <span class="dot">·</span>
                                        <span class="comments">
                                            <i
                                                class="fas fa-map-marker-alt"
                                            ></i>
                                            <a>{{ item.place }}</a>
                                        </span>
                                    </p>
                                </header>
                                <div class="post-excerpt">
                                    {{ item.content.slice(0, 248) }}
                                    <span id="span">read more ...</span>
                                </div>

                                <router-link
                                    :to="`/blogDetails/${item.postId}/${item.userId}/${this.data}`"
                                >
                                    <span
                                        class="btn btn-primary hvr-sweep-to-right"
                                    >
                                        Read More
                                    </span>
                                </router-link>
                            </div>
                        </article>
                    </div>
                    <div class="col-sm-4">
                        <div class="sidebar">
                            <div class="border-box">
                                <div class="box-title">Search Trips</div>
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search Site"
                                        v-model="searchedPlace"
                                    />
                                    <div class="input-group-btn">
                                        <button
                                            id="searchBtn"
                                            class="btn btn-primary"
                                            v-on:click="search"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="border-box">
                                <div class="box-title">Post Something</div>
                                <form class="form-horizontal">
                                    <fieldset>
                                        <div class="form-group">
                                            <label
                                                class="col-md-4 control-label"
                                                for="event_name"
                                            >
                                                Title
                                            </label>
                                            <div class="col-md-4">
                                                <input
                                                    id="event_name"
                                                    name="event_name"
                                                    type="text"
                                                    placeholder="Post Name.."
                                                    class="form-control"
                                                    v-model="Title"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label
                                                class="col-md-4 control-label"
                                                for="event_name"
                                            >
                                                Place
                                            </label>
                                            <div class="col-md-4">
                                                <input
                                                    id="event_name"
                                                    name="event_name"
                                                    type="text"
                                                    placeholder="Camping place.."
                                                    class="form-control"
                                                    v-model="Place"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label
                                                class="col-md-4 control-label"
                                                for="event_name"
                                            >
                                                Picture
                                            </label>
                                            <div class="col-md-4">
                                                <input
                                                    id="event_name"
                                                    name="event_name"
                                                    type="file"
                                                    placeholder="Picture"
                                                    class="form-control"
                                                    @change="uploadImage"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <img
                                                v-if="uploadedImg"
                                                id="uploadedImg"
                                                v-bind:src="this.ImgUrl"
                                                alt=""
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label
                                                class="col-md-4 control-label"
                                                for="textarea"
                                            >
                                                Description
                                            </label>
                                            <div class="col-md-4">
                                                <textarea
                                                    class="form-control"
                                                    id="textarea"
                                                    name="textarea"
                                                    v-model="Content"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button
                                            id="PostBtn"
                                            type="button"
                                            class="btn btn-primary"
                                            v-on:click="addPost"
                                        >
                                            POST
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur, quia, architecto? A, reiciendis
                            eveniet! Esse est eaque adipisci natus rerum
                            laudantium accusamus magni.
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
                    <div class="col-sm-7 col-md-4">
                        <h3>Newsletter Signup</h3>
                        <p>
                            Subscribe to our weekly newsletter to get news and
                            update
                        </p>
                        <br />
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Your Email"
                            />
                            <div class="input-group-btn">
                                <button class="btn btn-primary">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-2">
                        <h3>Contact Info</h3>
                        <ul>
                            <li>Mold Discover</li>
                            <li>info@moldthemes.com</li>
                        </ul>
                        <div class="clearfix">
                            <div class="social-icon-list">
                                <ul>
                                    <li>
                                        <a
                                            href="https://twitter.com/moldthemes"
                                            class="icon-twitter"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:info@moldthemes.com"
                                            class="icon-mail"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy">
                <span>&copy;</span>
                Copyright Mold Discover, 2017
            </div>
        </footer>
    </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
    name: "Blogs",
    props: ["data"],
    data() {
        return {
            initial: true,
            searched: false,
            uploadedImg: false,
            Title: "",
            Content: "",
            ImgUrl: "",
            Place: "",
            createdAt: "",
            Blogs: [],
            SearchedBlogs: [],
            userData:[],
            searchedPlace: "",
        };
    },
    methods: {
        moment(option) {
            return moment(option).fromNow();
        },
        fetchData() {
            axios
                .get("http://localhost:5000/blogs/getAll")
                .then(({ data }) => {
                    this.Blogs = { data }.data;
                    console.log({ data }.data);
                    console.log("blogs :", this.Blogs);
                })
                .catch((err) => console.error(err));
        },
        uploadImage(e) {
            const files = e.target.files;
            const data = new FormData();
            data.append("file", files[0]);
            data.append("upload_preset", "easy-life");
            axios
                .post(
                    "https://api.cloudinary.com/v1_1/REZmed/image/upload",
                    data
                )
                .then(({ data }) => {
                    console.log(data);
                    this.ImgUrl = data.secure_url;
                    this.uploadedImg = !this.uploadedImg;
                })
                .catch((err) => console.error(err));
        },
        addPost() {
            let post = {
                content: this.Content,
                imgUrl: this.ImgUrl,
                title: this.Title,
                place: this.Place,
                // ownerId: '1',
               ownerId: JSON.parse(localStorage.getItem("session")||'').userId,
            };
            console.log("post :", post);
            axios
                .post("http://localhost:5000/blogs/postBlog", post)
                .then((response) => {
                    console.log("response.data:", response.data);
                    this.fetchData();
                })
                .catch((err) => console.log(err));
        },
        search() {
            var searchedPlace = this.searchedPlace;
            console.log(searchedPlace);
            axios
                .get(`http://localhost:5000/blogs/searchBlogs/${searchedPlace}`)
                .then(({ data }) => {
                    this.SearchedBlogs = { data }.data;
                    this.searched = !this.searched;
                    this.initial = !this.initial;
                    console.log("searchedBlogs :", this.SearchedBlogs);
                })
                .catch((err) => console.log(err));
        },
    },
    created() {
        this.fetchData();
    //    console.log("emchiiiii :", JSON.parse(localStorage.getItem("session")||'')) 
      
    },
};
</script>

<style scoped>
/* *{
	border:red solid 2px
} */
#searchBtn {
    position: relative;
    float: left;
    margin-top: 10px;
    width: 100px;
}

#PostBtn {
    margin-top: 10px;
    position: relative;
    float: left;
    width: 100px;
}

.form-control {
    width: 250px;
}
#uploadedImg {
    margin-left: 0px;
    height: 200px;
    width: 280px;
}
#span {
    color: grey;
}
</style>
