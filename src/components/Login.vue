<template>
	
  <div class="login" style="background-image: url('assets/img/home_img/mountain.jpg');height:100vh"  >
    

    <div class="main">
      <div class="form-box">
        <div class="form-head">
          <div class="mold-logo">
            <div class="mold">Mold</div>
            <div class="logo"></div>
            <div class="logo-txt">Discover</div>
          </div>
        </div>
        <div class="form-body">
          <form>
            <div class="form-group">
              <label>User Name</label>
              <div class="input-group">
                <div class="input-group-addon icon-mail"></div>
                <input type="text" class="form-control" placeholder="User Name" />
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <div class="input-group">
                <div class="input-group-addon icon-lock"></div>
                <input type="password" class="form-control" placeholder="Password" />
              </div>
            </div>

            <button type="submit" class="btn btn-primary hvr-sweep-to-right">Log In</button>
            <router-link to="/signup"><button type="submit" class="btn btn-primary hvr-sweep-to-right">Create New Account</button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: "Login",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
