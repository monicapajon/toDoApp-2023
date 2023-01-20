const LoginForm = () => {

    return (
        <form>
            <div>
            <label htmlFor="">Usuario</label>
            <input type="text" name="user" />
            </div>
            <div>
            <label htmlFor="">Contraseña</label>
            <input type="text" name="pass" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )

}

export { LoginForm }