<template>
  <div class="borders p-10 pl-6">
    <h3 class="text-2xl font-semibold pb-4 border-white w-fit">{{ title }}</h3>
    <div class="w-full flex flex-col pl-10 items-center gap-6">
      <TimelinePartItem
        v-for="experience in experiences"
        :experience="experience"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
