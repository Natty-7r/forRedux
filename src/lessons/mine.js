import userEvent from '@testing-library/user-event';
import React from 'react';

const giveTime = () => {
	const now = new Date(Date.now());
	return now.toLocaleTimeString();
};

const Usernames = function (props) {
	return (
		<div className="user-name">
			<ul type="none">
				<li>
					<h2>first name : {props.names.firtName}</h2>
				</li>
				<li>
					<h2>middle name : {props.names.middleName}</h2>
				</li>
				<li>
					<h2>last name : {props.names.lastName}</h2>
				</li>
			</ul>
		</div>
	);
};
const School = function (props) {
	return (
		<div className="user">
			<div className="school">
				<ul type="none">
					<li>
						<h2>school name: {props.school.schoolName}</h2>
					</li>
					<li>
						<h2>school name: {props.school.location}</h2>
					</li>
				</ul>
			</div>
		</div>
	);
};
const user = {
	names: { firtName: 'natty', middleName: 'fekadu', lastName: 'gebre' },
	school: { schoolName: 'Jimma', location: 'jimma' },
};
const UserInfo = function (props) {
	if (!props.toggle) return null;
	return (
		<div>
			<Usernames names={props.user?.names} />
			<School school={props.user?.school} />
		</div>
	);
};
const bigTime = function () {
	const el = document.querySelector('.time');
	el.style.fontSize = '24px';
};
const Header = function (props) {
	return (
		<div className="header">
			<div className="logo"></div>
			<ul className="header-lists">
				<li className="list">home</li>
				<li className="list">{props.a}</li>
				<li className="list">{props.c}</li>
			</ul>
		</div>
	);
};
class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: props.toggle,
		};
	}
	toggleParent(parent, toggle) {
		parent.setState((prevState) => ({
			toggle: !prevState.toggle,
		}));
	}
	setToogleVariable(toggle) {
		if (toggle) return 'on';
		if (!toggle) return 'off';
	}
	componentDidUpdate() {}
	toggle() {
		this.setState((prevState) => {
			return {
				toggle: !prevState.toggle,
			};
		});
		this.toggleParent(this.props.parent, this.state.toggle);
	}
	render() {
		return (
			<button
				className={`toggle-btn ${this.setToogleVariable(this.state.toggle)}`}
				onClick={this.toggle.bind(this)}
			>
				{this.setToogleVariable(this.state.toggle)}
			</button>
		);
	}
}
class MyApp extends React.Component {
	// static defaultprops = {
	// 	me: true,
	// } ????????????;
	constructor(props) {
		super(props);
		this.defaultprops = true;
		this.state = { date: new Date(), toggle: true };
	}
	componentDidMount() {
		const timer = setInterval(() => {
			this.setState({ date: new Date() });
		}, 1000);
	}
	componentDidUpdate() {
		document.querySelector('.time').style.fontSize = '16px';
	}
	toggle() {
		this.setState((prevState, prevProps) => {
			console.log(prevProps);
			return {
				toggle: !prevState.toggle,
				off: prevState.off,
			};
		});
	}
	render() {
		return (
			<div className="whole">
				<Header a="about" c="contact" />
				<div className="body">
					<p className="time" onMouseOver={bigTime.bind(this)}>
						{this.state.date.toLocaleTimeString()}{' '}
					</p>
					<Button toggle={true} parent={this} />
					<UserInfo user={user} toggle={this.state.toggle} />
				</div>
			</div>
		);
	}
}
export default MyApp;
/////// component function
