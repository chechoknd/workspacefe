import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://users.test/api'
})

Vue.prototype.$axios = axiosInstance
