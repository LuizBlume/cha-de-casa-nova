<template>
    <div class="carrinho-container-pai">
        <router-link to="/carrinho">
            <span class="carrinho-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
        </span>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.carrinho-container-pai {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    bottom: 20px;
    margin-right: 60px;
}

.carrinho-container-pai > a {
    border-radius: 50%;
    background: linear-gradient(#ad5631, #bf6f4e);
    color: #fdfdfd;
    padding: 1.3rem;
    transition: .3s ease-in-out;
    cursor: pointer;
}

.carrinho-container-pai > a:hover {
    scale: 1.1;
}
</style>