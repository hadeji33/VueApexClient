<template>
  <v-app>
    <v-layout v-if="isDefaultRoute()" class="indexes-test">
      <v-container fluid class="mt-tasks">
      <v-layout class="fs-dish" row>
        <v-flex md3 mb-5>
          <h1>{{title}}</h1>
        </v-flex>
        <v-flex md9 text-md-right>
          <v-btn :to="{name: 'TaskCreate'}" flat class="fs-btn fs-btn--primary fs-btn__add-dish">Добавить Задачу</v-btn>
        </v-flex>
      </v-layout>
      <v-layout class="fs-dish-result" mb-3>
        <v-flex>
          <v-data-table
            v-model="selected"
            :headers="taskHeaders"
            :items="taskItems"
            hide-actions
            class="elevation-1"
            select-all
            item-key="name"
          >
            <template v-slot:items="props">
              <tr>
                <td>
                  <v-checkbox
                    class="fs-checkbox"
                    color="#66717f"
                    v-model="props.selected"
                    primary
                    hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.status }}</td>
                <td>
                  <v-flex row>
                    <v-icon @click="navigateTo('TaskView', props.item.id, props.item)" class="fs-active-icon">remove_red_eye</v-icon>
                    <v-icon @click="navigateTo('TaskEdit', props.item.id, props.item)" class="fs-active-icon">edit</v-icon>
                    <v-icon @click="deleteTask(props.item.id)" class="fs-active-icon">delete</v-icon>
                  </v-flex>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
      <v-flex text-md-right>
        <v-btn flat class="fs-btn fs-btn--secondary fs-btn__delete"><v-icon dark left>delete</v-icon>удалить выбранное</v-btn>
      </v-flex>
    </v-container>
    </v-layout>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';
import { getAllTasks } from '@/router/routes/Tasks';
import { deleteTask } from '@/router/routes/Tasks';
import _ from 'lodash';


export default {

  name: 'App',
  created () {
    getAllTasks().then(response => {
       this.taskItems = _.map(response.data.items, item => {
        return {
          id: item.mytasks_id,
          name: item.mytasks_name,
          desc: item.mytasks_desc,
          status: item.mytasks_status,
        };
      });
    });
  },
  updated () {
    getAllTasks().then(response => {
      this.taskItems = _.map(response.data.items, item => {
        return {
          id: item.mytasks_id,
          name: item.mytasks_name,
          desc: item.mytasks_desc,
          status: item.mytasks_status,
        };
      });
    });
  },
  data() {
    return {
      title: "Мои задачи",
      selected: [],
      taskHeaders: [
        { text: 'Наименование', value: 'name' },
        { text: 'Статус', value: 'status' },
        { text: 'Операции', value: 'actions' },
      ],
      taskItems: [],
    }
  },
  methods: {
    ...mapMutations([
      'setShowPreloader',
    ]),
    isDefaultRoute() {
      return this.$router.history.current.path === '/';
    },
    navigateTo(where, id, item) {
      this.$router.push({ name: where, params: { id }, query: item });
    },
    deleteTask(id) {
      deleteTask(id).then(response=>{
        console.log(response);
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
