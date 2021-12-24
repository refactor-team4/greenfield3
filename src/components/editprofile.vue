<template>
 <div class="container rounded bg-white mt-5 mb-5" id="edit">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="uploadImage">
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Update Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Username</label><input type="text" class="form-control" placeholder="first name" v-model=" userName"></div>
                    <div class="col-md-6"><label class="labels">Full Name </label><input type="text" class="form-control" v-model="firstName" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" v-model="phoneNumber"></div>
                    <div class="col-md-12"><label class="labels">Address </label><input type="text" class="form-control" placeholder="enter address" v-model="Adress"></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter state" v-model="myState"></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter Area " v-model="area"></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" v-model="email"></div>
    
                </div>
                <!-- <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" v-model="country"></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div> -->
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button"  v-on:click=" editdata" >Save Profile</button></div>
            </div>
        </div>
        <!-- <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
 props:["data"],
 data(){
    return {
    userName:"",
    firstName:"",
    Adress :"",
    myState :"",
    area :"",
    phoneNumber:"",
    email:"" 
   } 
},

  methods:{

      uploadImage(e) {
            const files = e.target.files;
            const data = new FormData();
            data.append("file", files[0]);
            data.append("upload_preset", "easy-life");
            axios.post("https://api.cloudinary.com/v1_1/REZmed/image/upload", data)
                .then(({ data }) => {
					console.log(data)
                    this.profilePicture= data.secure_url;
					this.uploadedImg=!this.uploadedImg              
                    })
                .catch((err) => console.error(err));
        },
       fetchdata(){
    axios.get('http://localhost:5000/users/myprofile')
    .then(response => {console.log(response)
    });
   
     },
      editdata(){
       const id=1
       const data={ 
    userName:this.userName,
    firstName:this.firstName,
    Adress : this.Adress,
    myState :this.myState,
    area :this.area ,
    phoneNumber:this.phoneNumber,
    email:this.email
   } 
   axios.put(`/users/editprofile/${id}`,data)
   .then(response => {
    console.log(response);
   })
   .catch((err)=> console.log(err))
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background: #477427e8
}

.form-control:focus {
    box-shadow: none;
    border-color: #477427e8
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

.back:hover {
    color: #477427e8;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #477427e8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #477427e8
}
</style>
