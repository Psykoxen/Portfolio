<template>
  <div
    class="sm:h-48 sm:w-48 h-30 w-80 flex flex-col items-center rounded-md borders overflow-hidden bg-[#010314] p-3"
  >
    <p class="text-left w-full font-bold text-lg">{{ title }}</p>
    <div class="flex-grow">
      <p class="text-left w-full font-semibold text-sm text-gray-400">
        {{ alt }}
      </p>
    </div>
    <div class="flex flex-row gap-2 justify-between w-full">
      <p class="font-semibold text-xs text-gray-400">{{ language }}</p>
      <div class="flex flex-row gap-2">
        <a v-if="url != ''" :href="url" target="_blank" class="rounded-full">
          <img src="/svg/Website.svg" class="h-6 w-6" />
        </a>
        <a v-if="code != ''" :href="code" target="_blank" class="rounded-full">
          <img src="/svg/Github.svg" class="h-6 w-6" />
        </a>
      </div>
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
    alt: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
