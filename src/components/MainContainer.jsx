import React from "react";
import Lists from "./Lists";
import Request from "./Request";
import {BrowserRouter, Route} from 'react-router-dom';
import'../style.scss'

export default class MainContainer extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
			requests:[
				{
					id:1,
					date:"06.10.2021",
					time:"12:01",
					status:1,
					fullName:"Иванов Иван Иванович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:2,
					date:"06.10.2021",
					time:"12:01",
					status:1,
					fullName:"Иванов Иван Иванович",
					position:"Менеджер",
					passport:"2222 222222",
					auto:"Е350ТВ70",
				},
				{
					id:3,
					date:"06.10.2021",
					time:"12:01",
					status:1,
					fullName:"Иванов Иван Иванович",
					position:"Менеджер",
					passport:"3333 333333",
					auto:"Е350ТВ70",
				},
				{
					id:4,
					date:"06.10.2021",
					time:"12:01",
					status:1,
					fullName:"Иванов Иван Иванович",
					position:"Менеджер",
					passport:"4444 444444",
					auto:"Е350ТВ70",
				},
				{
					id:5,
					date:"06.10.2021",
					time:"12:01",
					status:2,
					fullName:"Петров Петр Петрович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:6,
					date:"06.10.2021",
					time:"12:01",
					status:3,
					fullName:"Сидоров Максим Леонидович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:7,
					date:"06.10.2021",
					time:"12:01",
					status:3,
					fullName:"Сидоров Максим Леонидович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:8,
					date:"06.10.2021",
					time:"12:01",
					status:3,
					fullName:"Сидоров Максим Леонидович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:9,
					date:"06.10.2021",
					time:"12:01",
					status:3,
					fullName:"Сидоров Максим Леонидович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
				{
					id:10,
					date:"06.10.2021",
					time:"12:01",
					status:3,
					fullName:"Сидоров Максим Леонидович",
					position:"Менеджер",
					passport:"1111 111111",
					auto:"Е350ТВ70",
				},
			],
			isEdit: false,
    };
  }

	setDecline(id){
			this.state.requests= 
				this.state.requests.map(req=>{
					if (req.id == id){
						req.status = 3;
						return req;
					} else return req;
				})
	};
	setAccept(id){
		this.state.requests= 
			this.state.requests.map(req=>{
				if (req.id == id){
					req.status = 2;
					return req;
				} else return req;
			})
	};
	setWait(id){
		this.state.requests= 
			this.state.requests.map(req=>{
				if (req.id == id){
					req.status = 1;
					return req;
				} else return req;
			})
	};
	switchEdit(){
		this.state.isEdit = !this.state.isEdit;
		this.forceUpdate();
	};
	setRequest(editedRequest){
		this.state.requests=[
			...this.state.requests,
			//editedRequest,
		]
	};

  render()
  {
    const {
      requests,
			isEdit,
    } = this.state;

    return (
				<div className="empty-container">
					<BrowserRouter>
						<Route exact={true} path="/" render={() => <Lists requests={requests}/>}/>
						<Route path="/request/:id" render={(props) => <Request 
						{...props} 
						setRequest={this.setRequest.bind(this)} 
						switchEdit={this.switchEdit.bind(this)} 
						setWait={this.setWait.bind(this)} 
						setAccept={this.setAccept.bind(this)} 
						setDecline={this.setDecline.bind(this)} 
						requests={requests} 
						isEdit={isEdit}/>}/>
					</BrowserRouter>
				</div>
    )
  };
}