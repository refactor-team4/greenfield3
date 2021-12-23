<template>
    <div>
        <header class="nav-menu fixed">
	<nav class="navbar normal">
		<div class="container-fluid">
 <div class="navbar-header">
  <a class="navbar-brand" href="index.html">
<img src="assets/img/logo.png" alt="Mold Discover Html Template">
  </a>
  
</div>
  
<div class="collapsed">
   <ul class="nav"> 
<li >
    <router-link to="/"><a>Home</a></router-link>
</li>
<li>
	<router-link to="events"><a>Events</a></router-link>
</li>
<li >
	<router-link to="products"><a>Products</a></router-link>
</li>
<li>
	<router-link to="blogs"><a>Blogs</a></router-link>
</li>
<li> 
		<router-link to="Login"><a><span class="icon-user"></span>Sign In</a></router-link>
	</li>
 </ul> 
</div>
  </div>
  </nav>
</header>

	<section class="page-img" style="background-image: url('assets/img/home_img/mountain.jpg');">
		<div class="page-img-txt container">
			<div class="row">
				<div class="col-sm-8">
					<h1 class="main-head">Blog List</h1>	
					<p class="sub-head">Blog Listing with Full Image</p>
				</div>
				<div class="colsm-4">
					<ul class="breadcrumb">
						<li><a href="#"><span class="icon-home"></span></a></li>
						<li><a href="#">Blog</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-sm-8">
					<article class="post-list full-img">
						<div class="post-img" style="background-image: url('assets/img/blog/1.jpg')">
							<div class="item-overlay">
								<a href="#"><span class="icon-binocular"></span></a>
							</div>
						</div>
						<div class="post-summary">
							<header>
								<h4 class="post-title">
									<a href="#">Someday This Day</a>
								</h4>
								<p class="byline author vcard">
									<span class="italic">By</span>&nbsp;
									<a href="#" rel="author">Aaron D. Cullen</a>
									<span class="dot">·</span>
									<span class="updated">August 24, 2015</span>
									<span class="dot">·</span>
									<span class="comments"><i class="fa fa-comment"></i>
										<a href="#">1 Comment</a> 
									</span>
								</p>
							</header>
							<div class="post-excerpt">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta modi consequatur fugiat maiores deserunt cumque aperiam eius architecto, sed error illo laboriosam beatae ducimus, impedit.
							</div>

							<router-link to="/Singleblog"><span class="btn btn-primary hvr-sweep-to-right">Read More</span></router-link>
						</div>
					</article>

					<article class="post-list full-img">
						<div class="post-img" style="background-image: url('assets/img/blog/2.jpg')">
							<div class="item-overlay">
								<a href="#"><span class="icon-binocular"></span></a>
							</div>
						</div>
						<div class="post-summary">
							<header>
								<h4 class="post-title">
									<a href="#">Like Nothing I’ve Seen</a>
								</h4>
								<p class="byline author vcard">
									<span class="italic">By</span>&nbsp;
									<a href="#" rel="author">Keira Hopman</a>
									<span class="dot">·</span>
									<span class="updated">September 1, 2016</span>
									<span class="dot">·</span>
									<span class="comments"><i class="fa fa-comment"></i>
										<a href="#">1 Comment</a> 
									</span>
								</p>
							</header>
							<div class="post-excerpt">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione cupiditate, expedita maxime voluptate iste eius fuga amet voluptas, unde exercitationem itaque praesentium velit facilis totam?
							</div>
							<a href="blog_single_center.html" class="btn btn-primary hvr-sweep-to-right">Read More</a>
						</div>
					</article>

					<article class="post-list full-img">
						<div class="post-img" style="background-image: url('assets/img/blog/3.jpg')">
							<div class="item-overlay">
								<a href="#"><span class="icon-binocular"></span></a>
							</div>
						</div>
						<div class="post-summary">
							<header>
								<h4 class="post-title">
									<a href="#">Every Corner has a Story </a>
								</h4>
								<p class="byline author vcard">
									<span class="italic">By</span>&nbsp;
									<a href="#" rel="author">Levi Pottinger</a>
									<span class="dot">·</span>
									<span class="updated">October 10, 2016</span>
									<span class="dot">·</span>
									<span class="comments"><i class="fa fa-comment"></i>
										<a href="#">1 Comment</a> 
									</span>
								</p>
							</header>
							<div class="post-excerpt">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum molestias, delectus atque animi error, quos alias neque maxime adipisci architecto totam qui consectetur. Accusamus, minima.
							</div>
							<a href="blog_single_center.html" class="btn btn-primary hvr-sweep-to-right">Read More</a>
						</div>
					</article>

					<article class="post-list full-img">
						<div class="post-img" style="background-image: url('assets/img/blog/4.jpg')">
							<div class="item-overlay">
								<a href="#"><span class="icon-binocular"></span></a>
							</div>
						</div>
						<div class="post-summary">
							<header>
								<h4 class="post-title">
									<a href="#">No Particular Place to Go</a>
								</h4>
								<p class="byline author vcard">
									<span class="italic">By</span>&nbsp;
									<a href="#" rel="author">Susan N. Lynch</a>
									<span class="dot">·</span>
									<span class="updated">October 27, 2016</span>
									<span class="dot">·</span>
									<span class="comments"><i class="fa fa-comment"></i>
										<a href="#">1 Comment</a> 
									</span>
								</p>
							</header>
							<div class="post-excerpt">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rerum, saepe consectetur doloremque ipsa hic vel, voluptatem ipsum iusto, cumque possimus! At cupiditate, sint aperiam.
							</div>
							<a href="blog_single_center.html" class="btn btn-primary hvr-sweep-to-right">Read More</a>
						</div>
					</article>

					<article class="post-list full-img">
						<div class="post-img" style="background-image: url('assets/img/blog/5.jpg')">
							<div class="item-overlay">
								<a href="#"><span class="icon-binocular"></span></a>
							</div>
						</div>
						<div class="post-summary">
							<header>
								<h4 class="post-title">
									<a href="#">Showering in the Ocean</a>
								</h4>
								<p class="byline author vcard">
									<span class="italic">By</span>&nbsp;
									<a href="#" rel="author">James B. Camacho</a>
									<span class="dot">·</span>
									<span class="updated">December 13, 2016</span>
									<span class="dot">·</span>
									<span class="comments"><i class="fa fa-comment"></i>
										<a href="#">1 Comment</a> 
									</span>
								</p>
							</header>
							<div class="post-excerpt">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit beatae commodi quis porro, quia eaque modi dicta praesentium consectetur ullam minima eveniet fugiat. Eveniet, vitae.
							</div>
							<a href="blog_single_center.html" class="btn btn-primary hvr-sweep-to-right">Read More</a>
						</div>
					</article>

					<div class="pagination-wrap">
	<span class="total">Total 127</span>
	<nav class="pull-right">
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="First">First</a>
			</li>
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item active"><a class="page-link" href="#">2</a></li>
			<li class="page-item"><span class="page-link">..</span></li>
			<li class="page-item"><a class="page-link" href="#">99</a></li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Last">Last</a>
			</li>
		</ul>
	</nav>
	<div class="clearfix"></div>
