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

const Alert = <MuiAlert elevation={6} variant="filled" />;

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

function Listing(props) {
  const { classes } = props;
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState({ nextPage: "", prevPage: null });
  const [pageClick, triggerPageClick] = useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = () => {
    let searchParams = JSON.parse(localStorage.getItem("searchquery"));
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `listing?q=${
            searchParams
              ? searchParams.tattooType +
                " tattoo in " +
                searchParams.bodyPart +
                " " +
                searchParams.design
              : " design"
          }&start=${index.nextPage}`
        );
        console.log(data.data);
        setImages(data.data.items);
        setIndex({
          nextPage: data.data.nextPage,
          prevPage: data.data.previousPage ? data.data.previousPage : "",
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  };

  useEffect(() => {
    handleApi();
  }, [pageClick]);

  const handleAdd = (item) => {
    let inspirations = localStorage.getItem("inspirations") ? JSON.parse(localStorage.getItem("inspirations")) : [];
    inspirations = [...inspirations, item];
    localStorage.setItem("inspirations", JSON.stringify(inspirations));
  };

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={30}>
        {images.map((card) => (
          <Grid item key={card.img} sm={6} md={3} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.img} // eslint-disable-line max-len
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                {/* <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>
                  {card.snippet}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  style={{ border: "1px solid black", color: "black" }}
                  onClick={() => handleAdd(card)}
                >
                  Add To Inspiration
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
       
      </Grid>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        {" "}
        {index.prevPage ? (
          <Button
            variant="contained"
            style={{ background: "black", color: "white" }}
            color="primary"
            onClick={() => triggerPageClick(!pageClick)}
          >
            {"Prev <<"}
          </Button>
        ) : null}
        <Button
          variant="contained"
          style={{ background: "black", color: "white" }}
          color="primary"
          onClick={() => {
            console.log("clicked");
            triggerPageClick(!pageClick);
          }}
        >
          {"Next >>"}
        </Button>
      </div>
    </div>
  );
}
export default withStyles(styles)(Listing);
