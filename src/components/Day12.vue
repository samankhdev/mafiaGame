<template>

  <div id="boxSelectUser" class="bg-black">
    <div class="card card-header">
    <h1 v-html="name" ></h1>
    </div>
        <div class="card card-body">
            <span class="w-100 text-right" v-html="message"></span>        
        </div>
    <button class="btn btn-primary btn-block btn-Choose" id="btn1" v-html="btnOk" @click="btnNO">
    </button>
    <button class="btn btn-primary btn-block btn-Choose" id="btn2" v-html="btnNo" @click="btnYes">
    </button>

<button class="btn btn-primary btn-block btn-Choose d-none" id="btn3" v-html="btnRes" @click="nextObject">
    </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"مافیا بیدار میشود",
            message:`<p style="direction=rtl;text-align:righ">
            ...دادگاه برگزار میشود
            <br>
            ....قاضی وارد می شود همه قیام کنید
            <br>
            شما هم بین شاهد ها هستی میتونی همه چیز رو اقرار کنی و مافیا رو به خاک سیاه بنشونی<span class="badge badge-primary">:راوی</span>
            <br>
            قاضی٫کاراگاه٫پلیس٫شهردار مردم همه هستن تا شاهد این اتفاق تاریخی باشند
            <br>
            <br>
            <span class="alert alert-info">
            دیروز بهت پول زیادی پیشنهاد  دادن که شهادت ندی, اگه قبول کنی از دادگاه بیرون میری    
            </span>
            </p>`,
            btnOk:"پیشنهاد را قبول نمی کنم",
            btnNo:"قبول میکنم",
            btnRes:"برو به صفحه اصلی",
            nextDay:false
        }
    },
    methods:{
        btnNO(){
            if(this.nextDay==false){
                this.name="!بوممم مافیا برد";
                this.message=`
                <div class="alert alert-danger">
                <strong>بمب گذار </strong>همه رو داخل دادگاه ترکوند
                </div>
                :)دفعه بعدی بیشتر دقت کن یه جا همه جمع نشن
                `;
            document.querySelector("#btn1").classList.add("d-none");;
            document.querySelector("#btn2").classList.add("d-none");;
            document.querySelector("#btn3").classList.add("d-block");;
            }
        },
        nextObject(){
            window.location.replace("/");
        }
    }
}
</script>

<style>

</style>