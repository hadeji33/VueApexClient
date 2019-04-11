import Vue from 'vue';
const axios = require('axios')

/**
 *
 * @returns {Q.Promise<any> | * | Promise<T | never>}
 */
export const getAllTasks = () =>
  axios.get(Vue.config.server + '/' + Vue.config.api.tasks.all).catch(err => {
    console.info(err.response);
    Vue.notify({
      type: 'error',
      text: err.response.data.message,
    });
  });

/**
 *
 * @param id
 * @returns {Q.Promise<any> | * | Promise<T | never>}
 */
export const getOneTask = (id) => axios.get(Vue.config.server + '/' + Vue.config.api.tasks.one.replace('$id', id)).catch(err => {
  console.info(err.response);
  Vue.notify({
    type: 'error',
    text: err.response.data.message,
  });
});

/**
 *
 * @param id
 * @param payload
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const editTask = (id, payload) => axios.put(Vue.config.server + '/' + Vue.config.api.tasks.one.replace('$id', id), payload).catch(err => {
  console.info(err.response);
  Vue.notify({
    type: 'error',
    text: err.response.data.message,
  });
});
/**
 *
 * @param payload
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const createTask = (payload) => axios.post(Vue.config.server + '/' + Vue.config.api.tasks.all, payload).catch(err => {
  console.info(err.response);
  Vue.notify({
    type: 'error',
    text: err.response.data.message,
  });
});

/**
 *
 * @param id
 * @returns {Q.Promise<any> | * | Promise<T | never>}
 */
export const deleteTask = (id) => axios.delete(Vue.config.server + '/' + Vue.config.api.tasks.one.replace('$id', id)).catch(err => {
  console.info(err.response);
  Vue.notify({
    type: 'error',
    text: err.response.data.message,
  });
});

