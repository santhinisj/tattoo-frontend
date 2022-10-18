import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Route } from "react-router-dom";

const styles = (theme) => ({
  appBar: {
    position: "relative",
    color: "white",
    background: "black",
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            Get Inked
          </Typography>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
            <Typography variant="h6"  noWrap>
              Home
            </Typography>
          </Link>
          <Typography variant="h6" color="white" noWrap>
            <Link to="inspirations" style={{textDecoration:"none", color:"white"}}>Saved Inspirations</Link>
          </Typography>
          <LogoutIcon />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
