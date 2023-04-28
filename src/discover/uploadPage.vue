<template>
      <pageNavbar />

  <div class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <img src="@/images/파스타.jpg" alt="description of image" width="500" height="500">

          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl">
            
          칼로리이미지

            <span class="marked"> <br></span>
          </h2>
          <div class="divider" style="width: 80%;"></div>

          <div>
            <p>
              새로운 빛으로 음식을 보세요. 쉽게 칼로리를 추적하세요
            </p>
            <h1 class="text-4xl font-bold  text-gray-800 dark:text-white mb-8">
  검색 결과는 : 
  <span class="inline-block bg-yellow-400 text-gray-800 font-bold px-4 py-2 rounded-lg">
    파스타
  </span>
</h1>

          </div>
          <div style="height: 50px;"></div>
          <div>
<div class="mb-4">
</div>
  <div class="flex items-center">'
  
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg mr-2">Calories: 200</span>
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg mr-2">Recipe for: Pasta</span>
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg">Favorites: 10</span>
</div>
<div class="divider" style="width: 80%;"></div>

<div>
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10">다시 검색</button>
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">찜 하기 </button>
</div>
          </div>

         

        </div>
      </div>
    </div>
    <!-- .container -->
    
  </div>
  <!-- .page-section -->







 
</template>

<script>
  import pageNavbar from "@/components/pageNavbar.vue";

  export default {
    name: "uploadPage",
    data() {
      return {};
    },
  
    props: {
      blog: Array,
    },
  
    components: {
      pageNavbar,
      
    },
  };
</script>

<style></style>
