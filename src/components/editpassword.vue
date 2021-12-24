<template>
        <div class="changep">
                    <div class="card card-outline-secondary">
                        <div class="card-header">
                            <h3 class="mb-0">Change Password</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off">
                                <div class="form-group">
                                    <label for="inputPasswordOld">Current Password</label>
                                    <input type="password" class="form-control" id="inputPasswordOld" v-model="password">
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew">New Password</label>
                                    <input  type="password" class="form-control" id="inputPasswordNew" v-model="password">
                                    <span class="form-text small text-muted">
                                            The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                        </span>
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNewVerify">Verify</label>
                                    <input type="password" class="form-control" id="inputPasswordNewVerify" v-model="password">
                                    <span class="form-text small text-muted">
                                            To confirm, type the new password again.
                                        </span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="profile-button">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
          </div>             
</template>
<script>
import axios from "axios"; 
export default {
   
     props:{
    userName:password,
   
 },
    editpassword() {
        
    },
}
</script>

<style scoped>
.changep{
margin-left: 25%;
margin-right: 25%;
}

.profile-button {
    background: #477427e8;
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #477427e8
}

.profile-button:focus {
    background: #477427e8;
    box-shadow: none
}

.profile-button:active {
    background: #477427e8;
    box-shadow: none
}

</style>
                                