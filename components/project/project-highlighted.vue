<template>
  <div
    class="h-96 w-60 flex flex-col items-center rounded-md borders overflow-hidden bg-[#010314]"
  >
    <img :src="img" class="h-48 w-60 object-cover" />
    <div class="h-48 w-60 flex flex-col items-center rounded-md p-4">
      <div class="flex flex-row justify-between w-full">
        <p class="text-left w-full font-bold text-lg">{{ title }}</p>
      </div>
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
          <a
            v-if="code != ''"
            :href="code"
            target="_blank"
            class="rounded-full"
          >
            <img src="/svg/Github.svg" class="h-6 w-6" />
          </a>
        </div>
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
