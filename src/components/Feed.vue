<template>
  <button
    id="toggleBtn"
    v-on:click="openPostForm"
    type="button"
    class="btn btn-success"
  >
    POST STORY
  </button>
  <form v-if="Post" class="form-horizontal">
    <fieldset>
      <div class="form-group">
        <label class="col-md-4 control-label" for="event_name">Name</label>
        <div class="col-md-4">
          <input
            id="event_name"
            name="event_name"
            type="text"
            placeholder="Post Name.."
            class="form-control input-md"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="event_name">Place</label>
        <div class="col-md-4">
          <input
            id="event_name"
            name="event_name"
            type="text"
            placeholder="Camping place.."
            class="form-control input-md"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="event_name">Picture</label>
        <div class="col-md-4">
          <input
            id="event_name"
            name="event_name"
            type="file"
            placeholder="Picture"
            class="form-control input-md"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="textarea">Description</label>
        <div class="col-md-4">
          <textarea
            class="form-control"
            id="textarea"
            name="textarea"
          ></textarea>
        </div>
      </div>

      <button id="PostBtn" type="button" class="btn btn-success">POST</button>
    </fieldset>
  </form>

  <article id="blog" class="post-list full-img">
    <div
      class="post-img"
      style="
        background-image: url('https://static01.nyt.com/images/2021/05/19/education/19educationbriefing-camp/19educationbriefing-camp-superJumbo.jpg');
      "
    >
      <div class="item-overlay">
        <a href="#">
          <span class="icon-binocular"></span>
        </a>
      </div>
    </div>
    <div class="post-summary">
      <header>
        <h4 class="post-title">
          <a href="#">Like Nothing I’ve Seen</a>
        </h4>
        <p class="byline author vcard">
          <span class="italic">By</span>
          &nbsp;
          <a href="#" rel="author">Keira Hopman</a>
          <span class="dot">·</span>
          <span class="updated"> September 1, 2016 </span>
          <span class="dot">·</span>
          <span class="comments">
            <i class="fa fa-comment"></i>
            <a href="#">1 Comment</a>
          </span>
        </p>
      </header>
      <div class="post-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        cupiditate, expedita maxime voluptate iste eius fuga amet voluptas, unde
        exercitationem itaque praesentium velit facilis totam?
      </div>
      <a
        href="blog_single_center.html"
        class="btn btn-primary hvr-sweep-to-right"
      >
        Read More
      </a>
    </div>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "Feed",
  props: {
    content: String,
    imgUrl: String,
    createdAt: String,
    products: [],
    userId: String,
    post: String,
    com: String,
    comments: [],
  },
  data() {
    return {
      Post: false,
      Title: "",
      Content: "",
      ImgUrl: "",
      Place: "",
    };
  },

  methods: {
    openPostForm() {
      this.Post = !this.Post;
    },

    addPost() {
      let post = {
        title: this.Title,
        place: this.Place,
        content: this.content,
        imgUrl: this.imgUrl,
        userId: localStorage.getItem("userId"),
      };
      axios
        .post("/Feed/postBlog", post)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
/* *{
  border : red solid 2px
} */
#toggleBtn {
  position: relative;
  left: 140px;
  top: 40px;
  width: 200px;
  margin-bottom: 40px;
}
#PostBtn {
  margin-top: 20px;
  position: relative;
  float: right;
  width: 100px;
}
#blog {
  width: 800px;
  position: relative;
  float: right;
  margin-right: 250px;
  margin-top: 40px;
}
.form-horizontal {
  width: 410px;
  position: absolute;
  float: left;
  margin-top: 40px;
  margin-left: 40px;
  background: white;
}
.form-group {
  width: 3800px;
  margin-left: 5px;
}
.control-label {
  width: 3800px;
}
.form-control {
  width: 380px;
}
</style>
