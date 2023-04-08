<template>
     <pageNavbar />
     <div class="flex justify-center items-center h-screen">
        <div class="border border-dashed border-primary-500 rounded-lg p-8">
            <div class="border-2 border-double border-secondary-500 rounded-lg p-8">
                <div class="border border-solid border-blue-700 rounded-lg p-8">



    <!-- Content to be centered -->
    <div class="login">
      <h3>Login</h3>
      <input type="text" placeholder="email"><br>
      <input type="password" placeholder="password"><br>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       로그인
    </button>    
  <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
    </div>
</div>
</div>
</div>

</div>

  </template>
  
  <script>
    import pageNavbar from "../components/pageNavbar.vue";

    export default {
      name: 'LoginPage',
      data() {
        return {
        }
      },
      methods: {
        login() {
        this.$router.replace('/')
      }
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
    .login {
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
      font-size: 15px;
    }
    p a {
      text-decoration: underline;
      cursor: pointer;
    }
  </style>