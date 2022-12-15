import React from 'react'
import Form from '../imports/Form'
import Table from '../imports/Table'


export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-5 mx-auto">
                <Form/>
            </div>
            <div className="col-5 mx-auto">
                <Table/>
            </div>
        </div>
      </div>
    </div>
  )
}
