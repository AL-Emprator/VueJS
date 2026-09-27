<script setup>

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a project', completed: false },
  { id: 3, text: 'Deploy the app', completed: false }
])



</script>

<template>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    </li>
  </ul>

</template>