<template>

  <div id="boxSelectUser" class="bg-black">
    <div class="card card-header">
    <h1 v-html="name"></h1>
    </div>
        <div class="card card-body">
            <span class="w-100 text-right" v-html="message"></span>        
        </div>
    <button class="btn btn-primary btn-block btn-Choose" @click="nextObject" v-html="btnName"></button>

  </div>
</template>

<script>
export default {
data(){
    return{
        name:"title",
        message:"message",
        btnName:"فهمیدم ",
        currentDay:1,
        days:[
            {
                id:1,
                name:"روز‌ یکم",
                message:`<h6 class="borderRadius text-white p-2 bg-primary" style="direction:rtl">
                راوی:من در طول بازی به شما کمک می کنم قربان!
                </h6>
                
                `,
                btnNames:["فهمیدم"]
            },
            {
                 id:2,
                name:"روز‌ یکم",
                message:`<h2 class="borderRadius text-white p-2 bg-primary" style="direction:rtl">
                دزد به خانه شما آمده او چاقو به همراه دارد آیا با او درگیر می شوید؟
                </h2>
                `,
                btnNames:["فهمیدم"]
            },{
                id:3,
                name:"روز هفتم"
            }
            ,{
                id:4,
                name:"روز دوازدهم"
            }
            ,{
                id:5,
                name:"روز پانزدهم"
            }
            ,{
                id:6,
                name:"روز بیستم"
            }
            ,{
                id:7,
                name:"روز بیست‌و‌پنجم"
            }
            ,{
                id:8,
                name:"روز سی و یکم"
            }
            
        ]
    }
},
methods:{
    nextObject(){
        this.currentDay++;

    }
},
created(){
  if(this.currentDay==1){
        this.name=this.days[0].name
    this.message=this.days[0].message
    this.btnName=this.days[0].btnNames
  }
}


}
</script>

<style>

</style>