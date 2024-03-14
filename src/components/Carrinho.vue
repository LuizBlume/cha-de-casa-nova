<template>
    <link
      href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
      rel="stylesheet"
    />
    <div class="container-pai">
        <h1 class="titulo">Carrinho</h1>

        <div class="produtos">
            <div class="produto">
                <h2 class="nome-produto">Escorredor de massas</h2>

                <div class="quantidade">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                </div>

                <div class="remover">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.titulo {
    margin-top: 20px;
    font-family: "Kaushan Script";
    text-align: center;
    font-size: 3rem;
}

.produtos {
    display: flex;
}

.produto {
    display: flex;
    border-top: 2.5px solid #ccc;
}

.divisoria {
    width: 100%;
}

.quantidade {
    display: flex;
}

.remover > button {
    border: none;
    outline: none;
    background: transparent;
    color: #ccc;
}
</style>