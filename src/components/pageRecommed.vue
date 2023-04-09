<template>
    <div class="bg-green-50 hidden lg:flex lg:items-center lg:justify-center">
      <div class="bg-green-50 page-section features">
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-md-6 col-lg-4 py-3 wow fadeInUp">
              
            </div>
                <section class="recipes">
  <h2>오늘의 추천 레시피</h2>
  <p class="flex justify-center text-lg font-medium text-gray-800 mb-4 ml-4">
  추천 레시피를 <span class="text-red-500 font-bold ml-4">Click</span> <span class="ml-4"> </span>하여 정보를 얻어보세요
</p>  <ol>
    <!-- <li><a :href="recommendedRecipes[0].link">{{ recommendedRecipes[0].name }}</a></li>
    <li><a :href="recommendedRecipes[1].link">{{ recommendedRecipes[1].name }}</a></li>
    <li><a :href="recommendedRecipes[2].link">{{ recommendedRecipes[2].name }}</a></li> -->

  </ol>
</section>
<div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div class="d-flex flex-row">
                <div class="">
                  <div class="img-fluid mr-3"><a href="#">
                    <lord-icon
                src="https://cdn.lordicon.com/fuyxlute.json"
                trigger="hover"
             style="width:150px;height:150px">
           </lord-icon>
                    </a>
                  </div>
                </div>
                <div>
                  <h4> <a href="#">부대찌개</a></h4>
                  <p>
                    국 전쟁 중에 시작된 한국 요리입니다. 매콤한 육수에 한국식 소시지, 스팸, 구운 콩, 그리고 양파, 버섯, 파 등 다양한 야채가 들어가는 전골 요리입니다.                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div class="d-flex flex-row">
                <div class="">
                  <div class="img-fluid mr-3"><a href="#">
                    <lord-icon
                src="https://cdn.lordicon.com/fuyxlute.json"
                trigger="hover"
             style="width:150px;height:150px">
           </lord-icon>
                    </a>
                  </div>
                </div>
                <div>
                  <h4> <a href="#">짬뽕</a></h4>
                  <p>
                    보통 새우, 오징어, 홍합 등의 해산물과 양파, 당근, 양배추 등의 야채로 만드는 매운 한국식 국수입니다. 국물은 보통 고추가루, 고추장, 간장으로 간을 하여 특유의 매콤                  </p>
                </div>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div class="d-flex flex-row">
                <div class="">
                  <div class="img-fluid mr-3"><a href="#">
                    <lord-icon
                src="https://cdn.lordicon.com/fuyxlute.json"
                trigger="hover"
             style="width:150px;height:150px">
           </lord-icon>
                    </a>
                  </div>
                </div>
                <div>
                  <h4> <a href="#">갈비</a></h4>
                  <p>
                    간장, 설탕, 마늘 등의 양념으로 만든 달콤하고 짭짤한 소스에 재워 먹는 한국의 인기 요리입니다. 그런 다음 짧은 갈비는 완벽하게 굽                  </p>
                </div>
              </div>
            </div>
  
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
h2 {
  font-size: 2.5rem; /* increase the font size to 2.5 rem */
  text-align: center; /* center align the header */
  color: #333; /* change the color of the text */
  text-transform: uppercase; /* make the text uppercase */
  margin-bottom: 1.5rem; /* add some bottom margin to separate it from other elements */
  /* you can also add more styles like font-weight, font-family, text-shadow, etc. to further customize the look of the header */
}</style>
  