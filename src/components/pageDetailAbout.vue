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
      <div class="block text-gray-700 font-bold mb-2">이미지 업로드:</div>
      <input type="file" class="form-input rounded-md shadow-sm mt-1 block w-full" id="image" name="image">
    </div>
    <div>
    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="uploadImage">Upload</button>
  </div>
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
  methods: {
    uploadImage() {
      const fileInput = document.getElementById("image");
      const file = fileInput.files[0]; // Get the selected file
      if (!file || !file.type.startsWith("image/")) {
        alert("이미지 파일을 선택해주세요.");
        return;
      }

      // Create a new FormData object
      const formData = new FormData();
      formData.append("image", file);

      // Send the image file to the backend using AJAX (e.g., using the Fetch API)
      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          // Handle the response from the backend
          console.log("이미지가 성공적으로 저장되었습니다.!");

          // Redirect to the "/upload" route
          this.$router.push("/upload");
        })
        .catch(error => {
          // Handle any errors that occur during the upload process
          console.error("Error uploading image:", error);
        });
    }
  }
}
</script>
  
  <style></style>
  