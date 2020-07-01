<template>
  <section id="home" class="pagina">
                <section id="topo">
                    <figure><img src="./img/cabecalho.png" /></figure>
                </section>
                <section id="txt">
                    <section id="texto">
                        <section id="quemsomos">
                                <h1>Quem Somos</h1>
                                <p>Uma locadora de jogos, aqui você compra ou aluga seus jogos de qualquer plataforma, alugue já! tambem trabalhamos como lan house no endereço na ultima aba do menu!</p>
                        </section>
                    </section>
                </section>
            </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face{
    font-family: "gta";
    src: url('./fonts/gta.ttf')
}
*{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
   user-select: none;
}
#home{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(./img/background.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right;
}
#home{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-shadow: 3px 3px 6px #000
}
#quemsomos{
    width: 50%;
    height: 40%;
    margin: 2% 0 0 24%;
}
#quemsomos h1{
    font-size: 4vh;
    color: rgba(200,200,200,0.9);
}
#topo{
    width: 93%;
    margin-left: 5%;
}
#topo img{
    margin-left: -7%;
    margin-top: -10%;
    width: 30%;
}
#texto{
    align-items: flex-start;
    flex-direction: column;
    margin: 0 0 0 16%;
}
#texto p{
    font-size: 22px;
    font-family: gta;
    text-align: justify;
    color: rgba(200,200,200,0.9);
}
</style>
