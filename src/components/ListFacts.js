import React, {Component} from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';


class ListFacts extends Component {

    render(){
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.facts.map(item => (
              <div className="pet-item col media py-3" key={item.aptId}>
              <div className="mr-3">
                <button className="pet-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteFacts(item)}>
                    <FaTimes />
                </button>
              </div>
  
              <div className="pet-info media-body">
                <div className="pet-head d-flex">
                  <span className="pet-name">{item.text}</span>
                  <span className="apt-date ml-auto">
                 
                  <Moment
                    date = {item.createdAt}
                    format = "MMM-D h:mma"
                  /></span>
                </div>
  
               
              </div>
            </div>))}
  
        </div>
        );
    }
}

export default ListFacts;