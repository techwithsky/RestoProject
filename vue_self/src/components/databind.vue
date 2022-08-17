<template>
  <div>
    <h3 style="white-space:pre-line" >Name : {{ message }}</h3>
    <h3 style="white-space:pre-line" >Name : {{ message }}</h3>
    <!-- <input type="text" v-model="message" /> -->
    <textarea v-model="message" ></textarea>
  </div>
</template>

<script>
export default {      
  name: "dataBinding",
  data: () => ({
    message: "",
  }),
};
</script>