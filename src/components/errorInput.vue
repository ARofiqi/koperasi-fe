<template>
  <span class="text-red-600 text-sm italic">{{ this.massage }}</span>
</template>

<script>
export default {
  name: "ErrorInput",
  props: {
    massage: String,
  },
};
</script>
