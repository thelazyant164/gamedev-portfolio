<template>
  <div>
    <h1>Workshop</h1>

    <div style="margin-bottom: 30px;">
      And here are some work-in-progress I've been up to, including 2 soon-to-be 2024 PAX demos!
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import currentProjectsData from "@/data/CurrentProjectsData";

export default Vue.extend({
  name: "CurrentProjects",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: currentProjectsData,
    };
  },
});
</script>
