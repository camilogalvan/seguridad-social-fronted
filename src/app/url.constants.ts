const getURlBackend = () => {
    let client = `${window.location.protocol}//${window.location.hostname}` //"http://35.222.30.134"
    let portBackend = 8082;

    return `${client}:${portBackend}/`
}

export const REST = getURlBackend();
export const API_REST = REST+"api/";

export const TOKEN = {
TOKEN_KEY: 'AuthToken',
USUARIO_KEY: 'AuthUser'
}
export const NAME_APP = "Seguridad Social Para Todos"