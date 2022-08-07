<script>

export default {
    name: 'header-component'
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="logo-side">
                <a href="#">
                    <span>Agile Scrum Poker</span>
                </a>
           </div>
           <div class="side-elements">
               <button class="primary">start new game</button>
               <button class="secondary">add room</button>
           </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 10px;
    padding: 15px;
    background: #ffff;
}

.header
.container {
    max-width: 85%;
    margin: auto;
    border-bottom: 1px solid #eaeaea;
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

.header 
.container
.logo-side span {
    font-weight: bolder;
}

a {
    text-decoration: none;
}

.header 
.container
.side-elements {
    display: flex;
    justify-content: space-between;
    width: 210px;
}
</style>