<template>
  <div
    class="home"
    :class="{ _p0: !$root.user_2.isShow && !$root.user_1.isShow }"
  >
    <transition name="fade">
      <div class="overlay" v-if="toast.toast"></div>
    </transition>
    <Toast :toast="toast" />
    <link
      href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
      rel="stylesheet"
      type="text/css"
    />
    <transition name="fade">
      <div class="cards cards_first" v-if="$root.user_2.isShow">
        <Loader v-if="loading" />
        <div
          class="card card_first"
          v-for="(note, i) in notesAndrey"
          :key="i"
          :class="{ mh0: !note.enable, op1: !loading }"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
            mode="out-in"
          >
            <div class="del-overlay" v-if="delOverlay && edit_1 == i"></div>
          </transition>
          <transition name="fade">
            <div class="card__wrap" v-if="note.enable">
              <div class="pen" @click="toEdit_1(i)">
                <img :src="require('@/assets/img/pencil.svg')" alt="" />
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="delete"
                  v-if="edit_1 == i"
                  @click="
                    del(
                      note.id,
                      $root.current.month.name,
                      $root.current.year.name
                    )
                  "
                >
                  <img :src="require('@/assets/img/delete.svg')" alt="" />
                </div>
              </transition>
              <div class="desc">
                <div class="smile">
                  <img
                    :src="
                      $root.user_1.avatar ||
                        require('@/assets/img/circle_blue.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <div class="date" v-if="edit_1 != i">{{ note.date }}</div>
              </transition>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <input
                  type="text"
                  class="input"
                  v-if="edit_1 == i"
                  v-model="note.date"
                />
              </transition>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="text"
                  v-html="note.textHTML"
                  v-if="edit_1 != i"
                ></div>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <textarea
                  name=""
                  id=""
                  class="textarea"
                  v-text="note.text"
                  v-if="edit_1 == i"
                  v-model="note.text"
                ></textarea>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <button
                  v-if="edit_1 == i"
                  class="btn btn_white btn_add"
                  @click="
                    update(
                      note.id,
                      note.text,
                      note.date,
                      $root.current.month.name,
                      $root.current.year.name
                    )
                  "
                >
                  {{ !btnLoading ? "Сохранить" : "" }}
                  <Loader
                    v-if="btnLoading"
                    :class="{ 'btn-loader': btnLoading }"
                  />
                </button>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="cards cards_second" v-if="$root.user_1.isShow">
        <Loader v-if="loading" />
        <div
          class="card card_second"
          v-for="(note, i) in notesNyuta"
          :key="i"
          :class="{ mh0: !note.enable, op1: !loading }"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
            mode="out-in"
          >
            <div class="del-overlay" v-if="delOverlay && edit_2 == i"></div>
          </transition>
          <transition name="fade">
            <div class="card__wrap" v-if="note.enable">
              <div class="pen" @click="toEdit_2(i)">
                <img :src="require('@/assets/img/pencil.svg')" alt="" />
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="delete"
                  v-if="edit_2 == i"
                  @click="
                    del(
                      note.id,
                      $root.current.month.name,
                      $root.current.year.name
                    )
                  "
                >
                  <img :src="require('@/assets/img/delete.svg')" alt="" />
                </div>
              </transition>
              <div class="desc">
                <div class="smile">
                  <img
                    :src="
                      $root.user_2.avatar || require('@/assets/img/cat.svg')
                    "
                    alt=""
                  />
                </div>
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <div class="date text-rose" v-if="edit_2 != i">
                  {{ note.date }}
                </div>
              </transition>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <input
                  type="text"
                  class="input"
                  v-if="edit_2 == i"
                  v-model="note.date"
                />
              </transition>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <div
                  class="text text-rose"
                  v-html="note.textHTML"
                  v-if="edit_2 != i"
                ></div>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutRight"
              >
                <textarea
                  name=""
                  id=""
                  class="textarea"
                  v-text="note.text"
                  v-if="edit_2 == i"
                  v-model="note.text"
                ></textarea>
              </transition>

              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceOutLeft"
              >
                <button
                  v-if="edit_2 == i"
                  class="btn btn_white btn_add"
                  @click="
                    update(
                      note.id,
                      note.text,
                      note.date,
                      $root.current.month.name,
                      $root.current.year.name
                    )
                  "
                >
                  Сохранить
                </button>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Toast from "@/components/Toast";
import Loader from "@/components/Loader";

export default {
  components: {
    Toast,
    Loader,
  },
  data() {
    return {
      notes: [],
      notesAndrey: [],
      notesNyuta: [],
      edit_1: null,
      edit_2: null,
      text: "",
      toast: {
        toast: false,
        text: "Сохранено",
      },
      loading: true,
      btnLoading: false,
      delOverlay: false,
      date: new Date(),
    };
  },
  async mounted() {
    await this.start(this.$root.current.month.name, this.$root.current.year.name);
  },
  methods: {
    ...mapActions(["fetchNotes", "updateNote", "disableNote"]),
    async start(userMonth, userYear) {
      const noteData = {
        month: userMonth,
        year: userYear,
      };
      this.notes = await this.fetchNotes(noteData);
      this.notesAndrey = this.notes
        .filter((note) => note.name == "Andrey")
        .reverse();
      this.notesNyuta = this.notes
        .filter((note) => note.name == "Nyuta")
        .reverse();
      this.notesAndrey.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      this.notesNyuta.forEach((element) => {
        element.textHTML = element.text.replace(/(\r\n|\n|\r)/gm, "<br>");
      });
      this.loading = false;
    },
    toEdit_1(i) {
      if (this.edit_1 == i) {
        this.edit_1 = null;
        return;
      }
      this.edit_1 = i;
    },
    toEdit_2(i) {
      if (this.edit_2 == i) {
        this.edit_2 = null;
        return;
      }
      this.edit_2 = i;
    },
    async update(userId, userText, userDate, userMonth, userYear) {
      try {
        const noteData = {
          id: userId,
          text: userText,
          date: userDate,
          month: userMonth,
          year: userYear,
        };
        this.btnLoading = true;
          // ! дать насладиться лоадером в кнопке
          await this.updateNote(noteData);
          this.start(
            this.$root.current.month.name,
            this.$root.current.year.name
          );
          this.$root.user_1.counter = 0;
          this.$root.user_2.counter = 0;
          this.edit_1 = null;
          this.edit_2 = null;
          this.toast.toast = true;
          setTimeout(() => {
            this.toast.toast = false;
          }, 1500);
          this.btnLoading = false;
      } catch (e) {
        console.log("updateNote e -", e);
      }
    },
    async del(userId, userMonth, userYear, userEnable = false) {
      this.delOverlay = true;
      try {
        const noteData = {
          id: userId,
          enable: userEnable,
          month: userMonth,
          year: userYear,
        };
        await this.disableNote(noteData);
        this.$root.user_1.counter = 0;
        this.$root.user_2.counter = 0;
        this.start(this.$root.current.month.name, this.$root.current.year.name);
        setTimeout(() => {
          this.delOverlay = false;
        }, 1500);
      } catch (e) {
        console.log("updateNote e -", e);
      }
    },
  },
  watch: {
    "$root.current.month": async function() {
      await this.start(
        this.$root.current.month.name,
        this.$root.current.year.name
      );
      this.edit_1 = null;
      this.edit_2 = null;
    },
    "$root.current.year": async function() {
      await this.start(
        this.$root.current.month.name,
        this.$root.current.year.name
      );
      this.edit_1 = null;
      this.edit_2 = null;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(350px, 1fr) minmax(350px, 1fr) 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  padding: 40px 0;
  position: relative;
}
@media all and (max-width: 768px) {
  .home {
    row-gap: 20px;
    padding: 20px 0;
    grid-template-columns: 1fr;
    place-items: center;
  }
}
._p0 {
  padding: 0;
}
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
.del-overlay {
  background: rgba(255, 255, 255, 0.425);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: content-box;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: block;
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
  max-height: 380px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #8ca6db, #b993d6);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: 0.5s ease-in;
  opacity: 0;
}
@media all and (max-width: 768px) {
  .card {
    width: 85vw;
    padding: 15px;
  }
  .card_first:last-child {
    margin-bottom: 0;
  }
  .card_second:last-child {
    margin-bottom: 0;
  }
}
.pen {
  width: 25px;
  height: 25px;
  position: absolute;
  right: -5px;
  cursor: pointer;
  transition: 0.3s ease-in;
  opacity: 0;
}
@media all and (max-width: 768px) {
  .pen {
    right: 25px;
    opacity: 1;
  }
}
.delete {
  width: 30px;
  height: 30px;
  left: 20px;
  top: 20px;
  position: absolute;
  cursor: pointer;
}
.pen img,
.delete img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card:hover .pen {
  right: 25px;
  opacity: 1;
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
.date {
  color: #0a467e;
  font-weight: bold;
  margin-bottom: 10px;
}
.text {
  color: #0a467e;
  font-weight: bold;
  text-align: left;
  padding: 0 10px;
}
.text-rose {
  color: #7e0a7b;
}
.input {
  width: 100%;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
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
.mh0 {
  padding: 0;
  margin: 0;
  max-height: 0;
  box-shadow: none;
  transition: 0.5s ease-out;
}
.op1 {
  opacity: 1;
}
.btn-loader {
  transform: rotate(45deg) scale(0.5);
  margin-bottom: 4px;
}
</style>
