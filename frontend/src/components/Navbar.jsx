import React from 'react';
import imgLogo from './../assets/img/variedades-ampi.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container">
					<NavLink to="/" className="navbar-brand">
						<img src={imgLogo} alt="Logo Variedades Ampi" width="200" />
					</NavLink>
					<a className="navbar-brand" href="#"></a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link active fw-bold" aria-current="page">
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Hola
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Cartas
								</a>
								<ul className="dropdown-menu">
									<li>
										<NavLink to="/personal-card" className="dropdown-item">
											Personal
										</NavLink>
									</li>
									<li>
										<NavLink to="/family-card" className="dropdown-item">
											Familiar
										</NavLink>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<NavLink to="/comunity-card" className="dropdown-item">
											JAC Recuerdo
										</NavLink>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
