<template>
  <v-container class="fs-organizer-container">
    <v-flex md3 mb-5>
      <h1>{{title}}</h1>
    </v-flex>
    <v-form>
      <v-layout column justify-space-around>
        <v-flex md12>
          <v-layout mb-3>
            <v-flex>
                <span class="fs-student-info__key">
                  Наименование:
                </span>
            </v-flex>
            <v-flex text-md-right>
                <span class="fs-student-info__key">
                  {{item.name}}
                </span>
            </v-flex>
          </v-layout>
          <v-layout mb-3>
            <v-flex>
                <span class="fs-student-info__key">
                  Статус:
                </span>
            </v-flex>
            <v-flex text-md-right>
                <span class="fs-student-info__key">
                  <v-checkbox
                    class="fs-checkbox"
                    label=""
                    readonly
                    v-model="item.status"
                  >
                  </v-checkbox>
                </span>
            </v-flex>
          </v-layout>

        </v-flex>
        <v-flex md12>
          <v-layout mb-3>
            <v-flex>
                <span class="fs-student-info__key">
                  Описание:
                </span>
            </v-flex>
            <v-flex text-md-right>
               <span class="fs-student-info__key">
                  {{item.desc}}
                </span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-flex text-md-right>
        <v-btn class="fs-btn" @click="navigateTo('TaskEdit', item.id, item)">Изменить</v-btn>
        <v-btn class="fs-btn primary fs-form-footer__btn" @click="deleteTask(item.id)">Удалить</v-btn>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
import { getOneTask, deleteTask } from '@/router/routes/Tasks';

export default {
  name: 'View',
  data() {
    return {
      item: this.$route.query,
    };
  },
  created() {
    getData();
  },
  updated() {
    getData();
  },
  computed: {
    title() {

      return `Задача № ${this.item.id}`;
    },
  },
  methods: {
    navigateTo(where, id, item) {
      this.$router.push({ name: where, params: { id }, query: item });
    },
    getData() {
      if(!!!this.item.id) {
        var id = this.$route.params.id;
        getOneTask(id).then(respone=>{
          this.item.id = id;
          this.item.name = respone.data.mytasks_name;
          this.item.desc = respone.data.mytasks_desc;
          this.item.status = respone.data.mytasks_status;
        });
      }
    },
    deleteTask(id) {
      deleteTask(id).then(response=>{
        console.log(response);
      });
      this.$router.push({ name: 'home' });
    }
  },
};
</script>

<style scoped>

</style>
