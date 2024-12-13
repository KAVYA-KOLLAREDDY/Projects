import { FaBars } from "react-icons/fa";
import BarChart from "./BarChart";

export default function ProfileOverview() {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <div className="card">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFkgjrGCsgWfk9Ap8H2eZtxTXJYWsbeqPGTNrnh1QFlkHA74wprToHvSA8jeyJi7xBL_Yz3iGDEgfINqXK74RDGQ"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body p-0 mt-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Projects</li>
              <li className="list-group-item">Messages</li>
              <li className="list-group-item d-flex align-items-center justify-content-between">
                <div>
                    Friends
                </div>
                <span className="badge text-bg-secondary">6</span>
              </li>
              <li className="list-group-item">Settings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <div className="col">
            <div className="alert alert-primary" role="alert">
              You'll receive all updates for free!
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="fw-semibold fs-2">John Doe</div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="row">
              <div className="col-6 text-end fw-semibold">
                Description Lists
              </div>
              <div className="col-6">
                A Description list is perfect for defining terms
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-end fw-semibold">EuisMod</div>
              <div className="col-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                labore amet distinctio blanditiis, in iste velit odio,
                perspiciatis atque temporibus quae nam eligendi maiores. Sed
                ratione distinctio quam? Sit, perspiciatis?
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-end fw-semibold">Malesuda Porta</div>
              <div className="col-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto commodi ipsa maxime quas unde officiis et modi,
                labore assumenda, aperiam minima dolor iusto porro dolorum sint
                tempora eum iste cumque.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quae
            quod veritatis accusantium officia cupiditate provident? Eaque
            animi, earum eius modi, sunt commodi voluptate corporis laborum nisi
            odio, consequuntur vero.
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="d-flex align-items-center gap-2">
          <div>
            <FaBars />
          </div>
          <div>Sales</div>
        </div>
        <hr />
        <BarChart />
      </div>
    </div>
  );
}
