<template>
    <div class="room">
        <section>waiting votes...</section>
        <aside class="aside">
            <votes-component />
            <button class="primary">revel cards</button>
        </aside>
    </div>
    <div class="list-cards">
        sdsd
    </div>
</template>
<style scoped>
.room {
    margin: 200px auto 200px auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
}

.room
aside.aside {
    border-left: 1px solid #eaeaea;
}
</style>
<script>
import VotesComponent from '../components/VotesComponent.vue';

export default {
    components: {
        VotesComponent
    }
}
</script>
