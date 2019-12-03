import { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router";

class LogicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: {
        login: ["Email", "Password"],
        register: ["Username", "Email", "Password", "Confirm Password"]
      },
      values: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        showPassword: false,
        showConfirmPassword: false,
        disabled: true
      },
      isNewAccount: false,
      isMatched: false,
      name: "",
      error: {
        username: "",
        email: "",
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
      this.setState(prevState => {
        return {
          error: { ...prevState.error, confirmpassword: "Password different" },
          complete: { ...prevState.complete, confirmpassword: "" },
          isMatched: false
        };
      });
    } else {
      this.setState(prevState => ({
        error: { ...prevState.error, confirmpassword: "" },
        complete: {
          ...prevState.complete,
          confirmpassword: "Password Matched"
        },
        isMatched: true
      }));
    }
  };

  handleChange = prop => event => {
    const { value, name } = event.target;
    // this.setState({ name: name });

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
      //untuk mengecek apakah input memiliki 8 character dan men-disable button

      return this.setState(prevState => {
        const {
          values: { username, email, password },
          isMatched,
          isNewAccount
        } = prevState;

        const register =
          name === "register" &&
          (username.length >= 8 && email.length >= 8 && isMatched) &&
          isNewAccount;

        const login =
          name === "login" &&
          (email.length >= 8 && password.length >= 8) &&
          !isNewAccount;

        console.log(
          "login",
          login,
          "register",
          register,
          "ismatched",
          isMatched
        );
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
            },
            isMatched: false
          };
        }
      });
    };

    switch (prop) {
      case "confirmpassword" || "password":
        this.setState(prevState => ({
          values: { ...prevState.values, [prop]: value.replace(/\s+/g, "") }
        }));

        setTimeout(this.isMatchPassword, 100);
        setTimeout(disableButton, 100);
        setTimeout(this.isMatchPassword, 100);
        setTimeout(disableButton, 100);
        setTimeout(tests, 100);

        break;
      default:
        this.setState(
          prevState => {
            if (prop === "Email") {
              return {
                values: {
                  ...prevState.values,
                  [prop]: value.replace(/\S+@\S+\.\S+/, "")
                }
              };
            } else {
              return {
                values: {
                  ...prevState.values,
                  [prop]: value.replace(/\s+/g, "")
                }
              };
            }
          },
          () => {
            console.log("state from logic", this.state);
          }
        );

        setTimeout(disableButton, 100);
        setTimeout(tests, 100);
        setTimeout(disableButton, 100);
        setTimeout(tests, 100);
    }
  };

  handleClick = prop => {
    //untuk mengubah type text ke password dan sebaliknya

    const { values, isNewAccount } = this.state;
    if (prop === "isNewAccount") {
      this.setState({
        values: {
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          showPassword: false,
          showConfirmPassword: false,
          disabled: true
        },
        isNewAccount: !isNewAccount,
        isMatched: false,
        name: "",
        error: {
          password: "",
          confirmpassword: ""
        },
        complete: {
          username: "",
          email: "",
          password: "",
          confirmpassword: ""
        }
      });
    }

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

    this.setState(prevState => {
      return { values: { ...prevState.values, disabled: true } };
    });

    if (name === "register") {
      Axios.post(`${api}/api/register`, { username, email, password })
        .then(res =>
          this.setState(
            prevState => {
              return {
                values: {
                  username: "",
                  email: "",
                  password: "",
                  confirmpassword: "",
                  showPassword: false,
                  showConfirmPassword: false,
                  disabled: !prevState.disabled
                },
                isNewAccount: !prevState.isNewAccount
              };
            },
            () => console.log(res)
          )
        )
        .catch(err =>
          this.setState(
            prevState => {
              return {
                values: { ...prevState.values, disabled: !prevState.disabled }
              };
            },
            () => console.log(err)
          )
        );
    } else if (name === "login") {
      Axios.post(`${api}/api/login`, { email, password })
        .then(res => {
          localStorage.setItem("token", res.data.access_token);
          this.setState(
            prevState => {
              return {
                values: {
                  username: "",
                  email: "",
                  password: "",
                  confirmpassword: "",
                  showPassword: false,
                  showConfirmPassword: false,
                  disabled: !prevState.disabled
                }
              };
            },
            () => console.log(res)
          );
        })
        .catch(err =>
          this.setState(
            prevState => {
              return {
                values: { ...prevState.values, disabled: !prevState.disabled }
              };
            },
            () => console.log(err)
          )
        );
    }
  };

  render() {
    return this.props.render(
      this.state,
      this.handleChange,
      this.handleClick,
      this.handleSubmit
    );
  }
}

export default withRouter(LogicForm);
