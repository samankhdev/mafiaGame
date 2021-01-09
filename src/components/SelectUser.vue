<template>
  <div id="boxSelectUser" class="bg-white p-3">
    <h1>انتخاب بازیکن</h1>
<div id="boxSelectUser-checkboxs">
  <div class="form-group frm-chooseUser">
      <input type="text" class="form-control p-2" placeholder="نام خود را به عنوان شرکت کننده وارد نمایید..." v-model="nameUser">
  </div>
  <button class="btn btn-primary btn-block" @click="setUser">بعدی</button>
</div>

  </div>
</template>

<script>
export default {
data(){
return{
  nameUser:""
}
},

methods:{
  setUser(){
    if(!this.nameUser.toString()==""||!this.nameUser.toString()==null)
    {
        localStorage.clear();
        localStorage.setItem("username",`${this.nameUser}`);
        console.log("ok");
        window.location.replace("/show-names");
    }else{
      alert("لطفا نام خود را وارد نمایید.");
    }
  }
}
}
</script>

<style>
@import url("../../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../../node_modules/bootstrap/dist/css/bootstrap-grid.css");
</style>