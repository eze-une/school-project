<template>
    <div class="row">
        <div class="leftcolumn">
            <div class="card left">
                <button>Classes</button>
                <button v-on:click="change">Attendence</button>
                <button>Mark List</button>
                <button>Assigments</button>
                <button>Submissions</button>
                <button>Teaching material</button>
            </div>
        </div>
        <div class="rightcolumn">
            <div class="card">
                <h1>{{message}}</h1>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Classescomp',
    data:{
        message: "content"
    },
    methods:{
        change:function(){
            this.message= "attendece content"
        }
    }
}
</script>

<style scoped>
    .row{
        margin:  2rem;
        padding-bottom: 10px;
        align-content: center;
        min-height: 100vh;
    }
    .leftcolumn{
        float:left;
        width:25%;
        /* border-radius: 5px; */
    }
    .rightcolumn{
        float:left;
        width:74%;
        padding-left: 10px;
        align-content: center;
    }
    .card{
        background: #fffefe;
        padding:20px;
        margin-top:20px;
        text-align: center;
    }
    .card.left{
        text-align: left;
    }
    @media screen and (max-width: 800px) {
    .leftcolumn, .rightcolumn {   
        width: 100%;
        padding: 0;
        }
    }
</style>