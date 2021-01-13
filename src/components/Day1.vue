<template>

  <div id="boxSelectUser" class="bg-black">
    <div class="card card-header">
    <h1 v-html="name"></h1>
    </div>
        <div class="card card-body">
            <span class="w-100 text-right" v-html="message"></span>        
        </div>
    <button class="btn btn-primary btn-block btn-Choose" id="btn1" v-html="btnOk" @click="nextObject">
    </button>

    <div class="d-none" id="groupBtns">
    <button class="btn btn-primary btn-block btn-Choose" @click="btnYes">
    اره(درگیری)
    </button>
    
<button class="btn btn-primary btn-block btn-Choose" @click="btnNo">
نه(بزاری بره)
    </button>

    </div>

  </div>
</template>

<script>
export default {
data(){
    return{
        name:"راهنما",
        btnOk:"باشه فهمیدم",
        message:`
        
        <h6 class="borderRadius text-white p-2 bg-primary" style="direction:rtl">
            سلام من راوی هستم به شما در طول بازی کمک می کنم:)
                </h6>
        `,
        nextDay:false,
        status:"bad",

    }
},
methods:{
    nextObject(){
        if(this.nextDay==false)
        {
            this.name="روز یکم"
        this.message="دزد به خانه شما آمده ٫ او همراه خود چاقو دارد آیا با او درگیر می شوید؟"
        this.nextDay=true;
        document.querySelector("#groupBtns").classList.add("d-block");
        document.querySelector("#btn1").classList.add("d-none");
        }else{
                alert();
        }

    },
    btnYes(){
        this.name="..."
        this.message="اوه! شما به شدت زخمی شدید برادرتان شما را سریع به بیمارستان برد "
        document.querySelector("#groupBtns").classList.remove("d-block");
        document.querySelector("#btn1").classList.add("d-block");
        this.btnOk="روز بعدی..."
    },
    btnNo(){

    }
},
created(){
  
}


}
</script>

<style>

</style>