import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@mui/material";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link, Route } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

class NativeSelects extends React.Component {
  state = {
    tattooType: "",
    bodyPart: "",
    design: "",
    labelWidth: 0,
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value }, () => {
      console.log(this.state);
      localStorage.setItem(
        "searchquery",
        JSON.stringify({
          tattooType: this.state.tattooType,
          bodyPart: this.state.bodyPart,
          design: this.state.design,
        })
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Tattoo Type</InputLabel>
            <Select
              native
              value={this.state.tattooType}
              onChange={this.handleChange("tattooType")}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option value="" />
              <option value="miniature">Miniature</option>
              <option value="normal">Normal</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-helper">
              Choose body part
            </InputLabel>
            <NativeSelect
              value={this.state.bodyPart}
              onChange={this.handleChange("bodyPart")}
              input={<Input name="age" id="age-native-helper" />}
            >
              <option value="" />
              <option value="neck">Neck</option>
              <option value="face">Face</option>
              <option value="lower back">Lower back</option>
              <option value="back">Back</option>
              <option value="leg">Leg</option>
              <option value="hand">Hand</option>
              <option value="chest">Chest</option>
              <option value="tummy">Tummy</option>
              <option value="ankle">Ankle</option>
              <option value="wrist">Wrist</option>
            </NativeSelect>
            <FormHelperText>
              What body part do you want to get tattoed?
            </FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Search for design"
              variant="standard"
              onChange={this.handleChange("design")}
            />
          </FormControl>
        </div>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Link to="/listing">
                <Button
                  variant="contained"
                  style={{ background: "black", color: "white" }}
                  color="primary"
                >
                  Search
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