</div>



				</div>
				<div class="col-sm-4">
					<div class="sidebar">
	<div class="border-box">
		<div class="box-title">Search Trips</div>
		<div class="input-group">
			<input type="text" class="form-control" placeholder="Search Site">
			<div class="input-group-btn">
				<button class="btn btn-primary">Search</button>
			</div>
		</div>
	</div>
	
	<div class="border-box">
		<div class="box-title">Recent Blog Post</div>
		<div class="recent-post-list">
			<div class="recent-post">
				<div class="author-img"><img src="assets/img/team/1-sm.jpg" class="media-object" alt=""></div>
				<div class="post-summary">
					<p>Lorem ipsum dolor sit amet, cons adipisicing elit.</p>
					<div class="byline">
						<span class="updated">Aug 24, 2015</span>
						<span class="dot">·</span>
						<span class="italic">By</span>&nbsp;
						<a href="#" rel="author" class="fn">Aaron D. Cullen</a>
					</div>
				</div>
			</div>
			<div class="recent-post">
				<div class="author-img"><img src="assets/img/team/2-sm.jpg" class="media-object" alt=""></div>
				<div class="post-summary">
					<p>Lorem ipsum dolor sit amet, cons adipisicing elit.</p>
					<div class="byline">
						<span class="updated">Jan 24, 2015</span>
						<span class="dot">·</span>
						<span class="italic">By</span>&nbsp;
						<a href="#" rel="author" class="fn">Keira Hopman</a>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="border-box">
		<div class="box-title">Categories</div>
		<ul class="list">
			<li class="cat-item"><a href="#">Creative (2)</a></li>
			<li class="cat-item"><a href="#">Design (9)</a></li>
			<li class="cat-item"><a href="#">Image (2)</a></li>
			<li class="cat-item"><a href="#">Photography (9)</a></li>
			<li class="cat-item"><a href="#">Videos (4)</a></li>
			<li class="cat-item"><a href="#">WordPress (4)</a></li>
		</ul>
	</div>

	<div class="border-box">
		<div class="box-title">Tags</div>
		<div class="tagcloud">
			<a href="#" class="tag-link" title="2 topics">artwork</a> 
			<a href="#" class="tag-link" title="2 topics">Photo</a> 
			<a href="#" class="tag-link" title="3 topics">Video</a> 
			<a href="#" class="tag-link" title="1 topic">Videos</a></div>
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
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quia, architecto? A, reiciendis eveniet! Esse est eaque adipisci natus rerum laudantium accusamus magni.</p>
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
				<p>Subscribe to our weekly newsletter to get news and update</p>
				<br>
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Your Email">
					<div class="input-group-btn">
						<button class="btn btn-primary">Subscribe</button>
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
							<li><a href="https://twitter.com/moldthemes" class="icon-twitter"></a></li>
							<li><a href="mailto:info@moldthemes.com" class="icon-mail"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="copy"><span>&copy;</span> Copyright Mold Discover, 2017</div>
</footer>
    </div>
</template>
<script>
export default {
  name: 'Blogs',
  props: {
    msg: String
  }
};

</script>

<style scoped>

</style>