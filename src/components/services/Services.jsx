import React, { useState } from 'react';
import './services.css';

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">
				What I offer
			</span>
			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Application <br /> Developmment
						</h3>
					</div>
					<span
						className="services__button"
						onClick={() => toggleTab(1)}
					>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 1
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">
								Application Development
							</h3>
							<p className="services__modal-description">
								Projects is a testament to my
								problem-solving skills, attention to detail,
								and dedication to creating robust and
								innovative solutions.
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Create a full-fledged e-commerce website
										and payment integration.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Develop a customer portal app that
										allows users to generates reports.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Create a customer portal for streaming
										app
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">
							UX/UI <br /> Design
						</h3>
					</div>
					<span
						className="services__button"
						onClick={() => toggleTab(2)}
					>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 2
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">
								UX/UI Design
							</h3>
							<p className="services__modal-description">
								Conceptualization to pixel-perfect
								execution, each project reflects my
								commitment to user-centric design,
								thoughtful interactions, and visual
								storytelling.
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										E-commerce Website Design <br />
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Mobile App Onboarding Design
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Portfolio Website Design
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="services__content">
					<div>
						<i className="uil uil-edit services__icon"></i>
						<h3 className="services__title">
							API <br /> Integration
						</h3>
					</div>
					<span
						className="services__button"
						onClick={() => toggleTab(3)}
					>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 3
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className="services__modal-content">
							<i
								onClick={() => toggleTab(0)}
								className="uil uil-times services__modal-close"
							></i>

							<h3 className="services__modal-title">
								API Integration
							</h3>
							<p className="services__modal-description">
								Real-time data retrieval to interactive
								features, each project exemplifies my
								ability to harness the power of APIs to
								enhance user experiences and deliver
								valuable functionalities
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Database / API and Integration
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Google API integration
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Content Management System (CMS)
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Employee Management Dashboard
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										Client Records System
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
