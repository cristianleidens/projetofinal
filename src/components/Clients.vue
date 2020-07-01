<template>
  <section id="clients">
    <form id="logggin" v-if="this.login.enter == 0">
      <section id="xlogin">
      <section class="loginfiller">
        <input class="logininput" type="text" v-model="login.user" placeholder="User" size="20" maxlength="20" title="User" required>
      </section>
      <section class="loginfiller">
        <input class="logininput" type="text" v-model="login.pass" placeholder="Password" size="20" maxlength="20" title="Password" required>
      </section>
      </section>
      <button class="submitbutton" id="loginbutton" @click="loginUser">Login</button>
    </form>
    <section id="clients2" v-if="this.login.enter == 1">
  <section id="number1">
    <!-- SAVE -->
    <!-- SAVE -->
    <form id="subscribertable" @submit.prevent="saveAndUpdateClient">
      <section class="filler">
        <input class="subscriber" type="text" v-model="client.name" placeholder="Client Name" size="200" maxlength="200" title="Client Name" required>
      </section>
      <section class="filler">
        <input class="subscriber" type="number" min="0" max="999" v-model="client.age" placeholder="Client Age" title="Client Age" required>
      </section>
      <section class="filler">
        <input class="subscriber" type="text" min="0" v-model="client.cpf" placeholder="Client CPF" size="14" maxlength="14" title="Client CPF" required>
      </section>
      <section class="filler">
        <input class="subscriber" type="email" min="0" v-model="client.email" placeholder="Client Email" size="200" maxlength="200" title="Client Email" required>
      </section>
      <section class="filler">
        <input class="subscriber" type="phone" min="0" v-model="client.phone" placeholder="Client Phone" size="9" maxlength="9" title="Client Phone" required>
      </section>
      <div id="submithouse">
        <button class="submitbutton">Submit</button>
        <button v-show="client.id" @click="cancelUpdate" class="submitbutton">Cancel</button>
      </div>
    </form>
    <!-- SAVE -->
    <!-- SAVE -->

    <!-- FINDBYID -->
    <!-- FINDBYID -->
    <form @submit.prevent="findById">
      <section id="findhouse">
        <input type="text" v-model="client.id" id="findinput" class="subscriber" placeholder="ID of Client">
        <button id="searchbutton">Search Client</button>
      </section>
      <section v-show="findClient.id" id="hiddentable">
        <h3>Client: </h3>
        <p id="select">
          ID: {{findClient.id}} <br>
          Name: {{findClient.name}} <br>
          Age: {{findClient.age}} <br>
          CPF: {{findClient.cpf}} <br>
          Email: {{findClient.email}} <br>
          Phone: {{findClient.phone}} <br>
        </p>
      </section>
    </form>
    <!-- FINDBYID -->
    <!-- FINDBYID -->
  </section>
    <!-- FINDALL -->
    <!-- FINDALL -->
    <table>
      <thead>
        <th class="linhacima">ID</th>
        <th class="linhacima">Name</th>
        <th class="linhacima">Age</th>
        <th class="linhacima">CPF</th>
        <th class="linhacima">Email</th>
        <th class="linhacima">Phone</th>
        <th class="linhacima">Register Date</th>
      </thead>
      <tfoot>
        <th></th>
        <th>Number of Clients: {{clients.length}}</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tfoot>
      <tbody>
        <tr v-for="client in clients" :key="client.id">
          <td class="linhacima">{{client.id}}</td>
          <td class="linhacima">{{client.name}}</td>
          <td class="linhacima">{{client.age}}</td>
          <td class="linhacima">{{client.cpf}}</td>
          <td class="linhacima">{{client.email}}</td>
          <td class="linhacima">{{client.phone}}</td>
          <td class="linhacima">{{client.save}}</td>
          <th id="buttonhouse1">
            <button type="button" id="delete" class="submitbutton" @click="deleteClient(client)">Delete</button>
          </th>
          <th id="buttonhouse2">
            <button type="button" id="delete" class="submitbutton" @click="updateClient(client)">Edit</button>
          </th>
        </tr>
      </tbody>
    </table>
    <!-- FINDALL -->
    <!-- FINDALL -->


    </section>
  </section>
</template>
<script>
import ClientServices from '.././services/clientservices'

