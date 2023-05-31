<template>
    <pageNavbar />

<div class="bg-green-50 page-section pt-5 -mb-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 py-3 wow zoomIn">
        <div class="img-place text-center hidden lg:flex">
          <img
      src="@/images/짜장면.jpg"
      alt="description of image"
      class="responsive-image with-border"
      width="488"
      height="488">
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
  짜장면
</span>
</h1>
  <div>
  <pageChart/>
  </div>
</div>

        <div>
<div class="mb-4">
</div>
<div class="flex-container">
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg flex-item">총 칼로리: 275kcal</span>
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg flex-item">양: 100g 기준</span>
  <span class="bg-gray-400 text-white text-lg px-2 py-1 rounded-lg flex-item">영양조합: 7/10</span>
</div>


<div class="divider" style="width: 80%;"></div>

<div>
<router-link to="/about">
<button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10">다시 검색</button>
</router-link>
<button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">찜 하기 </button>
</div>
        </div>

       

      </div>
    </div>
  </div>
  <!-- .container -->
  
</div>
<!-- .page-section -->





<PageServices />


<div class="bg-green-50 py-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="divider mx-auto"></div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center justify-evenly space-x-3 h-full text-left py-5">
        <div
        class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100" style="overflow: auto;">
          <lord-icon
            src="https://cdn.lordicon.com/dfxesbyu.json"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
         food  wise saying

          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            "음식이 약이 되게 하고 약이 음식이 되게 하라." - 히포크라테스
"모든 행복은 여유로운 아침 식사에 달려 있습니다." - 존 건터
"잘 먹지 않으면 잘 생각하고, 잘 사랑하고, 잘 수 없다." - 버지니아 울프
"음식은 단순히 먹는 에너지가 아니다. 경험이다." - 가이 피에리
"좋은 음식은 진정한 행복의 기초입니다." - 오귀스트 에스코피에
          </p>
        </div>

        <div
        class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100" style="overflow: auto;">
          <lord-icon
            src="https://cdn.lordicon.com/xqgancly.json"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Nonsense statements   
                   </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            피자를 거꾸로 먹으면 샐러드가 된다."
"시리얼을 먹는 가장 좋은 방법은 포크입니다."
"아침에 쿠키를 먹는 것은 시리얼을 먹는 것과 같지만 더 재미있습니다."
"무엇이든 핫소스를 충분히 얹으면 건강한 밥상이 된다."
"겨울에 아이스크림 먹으면 몸이 따뜻해진다."
          </p>
        </div>

        <div
        class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100" style="overflow: auto;">
          <lord-icon
            src="https://cdn.lordicon.com/hursldrn.json"
            trigger="morph"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Motivation

          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            "모든 건강한 선택은 미래의 자신에 대한 투자입니다."
"작은 변화가 큰 결과를 가져올 수 있습니다. 계속하세요!"
"당신은 건강 목표를 달성할 수 있습니다. 자신을 믿으세요."
"기억하세요, 진보는 직선적이지 않습니다. 힘든 날에도 포기하지 마세요. 계속해서 앞으로 나아가세요."
          </p>
        </div>
      </div>
    </div>
  </div>



</template>


<script>
import pageNavbar from "@/components/pageNavbar.vue";
import PageServices from "@/components/pageServices.vue";
import pageChart from "@/components/pageChart.vue";
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
    PageServices,
    pageChart 
  },

};
</script>

<style scoped>
.responsive-image {
max-width: 100%;
height: auto;
border: 2px solid #000;
}

.with-border {
padding: 5px;
}
.flex-container {
display: flex;
justify-content: center;
}

.flex-item {
flex: 1;
display: flex;
justify-content: center;
}

.flex-item:not(:last-child) {
margin-right: 10px;
}

</style>
