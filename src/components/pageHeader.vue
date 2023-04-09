<template>
    <div>
    <header>
      <div class="page-banner home-banner">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 py-3 wow fadeInUp">
              <p
                class="text-green-600 hover:text-green-500 text-base lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">
                AI를 사용하여 음식의 칼로리를 쉽게
                <br />
                추적하고 더 건강한 선택을 하십시오.
                <br />
                <br />

                식사 사진을 업로드하기만 하면 나머지는 AI 알고리즘이 알아서 처리합니다 !"
              </p>
              <p
                class="hidden lg:block text-2xl mb-5">
                더 잘 먹고 기분이 좋아집니다. AI 기반 칼로리 추적기가 오늘 더 건강한 선택을 할 수 있도록 도와줍니다
              </p>
  
              <router-link
                to="/about"
                name="fade"
                class="btn btn-outline border text-secondary">
                시작하기
              </router-link>
              <a
                href="/signup"
                class="btn btn-primary btn-split ml-2">
                회원가입
                <div class="fab"><span class="mai-play"></span></div>
              </a>
            </div>
            <div class="col-lg-6 wow zoomIn">
              
              <div
              class="m-3 lg:m-3 p-1 lg:p-5">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_itilDAyVNt.json"
                background="#38c172"
                speed="1"
                
                loop
                style="max-width: 500px; max-height: 500px"
                autoplay></lottie-player>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</div>
  </template>
  
  <script>

export default {};

  </script>
  
  <style></style>
  