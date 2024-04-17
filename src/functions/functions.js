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
        logoutStore.logoutUsuario = false;
        changePiniaUser();
    } catch (error) {
    }
}

export async function changePiniaUser() {
    if (!usuarioStore) await initStores();

    const auth = getAuth();

    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                usuarioStore.usuario = user;
            } else {
                usuarioStore.usuario = false
            }
        })
    } catch (error) {
        console.error("Erro ao tentar achar um usuário", error);
    }
}

export function heightAdjust(alturaComponente, alturaHtml) {
    if (alturaComponente.value.offsetHeight <= alturaHtml) {
        alturaComponente.value.style.height = '100vh'
    } else {
        alturaComponente.value.style.height = 'auto'
    }
}
