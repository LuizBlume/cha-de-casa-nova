import { getAuth, fetchSignInMethodsForEmail } from "firebase/auth";

async function emailCadastrado(email) {
    const auth = getAuth();
    try {
        const emailVerificacao = await fetchSignInMethodsForEmail(auth, email)
        return emailVerificacao.length > 0
    } catch (error) {
        console.error("Erro ao verificar se o email está cadastrado:", error);
        return false;
    }
}

export { emailCadastrado };