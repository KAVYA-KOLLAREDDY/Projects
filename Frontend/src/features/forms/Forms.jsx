
export default function Forms() {
  return (
    <div className="pe-2 my-3">
      <div className="card border-2 rounded-0 mt-5">
        <div className="card-header d-flex border-bottom-2 gap-3">
          <b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </b>
          <h5>Styled Form Components</h5>
        </div>

        <div className="card-body border-2 rounded-0">
          <div className="row border-bottom">
            <div className="col-12 col-md-2 mt-3">
              <h6 className="text-lg-end fs-6 text-black">
                Stack Radio <br />
                Radio Buttons:
              </h6>
            </div>
            <div className="col-12 col-md-10 mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault1"
                >
                  Option 1
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault2"
                >
                  Option 2
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault3"
                >
                  Option 3
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="fs-6 text-lg-end">Inline Radio Buttons</h6>
            </div>
            <div className="col-12 col-md-10">
              <div className="d-flex gap-4 flex-wrap">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    Option 1
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault5"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault5"
                  >
                    Option 2
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault6"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault6"
                  >
                    Option 3
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end fs-6">Stacked Checkboxes</h6>
            </div>
            <div className="col-12 col-md-9">
              <div className="d-flex flex-column gap-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Checkbox 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Checkbox 2
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end fs-6">Inline Checkboxes</h6>
            </div>
            <div className="col-12 col-md-9 mb-4">
              <div className="d-flex gap-5 flex-wrap">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault4"
                  >
                    Checkbox 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked3"
                  >
                    Checkbox 2
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end">File Upload</h6>
            </div>
            <div className="col-12 col-md-3">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control rounded-0"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Browse"
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end">Default Spinner</h6>
            </div>
            <div className="col-12 col-md-3">
              <input type="number" className="form-control" defaultValue={10} />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end">Overflow</h6>
            </div>
            <div className="col-12 col-md-3">
              <input className="form-control" type="number" />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 col-lg-2">
              <h6 className="text-lg-end">Decimal</h6>
            </div>
            <div className="col-12 col-lg-6">
              <input
                type="number"
                className="form-control"
                style={{ width: "100%" }}
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div className="col-12 col-lg-4">
              <select className="form-select" aria-label="Language select">
                <option selected>English</option>
                <option value="1">Telugu</option>
                <option value="2">Hindi</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-2 rounded-0 mt-3">
        <div className="card-header d-flex border-bottom-2 gap-3">
          <b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </b>
          <h5>Unstyled Form Components</h5>
        </div>
        <div className="card-body border-2 rounded-0">
          <div className="row border-bottom">
            <div className="col-12 col-md-2 mt-3">
              <h6 className="text-lg-end fs-6 text-black">
                Stackradio <br /> Radio Buttons:
              </h6>
            </div>
            <div className="col-12 col-md-10 mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault1"
                >
                  Option1
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault2"
                >
                  Option2
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  checked
                />
                <label
                  className="form-check-label text-black"
                  htmlFor="flexRadioDefault3"
                >
                  Option3
                </label>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="fs-6 text-lg-end">Inline Radio Buttons</h6>
            </div>
            <div className="col-12 col-md-10">
              <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    option1
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault5"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault5"
                  >
                    Option2
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefault6"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault6"
                  >
                    Option3
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end fs-6">Stacked CheckBox</h6>
            </div>
            <div className="col-12 col-md-9">
              <div className="d-flex flex-column gap-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    checkbox1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    checkbox2
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end fs-6">Inline CheckBox</h6>
            </div>
            <div className="col-12 col-md-9 mb-4">
              <div className="d-flex gap-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault4"
                  >
                    checkbox1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked3"
                  >
                    checkbox2
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 border-bottom">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end">Select</h6>
            </div>
            <div className="col-12 col-md-10">
              <div className="d-flex flex-column gap-3">
                <select
                  className="form-select"
                  aria-label="Select example"
                  style={{ width: "100%" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select
                  className="form-select"
                  aria-label="Select example"
                  style={{ width: "100%" }}
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-2">
            <h6 className="text-lg-end">Multiple select</h6>
          </div>
          <div className="col-12 col-md-10">
            <select
              className="form-select"
              multiple
              aria-label="Multiple select example"
              style={{ width: "100%" }}
            >
              <option selected>Amaran</option>
              <option value="1">Dev ara</option>
              <option value="2">RRR</option>
              <option value="3">Pushapa</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card border-2 rounded-0 mt-5">
        <div className="card-header">
          <div className="d-flex gap-3">
            <div>
              <b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </b>
            </div>
            <div>
              <h5>Masked Input</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* Date Input */}
          <div className="row mt-3">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end">Date:</h6>
            </div>
            <div className="col-12 col-md-10">
              <input type="date" className="form-control rounded-0" />
              <label className="text-muted">999/8888/9999</label>
            </div>
          </div>

          {/* Phone Input */}
          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end mt-4">Phone</h6>
            </div>
            <div className="col-12 col-md-10 mt-4">
              <input type="number" className="form-control rounded-0" />
              <label className="text-muted">(999)-9999-9999</label>
            </div>
          </div>

          {/* Phone + Extension Input */}
          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end mt-4">Phone+Ext</h6>
            </div>
            <div className="col-12 col-md-10 mt-4">
              <input type="number" className="form-control rounded-0" />
              <label className="text-muted">(999)-9999-9999</label>
            </div>
          </div>

          {/* International Phone Input */}
          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end mt-4">Int'l Phone :</h6>
            </div>
            <div className="col-12 col-md-10 mt-4">
              <input type="number" className="form-control rounded-0" />
              <label className="text-muted">(999)-9999-9999</label>
            </div>
          </div>

          {/* Tax ID Input */}
          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end mt-4">Tax Id :</h6>
            </div>
            <div className="col-12 col-md-10 mt-4">
              <input type="number" className="form-control rounded-0" />
              <label className="text-muted">(999)-9999-9999</label>
            </div>
          </div>

          {/* SSN Input */}
          <div className="row mt-4">
            <div className="col-12 col-md-2">
              <h6 className="text-lg-end mt-4">SSN :</h6>
            </div>
            <div className="col-12 col-md-10 mt-4">
              <input type="number" className="form-control rounded-0" />
              <label className="text-muted">(999)-9999-9999</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
