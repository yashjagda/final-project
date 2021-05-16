import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./main.css";
import axios from "axios";
//Link acts as <a> tag

///////////////// component to generate table values ///////////////////////
const Table = (props) => (
  <tr>
    <td>{props.exercise}</td>
    <td>
      <button type="button" className="btn button-sm btn-sm">
        <a
          href={
            "https://serverlessdrive-latest.s3.us-east-2.amazonaws.com/" +
            props.exercise
          }
        >
          View
        </a>
      </button>
      <button
        type="button"
        className="btn button-sm btn-sm download"
        data-id="{props.exercise}"
        onClick={() => {
          props.download(props.exercise);
        }}
      >
        {" "}
        Download
      </button>
      <button
        type="button"
        id="button-delete"
        className="btn button-sm btn-sm delete"
        data-id="{props.exercise}"
        onClick={() => {
          props.delete(props.exercise);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { response: [] };
  }

  componentDidMount() {
    const func = async () => {
      let response = await axios({
        method: "GET",
        url:
          "https://8xjm44qboa.execute-api.us-east-2.amazonaws.com/default/listObject",
      });

      this.setState({ response: response.data });
    };
    //// self call to trigger function//////
    func();
  }

  ////////////////////// retrieve file metadata //////////////////////////////////
  async createImage(file) {
    let image = "";
    let filetype = file.type.toString();
    const preview = document.querySelector("img");

    let reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        image = reader.result;
      },
      false
    );
    if (file) {
      let img = reader.readAsDataURL(file);
    }
    //axios request
    const response = await axios({
      method: "GET",
      url:
        "https://wmw6blss1e.execute-api.us-east-2.amazonaws.com/default/putObject?name=" +
        `${file.name}` +
        "&type=" +
        `${filetype}`,
    });

    //upload blob conversion
    let binary = atob(image.split(",")[1]);
    let array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    let blobData = new Blob([new Uint8Array(array)], { type: `${filetype}` });
    console.log("Uploading to: ", response.data.uploadURL);

    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      body: blobData,
    });

    //window.location = "/drive";
    console.log("Response: ", response.data);
    console.log("File Name: ", file.name);
    console.log("File Meta: ", image);
  }

  ////////////////// trigger file data retrieval when file is uploaded /////////////////////////////
  onChangeFile = (event) => {
    const file = event.target.files;
    this.createImage(file[0]);
  };

  ////////////////////// download function ///////////////////////////////
  download = async (id) => {
    const data = await axios({
      method: "GET",
      url:
        "https://vyeu8kbzjl.execute-api.us-east-2.amazonaws.com/default/getObject?name=" +
        `${id}`,
    });
    console.log(data);
    let blob = new Blob([data.data.Body], { type: data.data.ContentType });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = id;
    link.click();
  };

  ///////////////////////// Delete function //////////////////////////
  delete = async (id) => {
    const data = await axios({
      method: "GET",
      url:
        "https://7pei495lsi.execute-api.us-east-2.amazonaws.com/default/pydelete?name=" +
        `${id}`,
    });
    console.log(data);

    console.log("Successful", id);
    window.location = "/drive";
  };

  /////////////////////////// display table ////////////////////////////
  contentList() {
    const nums = this.state.response.map((data) => {
      return (
        <Table
          exercise={data}
          response={data}
          download={this.download}
          delete={this.delete}
          key={this.state.response.indexOf(data)}
        />
      );
    });
    return nums;
  }

  render() {
    return (
      <div className="wrapper">
        {/* <div id="loader"></div> */}
        <div className="main grid-container">
          <div className="grid1">
            <div className="container">
              <label
                className="button uploader"
                onChange={this.onChangeFile}
                for="file-selector"
              >
                <input
                  type="file"
                  size="60"
                  id="file-selector"
                  className="btn button btn-small"
                ></input>
                <i className="fa fa-cloud-upload"></i> Upload
              </label>

              <img src="" height="200" />
            </div>
            <div id="api-data"></div>
          </div>
          <div className="grid2">
            <div className="container">
              <header className="jumbotron">
                <h1>Welcome to your Dashboard</h1>
              </header>

              <div className="container">
                <div className="row">
                  <table className="table table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">NAME</th>

                        <th scope="col">OPTIONS</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.contentList()}</tbody>
                  </table>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
