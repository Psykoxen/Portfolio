<template>
  <div class="leading-tight w-full box-border">
    <div class="flex flex-row justify-between items-center font-semibold">
      <p class="text-lg">{{ experience.entity }}</p>
      <p class="text-gray-400 min-w-fit">
        {{ experience.startDate }}
        <span v-if="experience.endDate != ''">-</span> {{ experience.endDate }}
      </p>
    </div>
    <a class="text-gray-400" target="_blank" :href="experience.url">{{
      experience.argument
    }}</a>
    <p class="text-justify">{{ experience.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
