<template>
  <div>
    <h1 v-show="show">
      Hello Akash
      <span class="smiley" @click="gitAkash()"
        ><i class="fa fa-github" style="font-size: 36px"></i
      ></span>
      <span class="smiley" @click="instaAkash()"
        ><i class="fa fa-instagram" style="font-size: 36px"></i
      ></span>
    </h1>
    <h3 v-show="show" @click="click1()">Software Developer</h3>
    <h1 v-show="!show" v-bind:class="{ good: isGood }">
      Hello Krishnan
      <span class="smiley" @click="gitHari()"
        ><i class="fa fa-github" style="font-size: 36px"></i
      ></span>
      <span class="smiley" @click="instaHari()"
        ><i class="fa fa-instagram" style="font-size: 36px"></i
      ></span>
    </h1>
    <h3 v-show="!show" @click="click2()">Software Destroyer</h3>
    <button @click="display">Change name</button>
    <button @click="toggleTable">
      <span v-show="!table">show table</span>
      <span v-show="table">Hide table</span>
    </button>
    <table v-show="table" class="dataTable">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Role</th>
        <th @click="emailLink()">Email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.role }}</td>
        <td @click="emailLink()">{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "Home_1",
  data() {
    return {
      show: true,
      table: true,
      isGood: false,
      users: [
        {
          id: 1,
          name: "Akash",
          role: "Software Developer",
          email: "wohligakash@gmail.com",
        },
        {
          id: 2,
          name: "krishnan",
          role: "Software Destroyer",
          email: "wohligkrishnan@gmail.com",
        },
      ],
    };
  },
  methods: {
    display() {
      this.show = !this.show;
      this.isGood = !this.isGood;
    },
    toggleTable() {
      this.table = !this.table;
    },
    click1() {
      window.open("You have clicked on software developer");
      window.open(
        "https://www.google.com/search?client=firefox-b-d&q=software+developer"
      );
    },
    click2() {
      console.log("You have clicked on software destroyer");
      window.open(
        "https://www.google.com/search?client=firefox-b-d&q=software+destroyer"
      );
    },
    emailLink() {
      console.log("You have clicked on email");
      window.open(
        "https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDZBZqmHQzlxMTPHWSfvGLSWCKmsrMKhlJJpJBcrWMTVgtWKBkXvjhdZfWSHTfSJjvzsfTn"
      );
    },
    gitAkash() {
      console.log("You have clicked on gitAkash");
      window.open("https://github.com/Akashpawar11");
    },
    gitHari() {
      console.log("You have clicked on gitHari");
      window.open("https://github.com/harinaidu7");
    },
    instaAkash() {
      console.log("You have clicked on instaAkash");
      window.open("https://www.instagram.com/akash.k.pawar");
    },
    instaHari() {
      console.log("You have clicked on instaHari");
      window.open("https://www.instagram.com/hari.naidu77/");
    },
  },
};
</script>
<style scoped>
div table.dataTable {
  border: 1px solid black;
  text-align: center;
  display: block;
  margin: 10px auto;
  width: max-content;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid black;
  padding: 8px 15px;
}

h1 {
  border: 3px solid rgb(0, 44, 66);
  border-radius: 9px;
  padding: 10px 40px;
  width: 28%;
  margin: 0 auto;
}

h1:hover {
  cursor: pointer;
}

button {
  background-color: rgba(7, 205, 232, 0.13);
  border: 2px solid rgb(0, 36, 41);
  border-radius: 10px;
  height: 43px;
  width: 137px;
  text-align: center;
  cursor: pointer;
  font-family: calibri;
  font-weight: bold;
  color: rgb(49, 16, 0);
  font-size: 15px;
  margin: 10px 15px;
}

button:active {
  transform: scale(0.97);
}

h3:hover {
  cursor: pointer;
}
.smiley {
  margin: 0 20px 0 0;
  /* padding: 0 20px; */
}
.good {
  background-color: rgb(143, 212, 109);
}
</style>
