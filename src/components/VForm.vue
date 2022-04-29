<template>
  <form id="form">
    <v-select
      ref="select1"
      :url="url1"
      name="categories"
      :preselected="[27,29]"/>

    <v-select
      ref="select2"
      :url="url2"
      name="projects"/>

    <v-select
      ref="select3"
      :url="url2"
      name="items"/>
    <button class="__btn" id="submit" @click="submit">submit</button>
  </form>
</template>

<script>
import Select from './Select.vue';

export default {
  name: "VForm",
  components: {
    'v-select': Select
  },

  data() {
    return {
      url1: 'https://lobster.tools/api/v1/categories',
      url2: 'https://lobster.tools/api/v1/projects'
    }
  },
  methods: {
    submit() {
      this.$refs.select1.submit()
      this.$refs.select2.submit()
      this.$refs.select3.submit()
    }
  }
}
</script>

<style scoped>
#form {
  display: flex;
  column-gap: 20px;
}

#submit {
  height: 25px;
}
</style>
