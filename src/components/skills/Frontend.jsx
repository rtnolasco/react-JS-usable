import React from 'react';

const Frontend = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Frontend Skills</h3>

			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">HTML</h3>
							<span className="skills__level">
								Advanced
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">CSS / CSS3</h3>
							<span className="skills__level">
								Advanced
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">Javascript</h3>
							<span className="skills__level">
								Advanced
							</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">
								CSS Frameworks
							</h3>
							<span className="skills__level">
								Intermediate
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">GIT</h3>
							<span className="skills__level">
								Intermediate
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i class="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">React</h3>
							<span className="skills__level">
								Intermediate
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frontend;
