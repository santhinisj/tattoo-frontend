import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Search from "./Search";
import SignUp from "./SignUp";
import SignInSide from "./SignIn";

const styles = (theme) => ({
  appBar: {
    position: "relative",
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
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Home(props) {
  const { classes, signup } = props;
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  console.log(isUserLoggedIn);
  useEffect(() => {
    let isuserloggedin = localStorage.getItem("isuserloggedin");
    if (isuserloggedin) {
      setUserLoggedIn(true);
    }
  });
  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                GET INKED
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Customize your tattoo search
              </Typography>
              <Search />
            </div>
          </div>
        </main>
      ) : signup ? (
        <SignUp />
      ) : (
        <SignInSide handleLoggedIn={(flag) => setUserLoggedIn(flag)} />
      )}
      {/* Footer */}
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);
