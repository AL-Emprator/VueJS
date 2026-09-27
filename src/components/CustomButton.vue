<script setup>
const props = defineProps({
  price: Number
})

const emit = defineEmits(['btnClick'])

function buttonGeklickt() {
  emit('btnClick', 'btn was clicked')
}

</script>

<template>
  <button @click="buttonGeklickt">
    <slot />
        – {{ props.price }} €
  </button>
</template>