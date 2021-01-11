<template>
 <div class="card" id="ShowNames">
      <div class="card card-header">
          <h1>شرکت کننده گان</h1>
      </div>
      <div class="card card-body">
            <ul class="container-fluid row">
                <div class="col col-6">
                    <li class="text-danger">
                        <span class="badge badge-danger">
                            {{username}}:
                        </span>
                    </li>
                <li v-for="name in players[0]" :key="name.id">
                    <span class="badge badge-danger">
                        {{name.name}}:
                    </span>

                </li>
                </div>
                <div class="col col-6">
                    <li v-for="job in jobs" :key="job.id">
                        <span :class="`text-${job.color}`">{{job.name}}</span>
                    </li>
                </div>
            </ul>
      </div>
      <div class="card card-footer">
          <router-link to="select-jobs" class="btn btn-outline-danger">شروع</router-link>
      </div>
  </div></template>

<script>
export default {
data(){
    return{
        jobs:[
        
        {id:1,name:"ساقی",color:"danger"},
        {id:2,name:"دزد",color:"black-50"},
        {id:3,name:"گودفادر",color:"black"},
        {id:4,name:"رییس مافیا",color:"warning"},
        {id:5,name:"کاراگاه",color:"info"},
        {id:6,name:"شهردار",color:"primary"}
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