<template>
  <div class="page">
    <h1>Vue XSS Test</h1>

    <input
      v-model="userInput"
      placeholder="Write some HTML here"
    />

    <!-- Semgrep should detect this line because of v-html -->
    <div v-html="userInput"></div>
  </div>
</template>

<script>
export default {
  name: "VulnerableHtml",
  data() {
    return {
      userInput: "<img src=x onerror=alert('XSS') />",
    };
  },
};
</script>

<style scoped>
.page {
  padding: 20px;
}
</style>