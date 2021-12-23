<template>
    <div class="login" style="background-image: url('assets/img/home_img/mountain.jpg')">
	
	<div class="form-box">
		<div class="form-head">
			<div class="mold-logo">
				<div class="mold">Mold</div>
				<div class="logo"></div>
				<div class="logo-txt">Discover</div>
			</div>
			<hr>
			<div class="txt">Sign Up</div>
		</div>
		<div class="form-body">
			<form>
				<div class="form-group">
					<label>User Name</label>
					<div class="input-group">
						<div class="input-group-addon icon-user"></div>
						<input type="text" class="form-control" placeholder="User Name"/>
					</div>
				</div>
				<div class="form-group">
					<label>Email Address</label>
					<div class="input-group">
						<div class="input-group-addon icon-mail"></div>
						<input type="text" class="form-control" placeholder="Your Email Address"/>
					</div>
				</div>
				<div class="form-group">
					<label>Address</label>
					<div class="input-group">
						<div class="input-group-addon icon-locate"></div>
						<input type="text" class="form-control" placeholder="Your Address"/>
					</div>
				</div>
				<div class="form-group">
					<label>Password</label>
					<div class="input-group">
						<div class="input-group-addon icon-lock"></div>
						<input type="password" class="form-control" placeholder="Password"/>
					</div>
				</div>
				<div class="form-group">
					<label>Confirm Password</label>
					<div class="input-group">
						<div class="input-group-addon icon-lock"></div>
						<input type="password" class="form-control" placeholder="Password"/>
					</div>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox"> Remember me
					</label>
				</div>
				<br>
				<button type="submit" class="btn btn-primary hvr-sweep-to-right">Log In</button>
			</form>
		</div>
	</div>
    </div>
</template>