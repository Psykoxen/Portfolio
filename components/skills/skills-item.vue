<template>
  <div class="h-32 w-32 flex flex-col items-center rounded-md borders box">
    <p class="text-left w-full p-2 font-semibold text-sm">{{ item }}</p>
    <div class="flex-1 flex flex-col items-center justify-center">
      <img class="h-12 w-12" :src="'/svg/' + item + '.svg'" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
