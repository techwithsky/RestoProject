<template>
  <div>
    <h1>Employees list</h1>
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
        </tr>
        <tr v-for="emp in list" v-bind:key="emp.id">
          <td>{{ emp.employee_name }}</td>
          <td
            v-if="emp.employee_salary > 400000"
            v-bind:class="{ techLead: true }">
            {{ emp.employee_salary }}
          </td>
          <td
            v-else-if="
              emp.employee_salary > 300000 && emp.employee_salary < 400000"
            v-bind:class="{ senior: true }">
            {{ emp.employee_salary }}
          </td>
          <td
            v-else-if="
              emp.employee_salary > 100000 && emp.employee_salary < 300000"
            v-bind:class="{ junior: true }">
            {{ emp.employee_salary }}
          </td>
          <td
            v-else-if="emp.employee_salary < 100000"
            v-bind:class="{ fresher: true }">
            {{ emp.employee_salary }}
          </td>
          <td v-else>
            {{ emp.employee_salary }}
          </td>
          <td>{{ emp.employee_age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
// import { EMPTY_ARR } from "@vue/shared";
Vue.use(VueAxios, axios);
export default {
  name: "axiosFetch",
  data() {
    return { list: undefined, highSalary: false };
  },
  mounted() {
    Vue.axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((akash) => {
        this.list = akash.data.data;
        console.warn(akash.data.data);
      });
  },
};
</script>

<style scoped>
table,
td,
th {
  padding: 5px 10px;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 20px;
  background-color: rgba(240, 248, 255, 0.389);
}
table {
  width: 40%;
  margin: 0 auto;
}
.senior {    
    /* salary > 400000 */
  background-color: green;
  color: yellow;
}

.junior{
   /* 400000 > salary > 300000 */
  background-color: rgb(226, 211, 0);
}
.fresher {
  background-color: rgb(156, 0, 0);
  color: #fff;
}
.techLead {
  /* background-color: rgb(0, 181, 218); */
  color: #fff;
  background: -moz-linear-gradient(rgb(10, 177, 233), rgb(2, 72, 102));
  background: -webkit-linear-gradient(rgb(10, 177, 233), rgb(2, 72, 102));

  /* border: 3px solid rgb(0, 85, 142); */
}
</style>