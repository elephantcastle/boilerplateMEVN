<template>
  <v-app-bar app color="#F5F5F">
    <div class="d-flex align-center">
      <v-btn text plain rounded large to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        write about myself 
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <NavigationMenu />
  </v-app-bar>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu"
export default {
  data: () => ({
    themeType: true,
  }),
  components: {
    NavigationMenu
  },
};
</script>

