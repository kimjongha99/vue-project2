<template>
         <pageNavbar />
         <div class="flex justify-center items-center h-screen">
        <div class="border border-dashed border-primary-500 rounded-lg p-8">
            <div class="border-2 border-double border-secondary-500 rounded-lg p-8">
                <div class="border border-solid border-blue-700 rounded-lg p-8">
    <div class="sign-up">
      <p>회원가입</p>
      <input type="text" placeholder="email"><br>
      <input type="password" placeholder="password"><br>
      <button v-on:click="SignUpPage">가입하기</button>
      <span>또는  <router-link to="/login">로그인</router-link>으로 돌아가기</span>
    </div>
</div>
</div>
</div>
</div>
  </template>
  
  <script>
      import pageNavbar from "../components/pageNavbar.vue";

    export default {
      name: 'SignUpPage',
      data() {
      },
      methods: {

      },

props: {
blog: Array,
},

components: {
pageNavbar,

},
    }
  </script>
  
  <style scoped>
    .signUp {
      margin-top: 40px;
    }
    input {
      margin: 10px 0;
      width: 200px;
      padding: 15px;
    }
    button {
      margin-top: 20px;
      width: 200px;
      cursor: pointer;
    }
    p {
      margin-top: 40px;
      font-size: 20px;
    }
    span {
      display: block;
      margin-top: 20px;
      font-size: 15px;
    }
  </style>