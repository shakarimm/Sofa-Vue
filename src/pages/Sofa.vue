<template>
  <section class="settings">
    <div class="container">
      <h2 class="settings__title">Параметры</h2>
      <div class="settings__inner">
        
        <SwiperCarousel 
          :bigImages="bigImages"
          :smallImages="smallImages"
          :svgFill="svgFill"
          :svgFillSecond="svgFillSecond"
        />
        
        <SettingsChoose 
          :items="items"
          :secondItems="secondItems"
          @pick="pickColor"
          @pick-second="pickColorSecond"
        />
        
      </div>
    </div>
  </section>
</template>

<script>
//Импортирую компоненты
import SwiperCarousel from "../components/SwiperCarousel.vue";
import SettingsChoose from "../components/SettingsChoose.vue";

export default {
  //Объявляю компоненты
  components: {
    SwiperCarousel,
    SettingsChoose,
  },
  data() {
    return {
      //Цвет свег основы
      svgFill: 'none',
      //Цвет свг подлокотников
      svgFillSecond: 'none',
       //Основной массив из объектов (цвета и бордеры)
      items: [
        { color: "#EBD4B5", border: "none" },
        { color: "#FEEDC9", border: "none" },
        { color: "#FCEBBF", border: "none" },
        { color: "#F6D09F", border: "none" },
        { color: "#906D50", border: "none" },
        { color: "#A2896B", border: "none" },
        { color: "#9F816D", border: "none" },
        { color: "#CAA89C", border: "none" },
        { color: "#D5B191", border: "none" },
        { color: "#66594C", border: "none" },
        { color: "#C7BDB4", border: "none" },
        { color: "#A6A7A9", border: "none" },
        { color: "#B1E1CB", border: "none" },
        { color: "#27707F", border: "none" },
        { color: "#175B72", border: "none" },
        { color: "#5EAFCA", border: "none" },
        { color: "#00C0E0", border: "none" },
        { color: "#275BA7", border: "none" },
        { color: "#BA070A", border: "none" },
        { color: "#A46DA5", border: "none" },
        { color: "#272E48", border: "none" },
        { color: "#303845", border: "none" },
        { color: "#463E3C", border: "none" },
        { color: "#393738", border: "none" },
        { color: "#393738", border: "none" },
        { color: "#332825", border: "none" },
        { color: "#342820", border: "none" },
        { color: "#241B18", border: "none" },
      ],
      //Массив где передается цвет подлокотников и их бордер
      secondItems: [
        { color: "#EBD4B5", border: "none" },
        { color: "#713106", border: "none" },
        { color: "#701214", border: "none" },
        { color: "#371415", border: "none" },
      ],
      //Картинки нижнего слайдера
      smallImages: [
        {
          img: require("../assets/images/slider-1.png"),
        },

        {
          img: require("../assets/images/slider-2.png"),
        },

        {
          img: require("../assets/images/slider-3.png"),
        },
      ],
      //Картинки верхнего слайдера
      bigImages: [
        {
          img: require("../assets/images/slider-1.png"),
          svgOne: require("../assets/images/content-svg/1.svg"),
          svgSecond: require("../assets/images/content-svg/Artboard-1.svg"),
        },
        {
          img: require("../assets/images/slider-2.png"),
          svgOne: require("../assets/images/content-svg/2.svg"),
          svgSecond: require("../assets/images/content-svg/Artboard-2.svg"),
        },
        {
          img: require("../assets/images/slider-3.png"),
          svgOne: require("../assets/images/content-svg/3.svg"),
          svgSecond: require("../assets/images/content-svg/Artboard-3.svg"),
        },
      ],
    }
  },
  methods: {
    pickColor(color){
      this.svgFill = color
    },
    pickColorSecond(color) {
      this.svgFillSecond = color;      
    },
  },
};
</script>

<style lang="scss" scoped>

.secondary__slider {
  display: flex;
  justify-content: space-between;
  width: 420px;
}
.secondary__slider-item {
  display: flex;
  width: 70px;
  height: 70px;
}

.settings__title {
  text-align: center;
  color: #000;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 114px;
  margin-top: 67px;
}

.settings__inner {
  display: flex;
  justify-content: space-between;
}

.slider__item {
  position: relative;
  display: flex;
  width: 527px;
  height: 246px;
}


</style>