<template>
  <div>
    <h1>Archives</h1>

    <div style="margin-bottom: 30px;">
      The following are some past projects I've made or heavily contributed to.
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import PastProjectsData from "@/data/PastProjectsData";

export default Vue.extend({
  name: "PastProjects",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: PastProjectsData,
    };
  },
});
</script>
