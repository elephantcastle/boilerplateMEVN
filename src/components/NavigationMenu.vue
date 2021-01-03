<template>
  <div class="text-center">
      
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              icon
              x-large
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <span>Options</span>
        </v-tooltip>
      </template>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" @click="redirect(item)">
                {{item.text.toUpperCase()}}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "NavigationMenu",
  data: () => ({
    items: [
      { text: "item", link : "/future" },
      { text: "item", link : "/presentvirtues" },
      { text: "item", link : "/past"},
      { text: "item", link : "/presentflaws"},
      { text: "logout"}
    ],
    selectedItem: 0,
  }),
  methods:{
    redirect(item){
      if(item.text === 'logout'){
         axios
          .get(`http://localhost:4000/api/auth/logout/`).then(response=>{
            console.log(response.data)
            this.$router.push({ path: '/home' })
          })
      }else{
        this.$router.push({ path: item.link })
      }
    }
  }
};
</script>
<style>
</style>
