const Wrapper = ({children}) => {
    return (
        <div class="container">
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white border-bottom">
                <div className="container">
                    <a className="navbar-brand" href="/">Fixed navbar</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="pt-5 px-2 px-md-3">{children}</main>
        </div>
    )
}

export default Wrapper;