const app = Vue.createApp({
  data() {
    return {
      change: true,
      showname: true,
      Name: "Akash Pawar",
      Role: "Software Developer",
      Age: "25",
      names: [
        {
          Name: "Akash Pawar",
          Role: "Software Developer",
          Exp: "Fresher",
          isGood: true,
        },
        {
          Name: "Krishnan",
          Role: "Software Destroyer",
          Exp: "-5 years",
          isGood: false,
        },
      ],
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    ChangeName() {
      (this.Name = "Krishnan Naidu"),
        (this.Role = "Software Destroyer"),
        (this.Age = "-5");
    },
    ShowHide() {
      this.showname = !this.showname; //toggle between True and false
    },
    handleEvent(e) {
      console.log(e, e.type);
    },
    handleMouseMove(e) {
      (this.x = e.offsetX), (this.y = e.offsetY);
    },
    goodBad(naMe) {
      console.log("You have clicked <li>");
      naMe.isGood = !naMe.isGood;
    },
    // async getMaleUser() {
    //     const res = await fetch("https://randomuser.me/api");
    //     const { results } = await res.json();

    //     if (results[0].gender == "male") {
    //       console.log(results);
    //       (this.firstName = results[0].name.first),
    //         (this.lastName = results[0].name.last),
    //         (this.email = results[0].email),
    //         (this.gender = results[0].gender),
    //         (this.picture = results[0].picture.large);
    //     }
    //   },
    //   async getFemaleUser() {
    //     const res = await fetch("https://randomuser.me/api");
    //     const { results } = await res.json();

    //     if (results[0].gender == "female") {
    //       console.log(results);
    //       (this.firstName = results[0].name.first),
    //         (this.lastName = results[0].name.last),
    //         (this.email = results[0].email),
    //         (this.gender = results[0].gender),