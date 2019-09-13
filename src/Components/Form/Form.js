import React, { Component } from 'react';

import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // variable to hold the data at index 0 of the array
            legend: 0,

            // variable for actual index of the array
            index: '',

            // array to hold all the details such as name, email, gender, message
            formData: []
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    // functionality that submit the form and displays the details to the user
    submitData = (e) => {
        e.preventDefault();

        let formData = this.state.formData;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let gender = this.refs.gender.value;
        let message = this.refs.message.value;

        // particularly for index 0 
        if (this.state.legend === 0) {
            let data = {
                name,
                email,
                gender,
                message
            }

            // add the data from the form to the formData array
            formData.push(data);
        } else {
            let index = this.state.index;
            formData[index].name = name;
            formData[index].email = email;
            formData[index].gender = gender;
            formData[index].message = message;
        }

        // updating the state based on the data entered by the user
        this.setState({
            formData: formData
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }


    // functionality to remove the data from the listing
    removeData = (i) => {
        let formData = this.state.formData;
        formData.splice(i, 1);

        // updating the state after removing the data listing from the formData array
        this.setState({
            formData: formData
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }


    // functionality for edititing the data, once added in the lisitng
    editData = (i) => {
        let data = this.state.formData[i];
        this.refs.name.value = data.name;
        this.refs.email.value = data.email;
        this.refs.gender.value = data.gender;
        this.refs.message.value = data.message;

        // checking for the state index and updating the data for the same lisitng as added
        this.setState({
            legend: 1,
            index: i
        })

        this.refs.name.focus();
    }

    render() {
        let formData = this.state.formData;
        return (
            <div>
                <div className="container">
                    <form className="border p-4 mt-sm-5" ref="myForm">
                        <div className="row pr-sm-3">
                            <div className="col-12 col-sm-12 form-group">
                                <div className="row">
                                    <label htmlFor="userName" className="col-12 col-sm-4 text-uppercase font-weight-bold pl-1 pl-sm-3">name</label>
                                    <input type="text" className="col-12 col-sm-8 form-control" placeholder="Enter name" ref="name" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 form-group">
                                <div className="row">
                                    <label htmlFor="userEmail" className="col-12 col-sm-4 text-uppercase font-weight-bold pl-1 pl-sm-3">email</label>
                                    <input type="email" className="col-12 col-sm-8 form-control" placeholder="Enter email" ref="email" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 form-group">
                                <div className="row">
                                    <label htmlFor="userGender" className="col-12 col-sm-4 text-uppercase font-weight-bold pl-1 pl-sm-3">gender</label>
                                    <select className="col-12 col-sm-8 custom-select" ref="gender">
                                        <option>...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 form-group">
                                <div className="row">
                                    <label htmlFor="userMessage" className="col-12 col-sm-4 text-uppercase font-weight-bold pl-1 pl-sm-3">message</label>
                                    <textarea type="text" row="4" className="col-12 col-sm-8 form-control" placeholder="Enter message" ref="message" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 pl-0 pl-sm-3 pr-0">
                                <button type="submit" className="btn btn-primary mt-3 w-100 text-uppercase font-weight-bold" onClick={(e) => this.submitData(e)}>submit</button>
                            </div>
                        </div>
                    </form>

                    <ul className="list-group list-group-flush mt-3">
                        <pre>
                            {formData.map((data, i) =>
                                <li key={i} className="list-group-item mb-2">
                                    {i + 1}. {data.name}, {data.email}, {data.gender}, {data.message}
                                    <div className="float-right">
                                        <button onClick={() => this.editData(i)} className="btn btn-info text-uppercase font-weight-bold mr-3">edit</button>
                                        <button onClick={() => this.removeData(i)} className="btn btn-danger text-uppercase font-weight-bold">remove</button>
                                    </div>
                                </li>
                            )}
                        </pre>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Form;
