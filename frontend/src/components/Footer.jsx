import React from 'react';

export default function Footer() {
	return (
		<>
			<footer className="bg-light text-center text-lg-start mt-5">
				<div className="container p-4">
					<div className="row">
						<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
							<h5 className="text-uppercase">Footer text</h5>

							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
								pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque
								eum delectus sint!
							</p>
						</div>

						<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
							<h5 className="text-uppercase">Footer text</h5>

							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
								pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque
								eum delectus sint!
							</p>
						</div>
					</div>
				</div>

				<div className="text-center p-3 bg-info">
					<div className="d-flex justify-content-between">
						<span>© 2022 Variedades Ampi</span>
						<span>
							Desarrollado por{' '}
							<a className="text-dark" href="http://jhoncamargo.000webhostapp.com/">
								Jhon Camargo
							</a>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
}
