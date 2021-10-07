import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Request extends React.Component
{
	constructor(props)
  {
    super(props);

    this.state = {
			//isEdit:this.props.isEdit,
			request:this.props.requests.filter(req => req.id == this.props.match.params.id )[0],
    };
  }

  render()
  {	
		const {
      request,
    } = this.state;
		//const id = this.props.match.params.id;
		//const request = this.props.requests.filter(req => req.id == id )[0];
		return <div className='request'>
			<div className='general-info'>
				<p className="general-info__row"><span>Имя: </span>{this.props.isEdit?
				<input onChange={(e)=>{
					request.fullName = e.currentTarget.value;
					this.forceUpdate();
				}} value={request.fullName}/>:request.fullName}</p>
				<p className="general-info__row"><span>Должность: </span>{this.props.isEdit?
				<input onChange={(e)=>{
					request.position = e.currentTarget.value;
					this.forceUpdate();
				}} value={request.position}/>:request.position}</p>
				<p className="general-info__row"><span>Пасспорт: </span>{this.props.isEdit?
				<input onChange={(e)=>{
					request.passport = e.currentTarget.value;
					this.forceUpdate();
				}} value={request.passport}/>:request.passport}</p>
				<p className="general-info__row"><span>Гос. номер Авто: </span>{this.props.isEdit?
				<input onChange={(e)=>{
					request.auto = e.currentTarget.value;
					this.forceUpdate();
				}} value={request.auto}/>:request.auto}</p>
				<p className="general-info__row"><span>Статус: </span>
				{request.status==1?<>
				Ожидает
				</>:request.status==2?<>
				На объекте
				</>:<>
				Не допущен
				</>}</p>
			</div>
			<div className="request__buttons">
				<div className="request__buttons-row">
					{this.props.isEdit?<>				
						<a href="#" onClick={(e)=>{
							e.preventDefault();
							this.props.switchEdit();
							this.props.setRequest(request);
						}}>Сохранить</a>
						<a className='cancel' href="#" onClick={(e)=>{ e.preventDefault();this.props.switchEdit();} }>Отмена</a></>:

						<a href="#" onClick={(e)=>{ e.preventDefault();this.props.switchEdit();} }>Редактировать</a>}
				</div>
				<div className="request__buttons-row">
				{request.status==1?<>
				<a href="#" onClick={(e)=>{ e.preventDefault();this.props.setAccept(request.id);this.forceUpdate();}}>Принять</a>
				<a className='cancel' href="#" onClick={(e)=>{ e.preventDefault();this.props.setDecline(request.id);this.forceUpdate();}}>Отказать</a>
				</>:request.status==2?<>
				<a href="#" onClick={(e)=>{ e.preventDefault();this.props.setWait(request.id);this.forceUpdate();}}>Выпустить</a>
				</>:<>
				<a href="#" onClick={(e)=>{ e.preventDefault();this.props.setAccept(request.id);this.forceUpdate();}}>Принять</a>
				</>}
				</div>
			</div>
			{this.props.isEdit?'':<NavLink to={'/'} className='to-main'>На главную</NavLink>}
			
		</div>
	}
}