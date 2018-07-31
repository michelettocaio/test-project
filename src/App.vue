<template>
  <div id="app" class="app-container">
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>


<style lang="scss">
body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  
}


.app-container {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Patua One', cursive;
  .app-content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}

#app {
 
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
