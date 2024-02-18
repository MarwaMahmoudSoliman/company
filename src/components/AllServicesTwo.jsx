import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AllServicesTwo() {
  const allServicesTwo = [
    {
      id: "01",
      service: "lourem ipsume",
      user: "takes",
      date: "12-12-2020",
      action: "Add milestone",
      serialCode: "#123-456ABC",
    },
    {
      id: "02",
      service: "lourem ipsume",
      user: "takes",
      date: "12-12-2015",
      action: "Add milestone",
      serialCode: "#123-456ABC",
    },
    {
      id: "03",
      service: "lourem ipsume",
      user: "takes",
      date: "12-12-2001",
      action: "Add milestone",
      serialCode: "#123-456ABC",
    },
    {
      id: "04",
      service: "lourem ipsume",
      user: "takes",
      date: "12-12-2005",
      action: "Add milestone",
      serialCode: "#123-456ABC",
    },
  ];

  const [products, setProducts] = useState(allServicesTwo);
  const [filteredProducts, setFilteredProducts] = useState(allServicesTwo);
  const [filterValue, setFilterValue] = useState("");

  const filterDocuments = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);

    const filtered = allServicesTwo.filter((product) => {
      return product.service.toLowerCase().includes(value);
    });

    setFilteredProducts(filtered);
  };
  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteService = (rowData) => {
    if (rowData.action === "Add milestone") {
      const updatedProducts = products.filter(
        (product) => product.id !== rowData.id
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  };

  const actionTemplate = (rowData) => {
    let button = null;
    if (rowData.action === "Add milestone") {
      button = (
        <button
          className="border-0 bg-transparent"
          style={{ color: "#EC0B0B" }}
          onClick={() => deleteService(rowData)}
        >
          Delete
        </button>
      );
    }
    return button;
  };

  return (
    <div
      className="col-12 m-auto p-fluid py-4 px-5 mb-4"
      style={{ borderRadius: "15px", backgroundColor: "#fff" }}
    >
      <div className="d-flex justify-content-between">
        <div className="col-7">
          <h2
            className="ms-2 mt-2"
            style={{ color: "#4A5568", fontSize: "25px" }}
          >
            All services
          </h2>
        </div>
        <div className="position-relative mb-3 col-4 me-3">
          <FontAwesomeIcon
            className="fs-5 position-absolute"
            icon={faSearch}
            style={{ top: "12px", left: "13px", color: "#9098b1" }}
          />
          <InputText
            className="py-2 px-5 "
            placeholder="Search list..."
            value={filterValue}
            onChange={filterDocuments}
          />
        </div>
      </div>
      <DataTable
        value={filteredProducts}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "50rem" }}
        style={{ fontSize: "18px" }}
        resizableColumns
        sortField="date"
        sortOrder={-1}
        paginator
        rows={5} 
      >
        <Column
          field="id"
          header="#"
          editor={(options) => textEditor(options)}
          style={{ width: "20%", height: "80px" , padding:'0 20px'}}
        ></Column>
        <Column
          field="service"
          header="service"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>

        <Column
          field="serialCode"
          header="Seril-code"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>

        <Column
          field="user"
          header="user"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="date"
          header="date"
          sortable
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="action"
          header="Actions"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="action"
          body={actionTemplate}
          style={{ width: "20%" }}
          className="ps-5"
        ></Column>
      </DataTable>
    </div>
  );
}
