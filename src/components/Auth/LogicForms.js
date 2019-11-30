import { Component } from "react";

class LogicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: {
        login: ["Username", "Password"],
        register: ["Username", "Phone", "Password", "Confirm Password"]
      },
      isNewAccount: false,
      values: {
        username: "",
        phone: "",
        password: "",
        confirmpassword: "",
        showPassword: false,
        showConfirmPassword: false
      },
      error: {
        password: "",
        confirmpassword: ""
      },
      complete: {
        username: "",
        phone: "",
        password: "",
        confirmpassword: ""
      }
    };
  }

  isMatchPassword = () => {
    const { values } = this.state;
    if (values.password !== values.confirmpassword) {
      this.setState(prevState => ({
        error: { ...prevState.error, confirmpassword: "Password different" },
        complete: { ...prevState.complete, confirmpassword: "" }
      }));
    } else {
      this.setState(prevState => ({
        error: { ...prevState.error, confirmpassword: "" },
        complete: { ...prevState.complete, confirmpassword: "Password Matched" }
      }));
    }
  };
  //masih bingung dengan cara dinamic helpertext jika text <8
  test = prop => {};

  handleChange = prop => event => {
    const { values, error } = this.state;
    const value = event.target.value;

    // console.log("test", test)a;
    const tests = () => {
      if (values[prop].length === 0) {
        return this.setState(prevState => ({
          complete: {
            ...prevState.complete,
            [prop]: "Empty"
          }
        }));
      } else if (values[prop].length < 8) {
        return this.setState(prevState => ({
          complete: {
            ...prevState.complete,
            [prop]: "Less than 8 character"
          }
        }));
      } else {
        return this.setState(prevState => ({
          complete: {
            ...prevState.complete,
            [prop]: "Completed"
          }
        }));
      }
    };

    switch (prop) {
      case "confirmpassword":
        setTimeout(this.isMatchPassword, 100);

        this.setState(prevState => ({
          values: { ...prevState.values, [prop]: value }
        }));

        break;
      default:
        // setInterval(test, 100);
        this.setState(prevState => ({
          values: { ...prevState.values, [prop]: value }
        }));
        setTimeout(tests, 100);
    }
    console.log("state from logic", this.state);
  };

  handleClickShowPassword = prop => {
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [`show${prop.replace(/\s+/g, "")}`]: !values[
          `show${prop.replace(/\s+/g, "")}`
        ]
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted", this.state);
  };

  render() {
    return this.props.render(
      this.state,
      this.handleChange,
      this.handleClickShowPassword,
      this.handleSubmit
    );
  }
}

export default LogicForm;
