import React from "react";
import {NavLink } from 'react-router-dom';

export default class Lists extends React.Component
{
	constructor(props)
  {
    super(props);
	}

  render()
  {	
		
		return(
			<>
				<Waitings setDecline={this.props.setDecline} setAccept={this.props.setAccept} items={this.props.requests.filter(req=> req.status == 1)} />
				<Arrived setWait={this.props.setWait} items={this.props.requests.filter(req=> req.status == 2)} />
				<Declined setAccept={this.props.setAccept} items={this.props.requests.filter(req=> req.status == 3)} />
			</>
		)
	}
}
class WlistItem extends React.Component{
	constructor(props)
  {
    super(props);
	}

	render(){
		return (
			<NavLink to={`/request/${this.props.id}`} className="waitings__item">
				<div className="item__name">{this.props.fullName}</div>
				<div className="item__date-wrapper">
					<div className="item__date">{this.props.date}</div>
					<div className="item__time">{this.props.time}</div>
				</div>
			</NavLink>
	);
	}

}
class Waitings extends React.Component{

	constructor(props)
  {
    super(props);
	}

	render(){
		return <div className="waitings ">
			<h2 onClick={e=>{
				e.target.classList.toggle('hidden')
			}}>Ожидают</h2>
			<div className=" list">
			{this.props.items.map(item=>{
					return <WlistItem setAccept={this.props.setAccept} setDecline={this.props.setDecline} key={item.id} id={item.id} fullName={item.fullName} date={item.date} time={item.time}/>
				})}
			</div>
			</div>
	}
}

class AlistItem extends React.Component{
	constructor(props)
  {
    super(props);
	}

	render(){
		return (
			<NavLink to={`/request/${this.props.id}`} className="waitings__item">
				<div className="item__name">{this.props.fullName}</div>
				<div className="item__date-wrapper">
					<div className="item__date">{this.props.date}</div>
					<div className="item__time">{this.props.time}</div>
				</div>
			</NavLink>
	);
	}

}

class Arrived extends React.Component{

	render(){
		return	<div className="arrived">
			<h2 onClick={e=>{
				e.target.classList.toggle('hidden')
			}}>На объекте</h2>
			<div className=" list">
			{this.props.items.map(item=>{
					return <AlistItem setWait={this.props.setWait} key={item.id} id={item.id} fullName={item.fullName} date={item.date} time={item.time}/>
				})}
			</div>
			</div>
	}
}
class DlistItem extends React.Component{
	constructor(props)
  {
    super(props);
	}

	render(){
		return (
			<NavLink to={`/request/${this.props.id}`} className="waitings__item">
				<div className="item__name">{this.props.fullName}</div>
				<div className="item__date-wrapper">
					<div className="item__date">{this.props.date}</div>
					<div className="item__time">{this.props.time}</div>
				</div>
			</NavLink>
	);
	}

}

class Declined extends React.Component{

	render(){
		return	<div className="declined">
			<h2 onClick={e=>{
				e.target.classList.toggle('hidden')
			}}>Не допущены</h2>
			<div className=" list">
			{this.props.items.map(item=>{
					return <DlistItem setAccept={this.props.setAccept} key={item.id} id={item.id} fullName={item.fullName} date={item.date} time={item.time}/>
				})}
			</div>
			</div>
	}
}