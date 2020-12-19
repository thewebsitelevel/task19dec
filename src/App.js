import React from 'react';
import './App.css';
import { Customers } from './Customers'
import { Header } from './Header'
import { ExportReactCSV } from './ExportReactCSV'
import Form from './Form/Form';
import Auxi from './Hoc/Auxi';

let custs = []

class App extends React.Component {

  customers = () => {
    // for (let i = 0; i <= 25; i++) {
    //   custs.push({firstName: `first${i}`, lastName: `last${i}`,
    //   email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    // }
    return custs;
  }
  

  state = {
    page:"form",
    customers: this.customers(),
    fileName: 'Customers',
    address1:"",
    city:"",
    country:"",
    schoolcity:"",
    schoolstate:"",

    formData: {
      name:"",
      address:"",
      zipcode:"",
      email:"",
      mobile:"",
      school:"",
      schooladdress:"",
      degree:"",
      specilization:"",
      graduationdate:"",
      companyname:"",
      jobstartdate:"",
      jobenddate:"",
      skills:"",
      projects:""
    }
  }
  
  nameChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.name = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.name)
  }

  address1ChangeHadler = (e) => {
    let newdata = this.state.address1;
    newdata = e.target.value;
    this.setState({address1:newdata});
    console.log(this.state.address1);
    var address= this.state.address1+this.state.city+this.state.country;
    var old= this.state.formData;
    old.address=address
    this.setState({formData:old})
    console.log(this.state.formData.address)
  }

  cityChangeHadler = (e) => {
    let newdata = this.state.city;
    newdata = e.target.value;
    this.setState({city:newdata});
    console.log(this.state.city)
    var address= this.state.address1+this.state.city+this.state.country;
    var old= this.state.formData;
    old.address=address
    this.setState({formData:old})
    console.log(this.state.formData.address)
  }

  countryChangeHadler = (e) => {
    let newdata = this.state.country;
    newdata = e.target.value;
    this.setState({country:newdata});
    var address= this.state.address1+this.state.city+this.state.country;
    var old= this.state.formData;
    old.address=address;
    this.setState({formData:old})
    console.log(this.state.formData.address)
  }
  
  zipChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.zipcode = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.zipcode)
  }

  emailChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.email = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.email)
  }

  mobileChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.mobile = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.mobile)
  }

  schoolChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.school = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.school)
  }

  schoolCityChangeHadler = (e) => {
    let newdata = this.state.schoolcity;
    newdata = e.target.value;
    this.setState({schoolcity:newdata});
    var address= this.state.schoolcity+this.state.schoolstate;
    var old= this.state.formData;
    old.schooladdress=address
    this.setState({formData:old})
    console.log(this.state.formData.schooladdress)
  }

  schoolStateChangeHadler = (e) => {
    let newdata = this.state.schoolstate;
    newdata = e.target.value;
    this.setState({schoolstate:newdata});
    let address  = this.state.schoolcity+this.state.schoolstate;
    let old = this.state.formData;
    old.schooladdress = address;
    this.setState({formData:old})
    console.log(this.state.formData.schooladdress)
  }

  degreeChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.degree = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.degree)
  }


  specilizationChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.specilization = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.specilization)
  }

  dateChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.graduationdate = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.graduationdate)
  }

  companynameChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.companyname = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.companyname)
  }

  startdateChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.jobstartdate = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.jobstartdate)
  }

  enddateChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.jobenddate = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.jobenddate)
  }

  skillChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.skills = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.skills)
  }

  projectChangeHadler = (e) => {
    let newdata = this.state.formData;
    newdata.projects = e.target.value;
    this.setState({formData:newdata});
    console.log(this.state.formData.projects)
  }

  buildChangeHandler = (e) => {
    let data = this.state.formData;
    custs.push(data);
    this.setState({page:"excel"})
  }

  pageChangeHandler = () => {
    let c = "form"
    this.setState({page:c})
  }

  component = () => {
    if(this.state.page ==="form"){
      return (
        <Form 
          nameChanged = {this.nameChangeHadler}
          address1Changed = {this.address1ChangeHadler}
          cityChanged = {this.cityChangeHadler}
          countryChanged = {this.countryChangeHadler}
          zipChanged = {this.zipChangeHadler}
          emailChanged = {this.emailChangeHadler}
          mobileChanged = {this.mobileChangeHadler}
          schoolChanged = {this.schoolChangeHadler}
          schoolCityChanged = {this.schoolCityChangeHadler}
          schoolStateChanged = {this.schoolStateChangeHadler}
          degreeChanged = {this.degreeChangeHadler}
          specilizationChanged = {this.specilizationChangeHadler}
          dateChanged = {this.dateChangeHadler}
          companynameChanged = {this.companynameChangeHadler}
          startDateChanged = {this.startdateChangeHadler}
          endDateChanged = {this.enddateChangeHadler}
          skillChanged = {this.skillChangeHadler}
          projectChanged = {this.projectChangeHadler}
          buildChanged ={this.buildChangeHandler}
        />
        )
    }else if(this.state.page==="excel"){
      return(
        <Auxi>
          <button style={{position:"absolute", top:"50px", left:"-50%", fontSize:"22px"}} onClick ={this.pageChangeHandler}  type="button" >Back to Form</button>
          <Header />
          <div className="row">
              <div className="col-md-8">
                  <h2>Candidates</h2>
              </div>
              <div className="col-md-4 center">
                  <ExportReactCSV csvData={this.state.customers} fileName={this.state.fileName} />
              </div>
          </div>
          <Customers customers={this.customers()}/>
        </Auxi>
      )
    }
  }
  render() {

    return (
      <div className="App">
        {this.component()}
      </div>
    );
  }
}

export default App;
