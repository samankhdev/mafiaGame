<template>
{{GetName}}
  <div class="card" id="ShowNames">
      <div class="card card-header">
          <h1>شرکت کننده گان</h1>
      </div>
      <div class="card card-body">
            <ul>
                <li class="text-danger">شما:  {{YourName}}</li>
                <li v-for="name in names" :key="name.id">

{{name.name}}


                </li>
            </ul>
      </div>
      <div class="card card-footer">
          <button class="btn btn-outline-danger">بعدی</button>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        names:[
            {id:1,name:"حسن مرادی"},
            {id:2,name:"محمد پیوندی"},
            {id:3,name:"سارا میرشکاری"},
            {id:4,name:"مهدی رسولی"},
            {id:5,name:"رضا پیوندی"},
            {id:6,name:"سینا"},
            {id:7,name:"حسین"},
            {id:8,name:"محسن"},
            {id:9,name:"سلمان"},
            {id:10,name:"قاسم"},
            {id:11,name:"غلامرضا"},
            {id:12,name:"صادق گنجی"},
            {id:13,name:"مختار باهنر"},
            {id:14,name:"محمد کشتکار"},
            {id:15,name:"علی محمدی"}
        
        ],
        YourName:''
    }
},
computed:{
    GetName(){
            //get Name
            var name=localStorage.getItem("username").toString();
            this.YourName=name;
    }
}
}
</script>

<style>

</style>