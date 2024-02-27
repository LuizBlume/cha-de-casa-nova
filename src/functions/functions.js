// Arquivo: funcoes.js
import { getAuth, fetchSignInMethodsForEmail, signOut, onAuthStateChanged } from "firebase/auth";
import { useLogoutStore } from "../stores/logout"
import { useUsuarioStore } from "../stores/usuario"

let logoutStore;
let usuarioStore;

export async function initStores() {
    logoutStore = useLogoutStore();
    usuarioStore = useUsuarioStore();
}

export async function emailCadastrado(email) {
    if (!logoutStore) await initStores();

    const auth = getAuth();
    try {
        const emailVerificacao = await fetchSignInMethodsForEmail(auth, email)
        return emailVerificacao.length > 0
    } catch (error) {
        console.error("Erro ao verificar se o email está cadastrado:", error);
        return false;
    }
}

export async function logout() {
    if (!logoutStore) await initStores();

    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("Usuário deslogado com sucesso!");
        logoutStore.logoutUsuario = false;
        changePiniaUser();
    } catch (error) {
        console.error("Erro ao tentar deslogar o usuário:", error);
    }
}

export async function changePiniaUser() {
    if (!usuarioStore) await initStores();

    const auth = getAuth();

    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                usuarioStore.usuario = user;
                console.log(usuarioStore.usuario);
            } else {
                usuarioStore.usuario = false
                console.log("Nenhum usuário logado", user);
            }
        })
        console.log("Função concluída com sucesso");
    } catch (error) {
        console.error("Erro ao tentar achar um usuário", error);
    }
}