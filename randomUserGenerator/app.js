const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "JohnDoe@gmail.com",
      phone: "9876543210",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getMaleUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      if (results[0].gender == "male") {
        console.log(results);
        (this.firstName = results[0].name.first),
          (this.lastName = results[0].name.last),
          (this.email = results[0].email),
          (this.gender = results[0].gender),
          (this.picture = results[0].picture.large);
      }
    },
    async getFemaleUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      if (results[0].gender == "female") {
        console.log(results);
        (this.firstName = results[0].name.first),
          (this.lastName = results[0].name.last),
          (this.email = results[0].email),
          (this.gender = results[0].gender),
          (this.picture = results[0].picture.large);
      }
    },
  },
});
app.mount("#app");
