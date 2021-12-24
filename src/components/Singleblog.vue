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

                    <div class="collapsed" id="main-navbar">
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

        <div class="post-single center">
            <section
                class="page-img"
                v-bind:style="{
                    backgroundImage: 'url(' + this.blog.imgUrl + ')',
                }"
            >
                <div class="page-img-txt container">
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <h1 class="main-head">{{ this.blog.title }}</h1>
                            <div class="author-img">
                                <img v-bind:src="this.userData.profilePicture" alt="" />
                            </div>
                            <div class="author">
                                <span>By</span>
                                <a >{{this.userData.userName.toUpperCase()}}</a>
                            </div>
                            <p class="byline">
                                <span>{{ moment(this.blog.createdAt) }}</span>
                                <span class="dot">·</span>
                                <span class="italic">in </span>
                                <a>{{ this.blog.place }}</a>
                                <span class="dot">·</span>
                                <a href="#">4 Comments</a>
                            </p>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>
            </section>

            <main class="white">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <div class="post">
                                <p>
                                    {{ this.blog.content }}
                                </p>
                            </div>

                            <div class="review-comment">
                                <div class="section-title left">
                                    <h4>Reviews &amp; Comments</h4>
                                </div>
                                <ul class="media-list review-comment">
                                  
                                    <li>
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img
                                                        src="assets/img/team/2-sm.jpg"
                                                        class="media-object"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h4 class="media-heading">
                                                    Shing Ch'in
                                                </h4>
                                                <div class="rating">
                                                    <span
                                                        class="icon-star"
                                                    ></span>
                                                    <span
                                                        class="icon-star"
                                                    ></span>
                                                    <span
                                                        class="icon-star"
                                                    ></span>
                                                    <span
                                                        class="icon-star"
                                                    ></span>
                                                    <span
                                                        class="icon-star-empty"
                                                    ></span>
                                                </div>
                                                Cras sit amet nibh libero, in
                                                gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin
                                                commodo. Cras purus odio,
                                                vestibulum in vulputate at,
                                                tempus viverra turpis.
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="add-comment">
                                    <div class="form-group">
                                        <label>Add Comment</label>
                                        <textarea class="form-control">
Your comment</textarea
                                        >
                                        <button class="btn btn-primary">
                                            Add Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

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
import { useRoute } from "vue-router";
import axios from "axios";
import moment from "moment";
export default {
    name: "Singleblog",
    props: {
        msg: String,
    },
    data() {
        return {
            blog: {},
            userData:{},
        };
    },
    methods: {
        fetchData() {
            const route = useRoute();
            const id = route.params.id;
            const userId =route.params.userId
            console.log('userId :' , userId)
            axios
                .get(`http://localhost:5000/blogs/details/${id}`)
                .then((response) => {
                    this.blog = response.data;
                    this.ownerId= response.data.ownerId
                })
                .catch((err) => console.error(err));
        },
         fetchUserData() {
            const route = useRoute();
            const userId =route.params.userId
            axios
                .get(`http://localhost:5000/users/details/${userId}`)
                .then((response) => {
                    this.userData = response.data;
                })
                .catch((err) => console.error(err));
        },
        postComment(){
            
        },
 
        moment(option) {
            return moment(option).fromNow();
        },
    },
    created() {
        this.fetchData();
        this.fetchUserData()
    },
};
</script>

<style scoped></style>
