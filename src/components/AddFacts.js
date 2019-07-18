import React, {Component} from 'react';
import {FaPlus} from 'react-icons/fa';


class AddFacts extends Component {

    constructor() {
        super();
        this.state = {
          text:'',
            aptDate:'',
            aptTime: '',
           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        
    }

    handleAdd(e){
      e.preventDefault();
      let tempApt = {
        text: this.state.text,
        aptDate: this.state.aptDate + ' ' + this.state.aptTime,
        
      };

      this.props.addFacts(tempApt);
      this.setState({
        text:'',
        aptDate:'',
        aptTime: '',
        
      });

      this.props.toggleForm();

    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div className={
                'card textcenter mt-3 ' + 
                (this.props.formDisplay ? '' : 'add-appointment')
            }>
            <div className="apt-addheading card-header bg-primary text-white"
            onClick = {this.props.toggleForm}>
              <FaPlus /> Add Fact
            </div>
  
            <div className="card-body">
              <form id="aptForm" noValidate
              onSubmit = {this.handleAdd}>
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="text"
                    readOnly
                  >
                    Fact
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="text"
                      placeholder="Enter Fact here"
                      value = {this.state.text}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptDate"
                  >
                    Date
                  </label>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      name="aptDate"
                      id="aptDate"
                      value = {this.state.aptDate}
                      onChange = {this.handleChange}
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptTime"
                  >
                    Time
                  </label>
                  <div className="col-md-4">
                    <input
                      type="time"
                      className="form-control"
                      name="aptTime"
                      id="aptTime"
                      value = {this.state.aptTime}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Add Fact
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default AddFacts;