<template>
         <pageNavbar />
         <div class="flex justify-center items-center h-screen">
          
        <div class="border border-dashed border-primary-500 rounded-lg p-8">
          <h1 class="text-center text-4xl font-bold mb-8">Login</h1>

            <div class="border-2 border-double border-secondary-500 rounded-lg p-8">
                <div class="border border-solid border-blue-700 rounded-lg p-8">
    <div class="sign-up">
      <p>회원가입</p>
      <input type="text" placeholder="email"><br>
      <input type="password" placeholder="password"><br>

      <div class="google text-center mt-5">
            <div class="google-button">
            
              <button @click="googleSignIn" class="btn-primary google-word">
                Continue with Google
              </button>
            </div>
          </div>
      
      <button v-on:click="SignUpPage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Sign Up
</button>      
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