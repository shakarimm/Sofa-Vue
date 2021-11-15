<template>
  <div class="settings__choose">
    <div class="settings__choose-choise">
      <label>
        <input name="ra" class="radio__box" type="radio" checked />
        <span class="radio__style"></span>
        Прямой
      </label>
      <label>
        <input name="ra" class="radio__box" type="radio" />
        <span class="radio__style"></span>
        Угловой
      </label>
    </div>
    <div class="setting__choose-pick">
      <div class="setting__choose-view">
        <span class="settings__choose-span">Вид:</span>
        <div class="select">
          <select class="setting__choose-select setting__choose-select--view">
            <option class="setting__choose-option">Со вставками</option>
            <option class="setting__choose-option">Без вставок</option>
            <option class="setting__choose-option">С подушками</option>
            <option class="setting__choose-option">Без подушек</option>
          </select>
        </div>
      </div>
      <form class="setting__choose-width">
        <span class="settings__choose-span">Ширина:</span>
        <!-- <div class="select">
                <select class="setting__choose-select setting__choose-select--width">
                  <option class="setting__choose-option">210</option>
                  <option class="setting__choose-option">220</option>
                  <option class="setting__choose-option">230</option>
                  <option class="setting__choose-option">240</option>
                </select>
              </div> -->
        <input
          class="setting__choose-input"
          onkeyup=""
          id="input-id"
          type="number"
          placeholder="200см - 500см"
        />
      </form>
    </div>
    <div class="settings__choose-material">
      <span class="settings__choose-span">Материал:</span>
      <label>
        <input name="rb" class="radio__box" type="radio" checked />
        <span class="radio__style"></span>
        Seul
      </label>
      <label>
        <input name="rb" class="radio__box" type="radio" />
        <span class="radio__style"></span>
        Santa
      </label>
      <label>
        <input name="rb" class="radio__box" type="radio" />
        <span class="radio__style"></span>
        Alkantara
      </label>
    </div>
    <div class="settings__choose-clr">
      <span class="settings__choose-span">Цвет:</span>
      <div class="settings__choose-colors">
        <div
          class="settings__choose-color"
          v-for="(item, index) in items"
          :key="index"
          :style="{ backgroundColor: item.color, border: item.border }"
          @click="$emit('pick', item.color);pickBorder(index)"
        ></div>
      </div>
    </div>
    <div class="settings__choose-type">
      <span class="settings__choose-span">Подлокотник с ламинатом:</span>
      <label>
        <input name="rc" class="radio__box" type="radio" />
        <span class="radio__style"></span>
        Без
      </label>
      <label>
        <input name="rc" class="radio__box" type="radio" />
        <span class="radio__style"></span>
        Овальный
      </label>
      <label>
        <input name="rc" class="radio__box" type="radio" checked />
        <span class="radio__style"></span>
        Прямой
      </label>
    </div>
    <div class="settings__choose-clr">
      <span class="settings__choose-span">Цвет подлокотника:</span>
      <div class="settings__choose-colors-1">
        <div
          class="settings__choose-color-1"
          v-for="(secondItem, index) in secondItems"
          :key="index"
          :style="{ backgroundColor: secondItem.color, border: secondItem.border }"
          @click="$emit('pickSecond', secondItem.color);pickBorderSecond(index)"
        ></div>
      </div>
    </div>
    <form class="settings__choose-form">
      <div class="settings__choose-input">
        <span class="settings__choose-span">Адрес клиента:</span>
        <input class="input" type="text" />
      </div>
      <div class="settings__choose-input">
        <span class="settings__choose-span">Номер клиента:</span>
        <input class="input" type="number" />
      </div>
      <div class="price">
        <span class="price__span">Цена:</span>
        <span class="price__span">151 500 KZT</span>
      </div>
      <div class="settings__choose-button">
        <button class="settings__choose-btn" type="submit">
          Отправить клиенту
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    secondItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
    //Бордер вокруг цветов
    pickBorder(index) {
      this.items.map((item) => {
        item.border = "none";
      });
      this.items[index].border = "2px solid #EF8100";
    },
    //Бордер вокруг цветов(подлокотники)
    pickBorderSecond(index) {
      this.secondItems.map((secondItem) => {
        secondItem.border = "none";
      });
      this.secondItems[index].border = "2px solid #EF8100";
    },
  },
};
</script>

<style lang="scss" scoped>
.settings__choose-span {
  display: block;
  font-size: 20px;
  line-height: 23px;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.settings__choose-choise,
.setting__choose-pick,
.settings__choose-material,
.settings__choose-type,
.settings__choose-input {
  margin-bottom: 30px;
}

.radio__box {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding-left: 20px;
}

.radio__style {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #dcdcdc;
  border-radius: 50%;
  margin-left: -43px;
  z-index: 100;
}

.radio__box:checked + .radio__style::before {
  content: "";
  width: 20px;
  height: 20px;
  background: #0596cd;
  border: 2px solid #ef8100;
  position: absolute;
  border-radius: 50%;
}

.setting__choose-pick {
  display: flex;
}

.setting__choose-view {
  margin-right: 30px;
}

.select {
  position: relative;
}

.select::after {
  content: "";
  position: absolute;
  background-image: url(../assets/images/arrow-down.svg);
  width: 11px;
  height: 7px;
  top: 44%;
  right: 10px;
  cursor: pointer;
  z-index: 1;
}

.setting__choose-select {
  padding: 14px 56px 11px 11px;
  border: 1px solid #dedede;
  border-radius: 4px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.setting__choose-input {
  padding: 14px 14px 11px 11px;
  border: 1px solid #dedede;
  border-radius: 4px;
  -webkit-appearance: none;
  appearance: none;
  width: 137px;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    display: none;
  }
}

.setting__choose-width-btn {
  padding: 5px 2px 5px 2px;
  border: 1px solid #dedede;
  border-radius: 4px;
  -webkit-appearance: none;
  appearance: none;
  width: 80px;
  background-color: #fff;
  transition: all 0.5s;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    background-color: #0596cd;
    color: #fff;
  }
}

.setting__choose-select--view {
  width: 200px;
}

.settings__choose-clr {
  padding-bottom: 15px;
}

.settings__choose-colors {
  display: flex;
  margin-bottom: 15px;
  width: 560px;
  flex-wrap: wrap;
}

.settings__choose-color,
.settings__choose-color-1 {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 15px;
  z-index: 100;
}

.settings__choose-colors-1 {
  display: flex;
  margin-bottom: 15px;
}

.settings__choose-color--active {
  border: 2px solid #ef8100;
}

.input {
  width: 550px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #c4c2c2;
  padding-left: 15px;
  padding-right: 15px;
}

.price,
.settings__choose-button {
  text-align: right;
  margin-bottom: 50px;
}

.price__span {
  margin-left: 58px;
  font-size: 30px;
  line-height: 35px;
  color: #4a4a4a;
}

.settings__choose-btn {
  padding: 15px 58px;
  background: #007dad;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  border: none;
  margin-bottom: 25px;
}
</style>