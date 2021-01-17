<template>

  <div id="boxSelectUser" class="bg-black">
    <div class="card card-header">
    <h1 v-html="name"></h1>
    </div>
        <div class="card card-body">
            <span class="w-100 text-right" v-html="message"></span>        
        </div>
    <button class="btn btn-primary btn-block btn-Choose" id="btn1" v-html="btnOk" @click="btnYes">
    </button>
    <button class="btn btn-primary btn-block btn-Choose" id="btn2" v-html="btnNo" @click="btnNO">
    </button>

<button class="btn btn-primary btn-block btn-Choose d-none" id="btn3" v-html="btnRes" @click="nextObject">
    </button>
  </div>
</template>

<script>
export default {
data(){
    return{
        name:"روز دوازدهم",
        btnOk:"باشه قول میدم",
        btnNo:"نه هرچی میدونم رو میگم",
        btnRes:"روز بعدی",
        message:`
        
        <h6 class="borderRadius text-white p-2 bg-primary" style="direction:rtl">
            در بیمارستان شما بهوش آمدی پس از ضربه سختی که خوردی 
            همان مردی(فرد مافیا) که باهاش درگیر شدی حالا اومده بیمارستان
            ازت میخواد قول بدی که چیزی به کاراگاه نگی 
                </h6>
        `,
        nextDay:false,
        status:"bad",

    }
},
methods:{
    nextObject(){
      
    },
    btnYes(){
      
    },
    btnNO(){
        alert();
        if(this.nextDay==false)
        {
            document.querySelector("#btn1").style.display="none";
            document.querySelector("#btn2").style.display="none";
            document.querySelector("#btn3").classList.add("d-block");
            this.message=`
            کاراگاه ها و پلیس ها پشت در بودن
            
            .با سروصدایی که کردی سریع اومدن و اونو گرفتنش

            `;
        }else{

        }
    }
},
created(){
  
}


}
</script>

<style>

</style>