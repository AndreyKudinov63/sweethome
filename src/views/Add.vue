<template>
  <div class="home">
    <transition name="fade">
      <div class="overlay" v-if="toast.toast"></div>
    </transition>
    <Toast :toast="toast" />
    <div class="cards cards_first">
      <div class="card card_first" v-for="(card, i) in 1" :key="i">
        <div class="desc">
          <div class="smile">
            <img
              :src="
                $root.user_1.avatar || require('@/assets/img/circle_blue.svg')
              "
              alt=""
            />
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="textarea"
          v-model="text_1"
        ></textarea>
        <button
          class="btn btn_white btn_add"
          v-if="isAdd"
          @click="add(name_1, text_1, $root.current.month.name, $root.current.year.name)"
        >
          Добавить
        </button>
        <button class="btn btn_white btn_add" v-else>Редактировать</button>
      </div>
    </div>
    <div class="cards cards_second">
      <div class="card card_second" v-for="(card, i) in 1" :key="i">
        <div class="desc">
          <div class="smile">
            <img
              :src="$root.user_2.avatar || require('@/assets/img/cat.svg')"
              alt=""
            />
          </div>
        </div>
        <textarea name="" id="" class="textarea" v-model="text_2"></textarea>
        <button
          class="btn btn_white btn_add"
          v-if="isAdd"
          @click="add(name_2, text_2, $root.current.month.name, $root.current.year.name)"
        >
          Добавить
        </button>
        <button class="btn btn_white btn_add" v-else>Редактировать</button>
      </div>
    </div>
  </div>
</template>

<script>
import dateFilter from "@/filters/date.filter";
import Toast from "@/components/Toast";

import { mapActions } from "vuex";

export default {
  name: "Add",
  components: {
    Toast,
  },
  data() {
    return {
      isAdd: true,
      name_1: "Andrey",
      name_2: "Nyuta",
      text_1: "",
      text_2: "",
      date: new Date(),
      toast: {
        toast: false,
        text: "Сохранено"
      },
    };
  },
  methods: {
    ...mapActions(["createNote"]),
    async add(userName, userText, userMonth, userYear) {
      try {
        await this.createNote({
          name: userName,
          text: userText,
          date: dateFilter(this.date, "date"),
          month: userMonth,
          year: userYear,
        });
        this.toast.toast = true;
        setTimeout(() => {
          this.toast.toast = false;
        }, 1500);
        this.text_1 = "";
        this.text_2 = "";
        this.$root.user_1.counter = -1;
        this.$root.user_2.counter = -1;
      } catch (e) {
        console.log("add e -", e);
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  background: #fff;
  position: absolute;
  box-sizing: content-box;
  z-index: 10;
  opacity: 0.3;
  transition: 0.5s ease-in-out;
  width: 100vw;
  height: 100%;
  display: block;
}
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 20px;
  padding: 40px 0;
  position: relative;
}
@media all and (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    place-items: center;
    padding: 20px 0;
  }
}
.cards {
  display: flex;
  flex-direction: column;
}
.cards_first {
  grid-column: 2/3;
}
.cards_second {
  grid-column: 3/4;
}
@media all and (max-width: 768px) {
  .cards_first {
    grid-column: span 1;
  }
  .cards_second {
    grid-column: span 1;
  }
}
.card {
  width: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  border-radius: 15px;
}
@media all and (max-width: 768px) {
  .card {
    width: 85vw;
    padding: 15px;
    margin-bottom: 0;
  }
}
.desc {
  display: flex;
}
.smile {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.smile img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.textarea {
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.btn_add {
  width: 100%;
}
.croppie {
  overflow: hidden;
  border-radius: 50%;
}
.result {
}
</style>
