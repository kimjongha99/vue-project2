<template>
    <pageNavbar />


    <div class="container mx-auto mt-4">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-4">개인페이지</h1>
      <div class="w-full md:w-3/4 lg:w-1/2">

        <div class="my-4">
  <h2 class="text-2xl font-bold mb-2">회원 정보</h2>
  <table>
  <tbody>
  <tr>
    <th class="px-4 py-2 font-bold uppercase text-gray-800">이름</th>
    <td class="px-4 py-2">{{ userInfo.name }}</td>
  </tr>
  <tr>
    <th class="px-4 py-2 font-bold uppercase text-gray-800">Email</th>
    <td class="px-4 py-2">{{ userInfo.email }}</td>
  </tr>
  <tr>
    <th class="px-4 py-2 font-bold uppercase text-gray-800">Address</th>
    <td class="px-4 py-2">{{ userInfo.address }}</td>
  </tr>
</tbody>

  </table>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">회원정보 수정</button>
</div>


<div class="my-4">
  <h2 class="text-2xl font-bold mb-2">내 찜 레시피</h2>
  <ul>
    <li v-for="(recipe, index) in myRecipes" :key="index" class="text-lg font-medium border-b-2">
      {{ recipe.name }}
      <button @click="toggleFavorite(recipe)">
        <i class="fas fa-heart" :class="{ 'text-red-500': recipe.favorited }"></i>
      </button>
      <button v-if="recipe.favorited" @click="removeFavorite(recipe)">찜 제거</button>
    </li>
  </ul>
</div>
        <div class="my-4">
          <h2 class="text-2xl font-bold mb-2">회원탈퇴</h2>
          <p>If you would like to withdraw your membership, please click the button below:</p>
          <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" @click="withdrawMembership">탈퇴</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pageNavbar from "@/components/pageNavbar.vue";


export default {
  name: "MyPage",
  data() {
    return {
      userInfo: {
        name: 'John Smith',
        email: 'john@example.com',
        address: '123 Main St, Anytown USA'
      },
      myRecipes: [
        { name: 'Spaghetti Bolognese', imageUrl: 'https://example.com/spaghetti.jpg',favorited: true },
        { name: 'Chicken Tikka Masala', imageUrl: 'https://example.com/tikka.jpg',favorited: true  },
        { name: 'Grilled Salmon', imageUrl: 'https://example.com/salmon.jpg' ,favorited: false }
      ]
    }
  },

  props: {
    blog: Array,
  },

  components: {
    pageNavbar,
  },
  methods: {
  toggleFavorite(recipe) {
    recipe.favorited = !recipe.favorited
  },
  removeFavorite(recipe) {
    recipe.favorited = false
    // 찜한 레시피 리스트에서 해당 레시피를 삭제하는 로직을 추가해야합니다.
  }
}



};
</script>

<style></style>