<template>
  <div class="div">
    <swiper
      :spaceBetween="1"
      :centeredSlides="true"
      :thumbs="{ swiper: thumbsSwiper }"
      class="mySwiper2"
    >
      <swiper-slide
        v-for="(bigImage, idx) in bigImages"
        :key="idx"
        style="position: relative"
        ><img 
          style="width: 527px" 
          :src="bigImage.img" 
        />
        <inline-svg
          :src="bigImage.svgOne"
          :style="{ 
            fill: svgFill, 
            width: idx == 2 ? '657px' : (idx == 1 ? '660px' : '877px'),
            left: idx == 2 ? '62px' : (idx == 1 ? '57px' : '-38px'),
            top: idx == 2 ? '-252px' : (idx == 1 ? '-242px' : '-472px'),
            position: 'absolute',
            zIndex: '2',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%', 
            mixBlendMode: 'multiply',
            }"
        />
        <inline-svg
          :src="bigImage.svgSecond"
          :style="{ 
            fill: svgFillSecond, 
            width: idx == 2 ? '660px' : (idx == 1 ? '660px' : '877px'),
            left: idx == 2 ? '70px' : (idx == 1 ? '69px' : '-38px'),
            top: idx == 2 ? '-243px' : (idx == 1 ? '-244px' : '-472px'),
            position: 'absolute',
            zIndex: '2',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%', 
            mixBlendMode: 'multiply',
            }"
        />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="1"
      :slidesPerView="3"
      :centeredSlidesBounds="true"
      :watchSlidesProgress="true"
      class="mySwiper"
      style="width: 580px"
    >
      <swiper-slide
        v-for="(smallImage, idx) in smallImages"
        :key="idx"
        style="width: 170px; height: 120px; margin-right: 10px"
        :style="{border: smallImage.border, borderRadius: smallImage.borderRadius, padding}"
        @click="borderImage(idx)"
        ><img 
          style="width: 160px" 
          :src="smallImage.img"
      />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/thumbs/thumbs.scss";

import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper";

SwiperCore.use([Navigation, Pagination, Thumbs]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    smallImages: {
      type: Array,
      required: true,
    },
    bigImages: {
      type: Array,
      required: true,
    },
    svgFill: {
      type: String,
      required: true,
    },
    svgFillSecond: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      thumbsSwiper: null,
      // border: 'none', 
      // borderRadius: 'none',
      padding: '20px 5px'
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    borderImage(idx){
      this.smallImages.map((smallImage) => {
        smallImage.border = 'none';
        smallImage.borderRadius = 'none';
      });
      this.smallImages[idx].border = '1px solid #007DAD'
      this.smallImages[idx].borderRadius = '8px'
      // console.log(idx)
    }
  },
};
</script>
<style lang="scss" scoped>

.div {
  width: 800px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img {
    width: 250px;
  }
}
</style>