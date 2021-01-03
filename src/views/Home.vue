<template>
  <v-container class="middlealign">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h4>
      sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </h4>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
    <v-row class="container-main-options">
      <v-col>
        <v-card class="mx-auto" max-width="400" outlined elevation="2">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">item</div>
              <v-list-item-title class="headline mb-1">
                how many words
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined color="primary" text to="/future">
              Start writing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="400" outlined elevation="2">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                item
              </div>
              <v-list-item-title class="headline mb-1">
                how many words
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined color="primary" text to="/presentvirtues">
              Start writing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="container-main-options">
      <v-col>
        <v-card class="mx-auto" max-width="400" outlined elevation="2">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">item</div>
              <v-list-item-title class="headline mb-1">
                how many words
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined color="primary" text to="/past">
              Start writing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="400" outlined elevation="2">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                item
              </div>
              <v-list-item-title class="headline mb-1">
                how many words
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined color="primary" text to="/presentflaws">
              Start writing
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  components: {},
};
</script>

<style>

</style>