<template>
  <div class="h-screen flex flex-col justify-center">
    <div class="flex flex-col justify-center items-center pt-10 pl-2 pr-2">
      <h1 class="lg:text-9xl sm:text-6xl text-5xl font-semibold pb-6">
        Identification
      </h1>
      <p class="font-semibold">Antoine VOILLOT</p>
      <p class="text-center">
        385 Rue du Domaine du Moulin, 34380 Saint-Martin-de-Londres
      </p>
      <div class="flex gap-4 items-center pt-8">
        <a href="tel:+33667408248" class="contact-button">Appel</a>
        <a href="sms:+33667408248" class="contact-button">SMS</a>
        <a href="mailto:antoine.voillot@yahoo.fr" class="contact-button"
          >Email</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-button {
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: #191e4e;
  color: white;
  text-decoration: none;
}
</style>
