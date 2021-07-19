import Vue from 'vue';
import Vuex from 'vuex';
import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import getters from './getters/getters';
import mutations from './mutations/mutations';

Vue.use(Vuex);

const actions = { ...commonActions, ...apiRequests };

const store = new Vuex.Store({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;