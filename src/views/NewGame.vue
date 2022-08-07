<template>
    <section class="new-game-section">
        <div class="container">
            <form action="" class="form-content">
                <h1>Choose a name and a voting system for your game.</h1>
                <input type="text" placeholder="game's name">
                <label for="voting">voting system</label>
                <select name="voting" id="voting">
                    <option value="1">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ? )</option>
                </select>
                <button class="primary">create game</button>
            </form>
        </div>
    </section>
</template>
<style scoped>
.new-game-section {
    margin-top: 300px;;
    margin-bottom: 250px;
}

.new-game-section
.container {
    width: 500px;
    margin: auto;
}

.new-game-section
.container 
.form-content {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.new-game-section
.container 
.form-content label {
    text-align: left;
    margin-left: 15px;
}
</style>