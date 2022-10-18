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
import axios from "axios";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

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

function Inspirations(props) {
  const { classes } = props;
  const [images, setImages] = useState([]);

  useEffect(() => {
    let images = localStorage.getItem("inspirations");
    if (images) {
      setImages(JSON.parse(images));
    }
  }, []);
  const remove = (card) => {
    let newarr = images.filter((each) => each.img != card.img);
    localStorage.setItem("inspirations", JSON.stringify(newarr));
    setImages(newarr);
  };
  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={30}>
        {images.length ? (
          images.map((card) => (
            <Grid item key={card.img} sm={6} md={3} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.img} // eslint-disable-line max-len
                  title="Image title"
                />
                <CardContent className={classes.cardContent}></CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    style={{ border: "1px solid black", color: "black" }}
                    onClick={() => remove(card)}
                  >
                    Remove Inspiration
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              fontSize: "24px",
            }}
          >
            No saved items yet!
          </Grid>
        )}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Inspirations);
