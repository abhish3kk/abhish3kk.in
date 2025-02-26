<script setup lang="ts"></script>
<template>
  <div class="max-w-3xl mx-auto p-6 space-y-8">
    <!-- About Me -->
    <section>
      <h2 class="text-2xl font-semibold">
        {{ $t("home.about.title") }}
      </h2>
      <p
        class="mt-4"
        v-for="(paragraph, index) in $tm('home.about.content')"
        :key="'about-' + index"
      >
        {{ paragraph }}
      </p>
    </section>

    <!-- Philosophy -->
    <section>
      <h2 class="text-2xl font-semibold">
        {{ $t("home.philosophy.title") }}
      </h2>
      <p
        class="mt-4"
        v-for="(point, index) in $tm('home.philosophy.content')"
        :key="'philosophy-' + index"
      >
        {{ point }}
      </p>
    </section>

    <!-- Why I Built This -->
    <section>
      <h2 class="text-2xl font-semibold">
        {{ $t("home.why.title") }}
      </h2>
      <p
        class="mt-4"
        v-for="(paragraph, index) in $tm('home.why.content')"
        :key="'why-' + index"
      >
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>
