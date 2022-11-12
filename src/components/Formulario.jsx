
const Formulario = () => {
    return (
        <>
        <div className="container-fluid mt-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Registro del participante</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                                    <label htmlFor="nombre">Nombre</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="apellidos" placeholder="Apellidos" />
                                    <label htmlFor="apellidos">Apellidos</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="url" className="form-control" id="twitter" placeholder="Twitter" />
                                    <label htmlFor="twitter">Twitter</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 d-grid">
                            <button className="btn btn-outline-primary btn-lg">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formulario