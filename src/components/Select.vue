<template>
  <div class="select-root" v-if="showComponent">
    <div class="select-wrap">
      <div class="select-text" @click="toggleShowList">
        {{ selectedText || 'nothing selected' }}
      </div>
      <input class="search-input"
             @click="toggleShowList"
             type="text"
             v-model="search"
             placeholder="search">

      <div class="__select" v-if="showList">
        <div class="__select__content">
          <div
            class="__select__option"
            @click="toggleSelection(item)"
            v-for="item in filteredItems"
            :key="item.title">
            <span class="__select__label" :class="{active: item.isSelected}">
            {{ item.title }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="controls">
      <button class="__btn" @click="selectAll">select all</button>
      <button class="__btn" @click="clear">clear</button>
      <button class="__btn" @click="submit" type="submit">apply</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "v-select",
  props: {
    url: {type: String, default: null, required: true},
    name: {type: String, default: null, required: false},
    preselected: {type: Array, default: null, required: false}
  },

  data() {
    return {
      items: [],
      selected: [],
      showList: false,
      search: '',
      showComponent: false
    }
  },

  computed: {
    selectedText() {
      let str = ''
      this.selected.forEach(i => str = str + i.title + ', ')
      str.slice(0, -2)
      return str
    },
    filteredItems() {
      return this.items.filter(i => i.title
        .toLowerCase()
        .includes(this.search.trim().toLowerCase())
      )
    }
  },

  created() {
    axios
      .post(this.url, {
          limit: 0,
          offset: 0
        },
        {
          headers: {"Content-Type": "multipart/form-data"}
        })
      .then((response) => {
        this.items = response.data.message.data
        this.items.forEach(item => item.isSelected = false)
        if (this.preselected) {
          this.preselected.forEach(id => {
            this.select(this.items.find(item => item.id === id));
          })
        }
        this.showComponent = true
      })
      .catch(console.log);
  },

  methods: {
    select(item) {
      item.isSelected = true
      this.selected.push(item)
    },
    toggleSelection(item) {
      if (!item.isSelected) {
        this.select(item)
      } else {
        item.isSelected = false
        const idxToRemove = this.selected.findIndex(i => i.id === item.id)
        this.selected.splice(idxToRemove, 1)
      }
    },
    selectAll() {
      this.items.forEach(item => this.select(item))
    },
    clear() {
      this.items.forEach(item => item.isSelected = false)
      this.selected = [];
    },
    toggleShowList() {
      this.showList = !this.showList
    },
    // здесь немного отошел от примера, потому что там отправляются параметры categories[]=27&projects[]&items[]=39
    // выглядит не очень удобно, в реальной задаче я бы обсудил с бэкендером/лидом чтобы формат был как в коде
    // JSON.stringify - самый простой способ, обычно для этого используется что-то типа https://www.npmjs.com/package/qs
    submit() {
      const payload = JSON.stringify(this.selected.map(i => i.id))
      console.log(payload)
      axios.get('/', {
        params: {
          [this.name]: payload
        }
      })
    }
  }
}
</script>

<style scoped>
.select-root {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.select-wrap {
  width: 230px;
}

.select-text {
  margin-bottom: 10px;
  width: 100%;
  min-height: 21px;
  border: 1px solid black;
  max-height: 100px;
  overflow: auto;
}

.search-input {
  width: 100%;
}

.controls {
  display: flex;
  flex-direction: column;
}

.__select__label.active {
  background-color: #dedede;
}

.__btn + .__btn {
  margin-top: 10px;
}
</style>
