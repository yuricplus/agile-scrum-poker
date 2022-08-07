<template>
    <ul class="list">
        <li class="item">
            <div class="image"></div>
            <span class="list-name">John Doe</span>
            <div class="card">
                <span class="votes">10</span>
            </div>
        </li>
        <li class="item">
            <div class="image"></div>
            <span class="list-name">Jane Doe</span>
            <div class="card">
                <span class="votes">10</span>
            </div>
        </li>
        <li class="item">
            <div class="image"></div>
            <span class="list-name">Jane Doe</span>
            <div class="card">
                <span class="votes">10</span>
            </div>
        </li>
    </ul>
</template>
<style scoped>
.list {
    max-height: 300px;
    overflow-x: scroll;
}
.list, .item {
    list-style: none;
    padding-left: 20px;
}

.list .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    padding: 10px;
}

.list .item .image {
    border-radius: 50%;
    background: #eaeaea;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.list .item .card {
    width: 30px;
    border: 1px solid #eaeaea;
    margin-left: 10px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list .item .votes {
    font-weight: bolder;
}
</style>
<script>

export default {
    name: 'votes-componets'
}
</script>
