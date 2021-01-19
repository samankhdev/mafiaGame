<template>
{{GetName}}
  <div class="card" id="ShowNames">
      <div class="card card-header">
          <h1>شرکت کننده گان</h1>
      </div>
      <div class="card card-body">
            <ul class="">

                <div class="row d-flex justify-content-center">
                    <div class="col-6">
                    <div class="row">
                    <div class="col-12 text-danger">شهروند</div>
                    <div class="col-12 text-danger" v-for="name in names" :key="name.id">{{name.name}}</div>
                    
                    </div>
                    
                    </div>
                    <div class="col-6">
            <div class="row">
            
<div class="col-12 badge badge-danger">شما:{{YourName}}</div>
                    <div class="col-12 text-danger" v-for="job in jobs" :key="job.id">{{job.name}}</div>
                    </div>
                    </div>
                
                </div>
            </ul>
      </div>
      <div class="card card-footer">
          <button class="btn btn-outline-danger" @click="next">بعدی</button>
      </div>
  </div>
</template>

<script>
export default {
data(){
    
    return{
        YourName:"",
        names:[
            {id:1,name:"حسن مرادی"},
            {id:2,name:"محمد پیوندی"},
            {id:3,name:"سارا میرشکاری"},
            {id:4,name:"محمدرضا خشیار"},
            {id:5,name:"رضا پیوندی"},
            {id:6,name:"مهدی رسولی"},
            {id:7,name:"صادق محمدی"},
            {id:8,name:"باقر کشفی"},
            {id:9,name:"محسن عطار"},
            {id:10,name:"حمید یزدانپناه"},
            {id:11,name:"حسین پاکدست"}

            
        
        ],
        jobs:[
            {
                id:1,
                name:"بمب گذار"
            },
            {
                id:2,
                name:"رییس مافیا"
            },
            {
                id:3,
                name:"دزد"
            },
            {
                id:4,
                name:"قاتل"
            },
            {
                id:5,
                name:"دکتر"
            },
              {
                id:6,
                name:"مافیا"
            },
              {
                id:7,
                name:"دادستان"
            },
              {
                id:8,
                name:"قاضی"
            },
              {
                id:9,
                name:"کاراگاه"
            },
              {
                id:10,
                name:"اسنایپر"
            },
              {
                id:11,
                name:"وکیل"
            }
            

        ]
    }
},
methods:{
    next(){
        window.location.replace("/day1")
    }
},
computed:{
    GetName(){
            //get Name
            var name=localStorage.getItem("username").toString();
            this.YourName=name;
    },
   
},

created(){

const stringify=JSON.stringify(this.names)
console.log(stringify);
localStorage.setItem("players",stringify)
}
}
</script>

<style>

</style>