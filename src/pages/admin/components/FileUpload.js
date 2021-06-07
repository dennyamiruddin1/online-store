import React, { useState } from 'react';
import * as XLSX from 'xlsx'
import uuid from 'react-uuid'

import { useDispatch } from 'react-redux'
import { productsActions } from '../../../store/product-slice'

import { Form, Col, Row, Button } from 'react-bootstrap'

const FileUpload = (props) => {

  const dispatch = useDispatch();
  const [fileInput, setFileInput] = useState("")

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data)
      }

      fileReader.onerror = ((error) => {
        reject(error)
      })
    })

    promise.then((d) => {
      const newData = d.map(item => ({
        id: "pid" + uuid(), ...item
      }));
      dispatch(productsActions.viewExcelProducts(newData))
    })
  }

  const uploadOnChangeHandler = (event) => {
    const file = event.target.files[0]
    setFileInput(event.target.value)
    readExcel(file)
  }

  const uploadFileHandler = () => {
    dispatch(productsActions.uploadExcelProducts());
    setFileInput("");
  }

  return (
    <Row>
      <Col>
        <Form.File id="input" label="Upload xlsx file" accept=".xls, .xlsx" onChange={uploadOnChangeHandler} onReset={uploadFileHandler} value={fileInput} />
      </Col>
      <Col>
        <Button variant="dark" onClick={uploadFileHandler}>Upload</Button>
      </Col>
    </Row>
  );
}

export default FileUpload;