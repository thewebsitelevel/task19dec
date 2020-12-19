import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {
    console.log(customers[0])
    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.zipcode}</td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.school}</td>
                  <td>{customer.schooladdress}</td>
                  <td>{customer.degree}</td>
                  <td>{customer.specilization}</td>
                  <td>{customer.graduationdate}</td>
                  <td>{customer.companyname}</td>
                  <td>{customer.jobstartdate}</td>
                  <td>{customer.jobenddate}</td>
                  <td>{customer.skills}</td>
                  <td>{customer.projects}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className='bgvi'  >
                            <tr >
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>ZIP code</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>School</th>
                                <th>School Address</th>
                                <th>Degree</th>
                                <th>Specilization</th>
                                <th>Graduation Date</th>
                                <th>Company Name</th>
                                <th>Job Start Date</th>
                                <th>Job End Date</th>
                                <th>Skills</th>
                                <th>Projects</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover >
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
}