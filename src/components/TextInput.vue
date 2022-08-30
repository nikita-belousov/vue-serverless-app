<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        caption: String,
        placeholder: String,
        fullWidth: Boolean,
        number: Boolean,
    },

    emits: ['change'],

    data() {
        return {
            value: "",
        };
    },

    methods: {
        handleChange(event: Event) {
            const val = (event.target as HTMLInputElement).value;
            this.value = val;
            this.$emit('change', val);
        },
    },
});
</script>

<template>
    <div class="flex flex-col mb-4">
        <span v-show="caption" title="caption" class="mb-2">{{ caption }}</span>
        <input
            type="text"
            class="h-10 w-72 px-4 text-black rounded-md focus:outline focus:outline-2 focus:outline-accent"
            :value="value"
            :class="fullWidth && 'w-full'"
            :title="title"
            :placeholder="placeholder"
            @input="handleChange"
        />
    </div>
</template>

<styles>
</styles>
