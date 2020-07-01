<template>
  <div id="app">
    <nav id="navegacao">
        <ul>
          <li id="home">
            <a href="/home">
              <figure><img src="./img/icon1.png" title="Home" /></figure>
            </a>
          </li>
          <li>
            <a href="/clients">
              <figure><img src="./img/icon6.png" title="Clients" /></figure>
            </a>
          </li>
          <li>
            <a href="/local">
              <figure><img src="./img/icon4.png" title="Localização" /></figure>
            </a>
          </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
     user-select: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
}
#navegacao{
  width: 3.8%;
  height: 100%;
  margin-left: 0.1%;
  background-color: rgba(0,0,0,0);
  position: fixed;
  display: grid;
  grid-template-columns: 100%;
  z-index: 91;
  transition: all .2s linear;
}
#navegacao a{
  margin: 2% 0 0 5%;
  color: rgba(170,170,170,0.8);
  font-size: 3vh;
  text-decoration: none;
  transition: 0.3s;
  text-justify: auto;
}
#navegacao li figure{
  width: 100%;
  height: 75%;
  border: 1px solid;
  border-radius: 6px;
  transition: 0.4s;
}
#navegacao li figure img{
  width: 90%;
  height: 90%;
  margin: 4% 0 0 2%;
}
#navegacao ul{
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}
#navegacao ul li{
  width: 100%;
  height: 10%;
  margin: 1% 0 0 0;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}
#navegacao ul li figure:hover{
  box-shadow: 1px 2px 2px #FFF;
}
</style>
