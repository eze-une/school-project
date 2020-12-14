<template>
   <div class="header">
          <ul>
              <li id="logo">TEAMER</li>
              <li> <router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li>CLASSES</li>
              <li>NEWS</li>
              <li><router-link to="/profile"></router-link></li>
          </ul>
       <router-view/>
   </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header{
        margin: auto;
        height: 50px;
        text-align: center;
        background: #fff;
    }
    ul{
        display: flex;
        list-style:none;
    }
    li{
        padding: 2px 10PX;
    }
    #logo{
        margin-right:auto;
        font-size: 2rem;
        color: #311b7e;
    }

</style>