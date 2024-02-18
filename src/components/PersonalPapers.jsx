import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PersonalPapers() {
  const PersonalPapers = [
    {
      id: "03",
      document: "personal Id",
      uploadDate: "12-12-2024",
      lastModified: "12-12-2024",
      action: "view",
      inventoryStatus: "Valid",
    },
    {
      id: "03",
      document: "tax card",
      uploadDate: "12-12-2024",
      lastModified: "12-12-2024",
      action: "view",
      inventoryStatus: "Not Valid",
    },
    {
      id: "03",
      document: "commerical register",
      uploadDate: "12-12-2024",
      lastModified: "12-12-2024",
      action: "view",
      inventoryStatus: "Not Valid",
    },
    {
      id: "03",
      document: "establishment contract",
      uploadDate: "12-12-2024",
      lastModified: "12-12-2024",
      action: "view",
      inventoryStatus: "Valid",
    },
  ];

  const [products, setProducts] = useState(PersonalPapers);
  const [filteredProducts, setFilteredProducts] = useState(PersonalPapers);
  const [filterValue, setFilterValue] = useState("");

  const getSeverity = (value) => {
    switch (value) {
      case "Valid":
        return "success";

      case "Not Valid":
        return "danger";
      default:
        return null;
    }
  };

  const filterDocuments = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);

    const filtered = PersonalPapers.filter((product) => {
      return product.document.toLowerCase().includes(value);
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
  const statusEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData.inventoryStatus)}
      ></Tag>
    );
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
            Personal papers
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
        sortField="lastModified"
        sortOrder={-1}
        paginator
        rows={5} 
      >
        <Column
          field="id"
          header="#"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" , padding:'0 20px' }}
        ></Column>
        <Column
          field="document"
          header="document"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="inventoryStatus"
          header="Status"
          body={statusBodyTemplate}
          editor={(options) => statusEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="uploadDate"
          header="upload date"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="lastModified"
          header="last modified"
          sortable
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="action"
          header="Actions"
          editor={(options) => textEditor(options)}
          style={{ width: "20%", height: "80px" }}
        ></Column>
        <Column
          rowEditor
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </DataTable>
    </div>
  );
}
