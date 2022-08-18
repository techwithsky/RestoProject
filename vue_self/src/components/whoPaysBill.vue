<template>
  <div>
    <div id="names" class="container" v-if="show">
      <h1>Who pays the bill</h1>
      <div class="inputContainer">
        <input id="inp" type="text" v-model="inputName" />
        <button id="btn" v-on:keyup.enter="onEnter" @click="addName">
          Add
        </button>
      </div>
      <div class="errorLabel" v-if="showError">You must enter a name</div>
      <div class="listOfNames" v-if="showName">
        <div @click="toggleName" v-for="(name, index) in names" :key="index">
          {{ name }}
        </div>
      </div>
      <div v-if="this.names.length > 1">
        <button class="resultButton" @click="showResults()">
          Choose Random
        </button>
      </div>
    </div>
    <div id="result" v-if="!show">
      <div class="resultContainer">
        <h3>The loser is</h3>
        <span>{{ this.result }}</span><br />
        <button id="resultButton" @click="reset" v-if="showReset">Reset</button>
      </div>
    </div>
    <!-- <button @click="toggleDiv">Toggle div</button> -->
  </div>
</template>
<script>
export default {
  name: "billApp",
  data() {
    return {
      show: true,
      inputName: "",
      names: [],
      showError: false,
      showName: true,
      result: "",
      showReset: false,
    };
  },
  methods: {
    toggleName() {
      this.showName = false;
    },
    addName() {
      const input = document.getElementById("inp");
      input.focus();
      const btn = document.getElementById("btn");
      btn.addEventListener("click", function handleClick() {
        input.focus();
      });
      console.log(this.names);
      if (this.validate(this.inputName)) {
        console.log("its valid");
        this.names.push(this.inputName);
        console.log(this.names);
        this.inputName = "";
        this.showError = false;
      } else {
        console.log("Not valid");
        this.showError = true;
      }
    },
    validate(value) {
      if (value !== "") {
        return true;
      } else {
        return false;
      }
    },
    showResults() {
      let randomResult =
        this.names[Math.floor(Math.random() * this.names.length)];
      this.result = randomResult;
      this.show = false;
      this.showReset = true;
    },
    reset() {
      (this.show = true), (this.names = []);
    },
    onEnter() {
      let randomResult =
        this.names[Math.floor(Math.random() * this.names.length)];
      this.result = randomResult;
      this.show = false;
      this.showReset = true;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  margin: auto;
  font-family: calibri;
}
.container h1 {
  font-family: anton;
}
.inputContainer {
  margin: 20px 0;
}
.inputContainer input {
  background-color: #e3e3e3;
  border-radius: 5px 0 0 5px;
  padding-left: 10px;
  border: 1px solid rgb(0, 0, 0);
}
.inputContainer button {
  background-color: rgb(7 189 225);
  color: #fff;
  font-weight: bold;
  border-radius: 0px 5px 5px 0px;
  border: none;
  padding: 2px 8px;
}
.resultContainer h3 {
  font-family: anton;
  font-size: 40px;
  color: rgb(0, 179, 255);
}
.resultContainer span {
  font-family: anton;
  font-size: 30px;
}
.resultButton {
  /* width: 200px; */
  border:2px solid rgb(55, 55, 55);
  border-radius: 10px;
  background-color: #e3e3e3;
  color: rgb(55, 55, 55);
  padding: 5px 30px;
}
.resultButton:active {
  /* width: 200px; */
  border:2px solid #e3e3e3;
  border-radius: 5px;
  background-color: rgb(55, 55, 55);
  color:  #e3e3e3;
  padding: 5px 30px;
}
#resultButton {
  /* width: 200px; */
  border:2px solid rgb(55, 55, 55);
  border-radius: 5px;
  background-color: #e3e3e3;
  color: rgb(55, 55, 55);
  padding: 5px 30px;
}
#resultButton:active {
  /* width: 200px; */
  border:2px solid #e3e3e3;
  border-radius: 5px;
  background-color: rgb(55, 55, 55);
  color:  #e3e3e3;
  padding: 5px 30px;
  /* transform: scale(0.97); */
}
.errorLabel {
  color: rgb(233, 30, 30);
}
.listOfNames {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: max-content;
}
.listOfNames div {
  width: max-content;
  background-color: rgb(0, 145, 181);
  color: #fff;
  border-radius: 15px;
  padding: 2px 7px;
  margin: 10px;
  min-width: 50px;
}
</style>