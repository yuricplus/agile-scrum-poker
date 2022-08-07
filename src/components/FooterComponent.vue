<template>
    <footer class="footer">
        <div class="container">
            <div class="content-side">
                Created By
                <a href="#">
                    <span>@Yuri Martins</span>
                </a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'footer-componet'
}
</script>
<style scoped>
.footer {  
    bottom: 30px;
    width: 100%;
    height: 10px;
    padding: 15px;
    background: #ffff;
}

.footer
.container {
    max-width: 80%;
    margin: auto;
    border-top: 1px solid #eaeaea;
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

</style>
