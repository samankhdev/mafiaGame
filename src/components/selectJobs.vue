<template>
 <div class="card" id="ShowNames">
      <div class="card card-header">
          <h1>شرکت کننده گان</h1>
      </div>
      <div class="card card-body">
            <ul class="container-fluid row table-hover">
                <div class="col col-6">
                    <li class="text-danger">{{username}}:</li>
                <li v-for="name in players[0]" :key="name.id">
                    {{name.name}}:

                </li>
                </div>
                <div class="col col-6">
                    <li v-for="job in jobs" :key="job">
                        {{job}}
                    </li>
                </div>
            </ul>
      </div>
      <div class="card card-footer">
          <router-link to="select-jobs" class="btn btn-outline-danger">بعدی</router-link>
      </div>
  </div></template>

<script>
export default {
data(){
    return{
        jobs:[
        "اسنایپر",
        "دکتر",
        "قاضی",
        "مافیا",
        "کاراگاه",
        "شهردار"
    
        ],
        players:[],
        username:""
    }
},
created(){
const players=JSON.parse(localStorage.getItem("players"))
const username =localStorage.getItem("username");
this.username=username;
this.players.push(players)
}
}
</script>

<style>

</style>