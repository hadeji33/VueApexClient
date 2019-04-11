<template>
  <v-container class="fs-organizer-container">
    <v-flex md3 mb-5>
      <h1>{{title}}</h1>
    </v-flex>
    <v-form>
      <v-layout column justify-space-around>
        <v-flex md12>
          <v-text-field
            label="Наименование"
            v-model="item.name"
          >
          </v-text-field>
          <v-checkbox
            class="fs-checkbox"
            label="Статус"
            v-model="item.status"
          >
          </v-checkbox>
        </v-flex>
        <v-flex md12>
          <v-textarea
            label="Описание"
            v-model="item.desc"
          >
          </v-textarea>
        </v-flex>
      </v-layout>

      <v-flex text-md-right>
        <v-btn class="fs-btn">Отмена</v-btn>
        <v-btn @click="saveChanges(item)" class="fs-btn primary fs-form-footer__btn"  >Сохранить</v-btn>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
import { editTask } from '@/router/routes/Tasks';

export default {
  name: 'Edit',
  data() {
    return {
      item: this.$route.query,
    };
  },
  computed: {
    title() {
      return `Задача № ${this.item.id}`;
    },
  },
  methods: {
    saveChanges(item) {
      console.log('text');
      var putItem = {
        id: item.id,
        name: item.name,
        desk: item.desc,
        taskStatus: item.status,
      };
      console.log(putItem);
      editTask(putItem.id, putItem).then((response) => {
        console.log(response);
      });
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>

</style>
