const app = Vue.createApp({
  data() {
    return {
      change: true,
      showname: true,
      Name: "Akash Pawar",
      Role: "Software Developer",
      Age: "25",
      x: 0,
      y: 0,
    };
  },
  methods: {
    ChangeName() {
      (this.Name = "Krishnan Naidu"),
        (this.Role = "Software Developer"),
        (this.Age = "22");
    },
    ShowHide() {
      this.showname = !this.showname; //toggle between True and false
    },
    handleEvent(e) {
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    }
  },
});

app.mount("#app");
