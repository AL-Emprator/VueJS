<!-- Counter Component  -->
 <script setup>
  import { ref } from 'vue'

  const count = ref(0)

  function increment() {

    count.value++
  }
</script>


  <template>
    <div>
     
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
     
</template>

<style scoped>
  p {
    color: #42b983;
  }
</style>