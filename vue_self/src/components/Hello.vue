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
    <h1 v-show="!show">
      Hello Krishnan<span class="smiley" @click="gitHari()"
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
    },
    toggleTable() {
      this.table = !this.table;
    },
    click1() {
      window.confirm("You have clicked on software developer");
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