export default {
  data() {
    return {
      client: {
        id: '',
        name: '',
        age: '',
        cpf: '',
        email: '',
        phone: '',
        save: ''
      },
      findClient: {
        id: '',
        name: '',
        age: '',
        cpf: '',
        email: '',
        phone: '',
        save: ''
      },
      login: {
        user: '',
        pass: '',
        enter: 0
      },
      clients: []
    }
  },
  name: 'Clients',
  props: {
  },
  mounted() {
    this.listClients();
  },
  methods: {
    loginUser() {
      if(this.login.user == "admin" && this.login.pass == "locadora") {
        this.login.enter = 1;
        alert("You are logged in!");
      } else {
        alert("User or password incorrect!");
      }
    },
    listClients() {
      ClientServices.findAll().then(response => {
        this.clients = response.data;
      });
    },
    saveAndUpdateClient() {
      this.client.save = new Date().toLocaleString('pt-BR');
      if(!this.client.id) {
          //save
        ClientServices.save(this.client).then(response => {
          this.listClients();
          this.client = {};
          alert("Client Add sucessful!");
          return response;
        })
      } else {
        //update
        ClientServices.save(this.client).then(response => {
          this.client.save = Date().toLocaleString('pt-BR');
          this.listClients();
          this.client = {};
          alert("Client Updated sucessful!");
          return response;
        });
      }
    },
      deleteClient(client) {
        if(confirm("You realy want delete this client?")) {
          ClientServices.delete(client).then(response => {
            this.listClients();
            alert("Client deleted sucessful!");
            return response
        });
      }
    },
    findById() {
      ClientServices.findById(this.client).then(response => {
        this.findClient = response.data;
      });
    },
    updateClient(client) {
      this.client = client;
    },
    cancelUpdate() {
      this.client = {};
      alert("Update canceled!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face{
  font-family: "client";
  src: url('./fonts/Gatty-ExtraBold.otf');
}
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    transition: all .2s linear;
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
     user-select: none;
  }
  #clients {
    width: 100%;
    height: 100%;
    background-image: url(./img/background.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right;
  }
  #clients2{
    display: flex;
    align-items: center;
    font-family: client;
    margin: 10% 0 0 20%;
  }
  #number1{
    width: 20%;
    height: 100%;
    margin: 0 10% 0 -10%;
  }
  #submithouse{
    width: 100%;
    height: 20%;
    margin: 0 0 0 -18%;
  }
  #clients table{
    width: 75%;
    height: 100%;
    margin: 3% 0 0 -5%;
    text-align: left;
    font-size: 30px;
    color: rgba(170,170,170,1);
  }
  .linhacima{
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
  }
  #clients h1{
    margin: 2% 0 0 -6%;
    color: rgba(170,170,170,1);
  }
  #hiddentable{
    width: 80%;
    height: 80%;
    margin: 3% 0 0 -8.8%;
    text-align: center;
    font-size: 30px;
    color: rgba(170,170,170,1);
  }
  #select {
    -webkit-touch-callout: text;
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
     user-select: text;
  }
  #subscribertable{
    margin: 2% 0 0 0;
  }
  .subscriber{
    width: 80%;
    font-size: 24px;
    border-radius: 15px;
    text-align: center;
  }
  .subscriber:focus {
    box-shadow: 0px 0px 10px rgba(200,200,200,1);
  }
  .logininput{
    width: 20%;
    font-size: 24px;
    border-radius: 15px;
    text-align: center;
    margin: 0 0 0 0;
  }
  .logininput:focus {
    box-shadow: 0px 0px 10px rgba(200,200,200,1);
  }
  .filler{
    margin: 3% 0 0 -40%;
  }
  .submitbutton{
    margin: 2% 2% 0 0;
    display:inline-block;
    background:-webkit-gradient(radial, 203 -185, 224, 182 -345, 475, from(#AFAFB1), to(#605B5D));
    font-size:15px;
    padding:2% 15%;
    text-shadow:1px 1px 0px rgba(170,170,170,1);
    border-radius: 20px;
    text-decoration: none;
    list-style: none;
  }
  .submitbutton:hover {
    box-shadow: 0px 0px 5px rgba(200,200,200,1);
  }
  #logggin{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
  }
  #xlogin{
    width: 80%;
    margin: 10% 0 0 -1.5%;
  }
  #loginbutton{
    width: 10%;
    font-size: 25px;
    margin: 2% 0 0 -5%;
    padding:0;
  }
  .loginfiller{
    margin: 1% 0 0 -5%;
  }
  #buttonhouse1{
    display: flex;
    align-items: center;
  }
  #buttonhouse2{
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
  }
  #delete {
    width: 100%;
    height: 100%;
    margin: 1.8% 0 2% 0;
    display:inline-block;
    background:-webkit-gradient(radial, 203 -185, 224, 182 -345, 475, from(#AFAFB1), to(#605B5D));
    font-size: 15px;
    padding:2% 1%;
    border-radius: 20px;
    text-decoration: none;
    list-style: none;
    text-align: center;
  }
  #findhouse{
    display: flex;
    flex-direction: column;
  }
  #findinput{
    margin: 20% 0 0 -10%;
  }
  #searchbutton{
    width: 50%;
    height: 100%;
    margin: 2% 0 2% 5%;
    display:inline-block;
    background:-webkit-gradient(radial, 203 -185, 224, 182 -345, 475, from(#AFAFB1), to(#605B5D));
    font-size: 15px;
    padding:2% 0;
    border-radius: 20px;
    text-decoration: none;
    list-style: none;
    text-align: center;
  }
  #searchbutton:hover{
    box-shadow: 0px 0px 5px rgba(200,200,200,1);
  }
</style>
