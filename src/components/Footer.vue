<template lang="">
    <div class="footer">
        <span class="footer-item">About</span>
        <span class="footer-item">Github</span>
        <span class="footer-item">LinkedIn</span>
    </div>
</template>
<script>
export default {
    name: "Footer",
};
</script>

<style>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.footer-item {
    padding: 1rem 1rem;
}
</style>
