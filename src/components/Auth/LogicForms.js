import { Component } from "react";
import Axios from "axios";

class LogicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: {
        login: ["Username", "Password"],
        register: ["Username", "Email", "Password", "Confirm Password"]
      },
      values: {
        login: {
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          showPassword: false,
          showConfirmPassword: false,
          disabled: true
        },
        register: {
          username: "",
          email: "",
          showPassword: false,
          showConfirmPassword: false,
          disabled: true
        }
      },
      error: {
        password: "",
        confirmpassword: ""
      },
      complete: {
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
      },
      api: "https://peaceful-savannah-85788.herokuapp.com"
    };
  }

  isMatchPassword = () => {
    //untuk mengecek apakah password dan confirm password sama

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

  handleChange = prop => event => {
    const { value, name } = event.target;

    const tests = () => {
      //untuk mengecek apakah input memiliki 8 character

      return this.setState(prevState => {
        if (prevState.values[prop].length === 0) {
          return {
            complete: {
              ...prevState.complete,
              [prop]: "Can't be empty"
            }
          };
        } else if (prevState.values[prop].length < 8) {
          return {
            complete: {
              ...prevState.complete,
              [prop]: "Less than 8 character"
            }
          };
        } else if (prevState.values[prop].length >= 8) {
          return {
            complete: {
              ...prevState.complete,
              [prop]: ""
            }
          };
        }
      });
    };

    const disableButton = () => {
      //untuk mengecek apakah input memiliki 8 character

      return this.setState(prevState => {
        const { username, email, password, confirmpassword } = prevState.values;

        const register =
          name === "register" &&
          (username.length >= 8 &&
            email.length >= 8 &&
            password.length >= 8 &&
            confirmpassword.length >= 8);

        const login =
          name === "register" && (username.length >= 8 && password.length >= 8);

        if (register || login) {
          return {
            values: {
              ...prevState.values,
              disabled: false
            }
          };
        } else {
          return {
            values: {
              ...prevState.values,
              disabled: true
            }
          };
        }
      });
    };

    switch (prop) {
      case "confirmpassword":
        setTimeout(this.isMatchPassword, 100);

        this.setState(prevState => ({
          values: { ...prevState.values, [prop]: value.replace(/\s+/g, "") }
        }));

        setTimeout(disableButton, 100);

        break;
      default:
        this.setState(prevState => {
          if (prop === "Email") {
            return {
              values: {
                ...prevState.values,
                [prop]: value.replace(/\S+@\S+\.\S+/, "")
              }
            };
          } else {
            return {
              values: { ...prevState.values, [prop]: value.replace(/\s+/g, "") }
            };
          }
        });

        setTimeout(disableButton, 100);
        setTimeout(tests, 100);
    }
    console.log("state from logic", this.state);
  };

  handleClickShowPassword = prop => {
    //untuk mengubah type text ke password dan sebaliknya

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
    const { name } = event.target;

    const {
      values: { username, email, password },
      api
    } = this.state;

    if (name === "register") {
      Axios.post(`${api}/api/register`, { username, email, password })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
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
