import React from 'react'
import Form from '../imports/Form'
import Table from '../imports/Table'


export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-5 col-12 mx-auto">
                <Form/>
            </div>
            <div className="col-md-5 col-12 mx-auto">
                <Table/>
            </div>
        </div>
      </div>
    </div>
  )
}
