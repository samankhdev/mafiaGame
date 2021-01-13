<template>

  <div id="boxSelectUser" class="bg-black">
    <div class="card card-header">
    <h1 v-html="name"></h1>
    </div>
        <div class="card card-body">
            <span class="w-100 text-right" v-html="message"></span>        
        </div>
    <button class="btn btn-primary btn-block btn-Choose" @click="nextObject" v-html="btn[0].name"></button>

  </div>
</template>

<script>
export default {
data(){
    return{
        name:"راهنما",
        message:`
        
        <h6 class="borderRadius text-white p-2 bg-primary" style="direction:rtl">
            سلام من راوی هستم به شما در طول بازی کمک می کنم:)
                </h6>
        `,
        btn:[
            {
                id:1,
                name:"فهمیدم"
            }
        ]

    }
},
methods:{
    nextObject(){
        
    }
},
created(){
  
}


}
</script>

<style>

</style>