<template>
  <div class="Local">
      <section id="r_esquerdo">
          <fieldset>
              <legend>Contato</legend>
              <label>Nome:Locadora Street fighter</label><br />
              <label>Telefone:(21) 3899-6646</label><br />
              <label>Site:<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_new">locadorastreet.com</a></label><br />
              <label>Local:Um lugar por ai, 6001 - LOJA 015 - Terra do nunca, Estados Unidos - USA, 20530-070</label><br />
              <label>Git Cris:<a href="https://github.com/cristianleidens/" target="_new"> HERE</a></label><br />
              <label>Git Felipe:<a href="https://github.com/FelipeLogica" target="_new"> HERE</a></label><br />
          </fieldset>
      </section>
      <section id="r_direito">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4112.393846245819!2d-51.183085217336455!3d-29.919102528472273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197aa64d281673%3A0x85c9898b08849a2!2sCanoas!5e0!3m2!1spt-BR!2sbr!4v1593608897072!5m2!1spt-BR!2sbr" id="mapa" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </section>
  </div>
</template>

<script>
export default {
  name: 'local',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
   user-select: none;
}
.Local {
  width: 100%;
  height: 100%;
  display: flex;
  color: rgba(170,170,170,1);
  background-image: url(./img/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right;
}
#r_esquerdo{
    width: 40%;
    height: 100%;
    margin: 2% 0 0 5%;
}
#r_esquerdo fieldset{
    width: 70%;
    height: 32%;
    margin: 20% 0 0 15%;
    font-family: Cambria;
    font-size: 3vh;
}
#r_direito{
    width: 40%;
    height: 60%;
    margin: 10% 0 0 5%;
}
#r_direito{
    box-shadow: 1px 1px 30px #000, -1px 0px 30px #000;
}
#mapa{
    width: 100%;
    height: 100%;
}
</style>
