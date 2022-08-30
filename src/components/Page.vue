<script lang="ts">
export default {
    name: 'Page',
    props: {
        title: {
            type: String,
            required: true,
        },
        alignCenter: Boolean,
    },
}
</script>

<template>
    <div class="page">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <div :class="{ content: true, centered: alignCenter }">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content {
    flex-grow: 1;
    margin-top: 3rem;
}
.content.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>