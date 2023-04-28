<template>
    <div class="bg-green-50 page-section pt-5 -mb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center hidden lg:flex">
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_dmituz7c.json"
                background="#38c172"
                speed="1"
                
                loop
                style="max-width: 500px; max-height: 500px"
                autoplay></lottie-player>
            </div>
          </div>
  
          <div class="col-lg-6 p-4">
            <h2 class="title-section text-2xl">
              
            칼로리이미지

              <span class="marked"> <br>사진첨부</span>
            </h2>
            <div class="divider" style="width: 80%;"></div>
  
            <div>
              <p>
                새로운 빛으로 음식을 보세요. 쉽게 칼로리를 추적하세요
              </p>
            </div>
            <div style="height: 50px;"></div>
            <div>
              <form action="upload.php" method="post" enctype="multipart/form-data">
  <div class="mb-4">
    <div class="block text-gray-700 font-bold mb-2">업로드할 이미지파일 :</div>
    <input type="file" class="form-input rounded-md shadow-sm mt-1 block w-full" id="image" name="image">
  </div>
  <router-link to="/upload">
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Upload </button>
</router-link>
</form>
            </div>
  
           
  
          </div>
        </div>
      </div>
      <!-- .container -->
      
    </div>
    <!-- .page-section -->
  
 





   
  </template>
  
  <script>

  export default {
    data() {
      
    },
  

 
    
  };
  </script>
  
  <style></style>
  