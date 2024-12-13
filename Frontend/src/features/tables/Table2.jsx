import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "./Table2.css";
import TableData from "./TableData";
import TabButton from "./TabButton";

const Table2 = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const dataTable = $(tableRef.current).DataTable({
      language: {
        lengthMenu: "_MENU_ entries per page",
        search: "",
        paginate: {
          previous: "Prev",
          next: "Next",
        },
        info: "_START_ to _END_ of _TOTAL_ entries",
      },
      pageLength: 10,
      lengthMenu: [
        [5, 10, 25, 50, -1],
        ["5", "10", "25", "50", "All"],
      ],
      dom: '<"top"<"custom-length"l><"custom-search"f>>rt<"bottom"ip>',
      initComplete: function () {
        $(".custom-search").html(`
          <div class="search-container">
            <input type="search" class="form-control search-input" placeholder="Search...">
            <span class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </span>
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary-sm ">Print</button>

</div>
          

        `);

        $(".search-input").on("keyup", function () {
          dataTable.search(this.value).draw();
        });
      },
    });

    return () => {
      dataTable.destroy();
    };
  }, []);

  return (
    <div className="card table2-card">
      <div className="card-header p-0">
        <b>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="40"
            fill="currentColor"
            className="bi bi-list me-1 mb-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>{" "}
          Table Tools(No-Padding & Table-TableTools)
        </b>
      </div>
      <div className="card-body p-0 ">
        <table ref={tableRef} id="example" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((row, index) => (
              <tr key={index}>
                <th scope="row">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`flexCheckDefault${index}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`flexCheckDefault${index}`}
                  ></label>
                </th>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.userName}</td>
                <td>{<TabButton status={row.status} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
