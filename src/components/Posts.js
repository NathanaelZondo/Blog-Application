import * as React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import app from "../redux/store/store";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import * as queries from "../graphql/queries";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Header from "../components/Header";
import Grow from "@material-ui/core/Grow";
import { Auth } from "aws-amplify";
import TextField from "@material-ui/core/TextField";
import PhotoIcon from "@material-ui/icons/Photo";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Posts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [posts, setposts] = React.useState([]);
  const [profile, setprofile] = React.useState({});

  React.useEffect(() => {
    console.log("Posts");

    ////////////////////Get The blog ID here///////////////////////////
    console.log("id here =>", app.getState().postReducer);

    getposts();
    fetchData();
  }, []);

  const history = useHistory();
  async function fetchData() {
    await Auth.currentUserInfo().then((res) => {
      setprofile(res.attributes);
      console.log("profile ", res.attributes);
    });
  }



  //////////////////////Get posts using blog ID////////////////////////////
 
  async function getposts() {

    ///////////Make sure that you get the Blog post ID for the query
    const listposts = await API.graphql({
      query: queries.listPosts,
      variables: {
        filter: { blogPostsId: { eq: app.getState().blogsReducer } },
      },
    });
    console.log("listposts", listposts.data.listPosts.items);
    setposts(listposts.data.listPosts.items);
  }

  const [coms, setcoms] = React.useState("");

  function myarray(x) {
    console.log("myarray", x);
  }

  return (
    <div>
      {/* Posts */}

      <div>
        <div className={classes.root}>
          <Header />
          <br></br>
          <br></br>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={2.5}>
              <Paper className={classes.paper}>
                <CardActionArea
                  onClick={() => {
                    // console.log('clickick')
                    // history.push('/Profile')
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/12046302/pexels-photo-12046302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <div>
                    <label style={{ fontWeight: "bold", fontSize: "25px" }}>
                      {profile.preferred_username}
                    </label>
                    <br></br>
                    <label style={{ fontWeight: 50, fontSize: "20px" }}>
                      Nathanael Zondo
                    </label>
                    <br></br>
                    <br></br>
                    <p>
                      {profile.email}
                      <br></br>
                      {profile.phone_number}
                    </p>
                  </div>
                </CardActionArea>
                <CardActions></CardActions>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={1.5}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/8539548/pexels-photo-8539548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        className={classes.large}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <TextField
                        id="outlined-basic"
                        label="Start a post"
                        variant="outlined"
                        style={{ width: "80%" }}
                      />
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                      >
                        <span style={{ color: "blue" }}>
                          {" "}
                          <SendIcon fontSize="large" />
                        </span>
                      </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        {" "}
                        <span style={{ color: "#2253bd" }}>
                          <PhotoIcon />
                        </span>{" "}
                        Photo
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <span style={{ color: "orange" }}>
                          {" "}
                          <VideocamIcon />{" "}
                        </span>{" "}
                        Video
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <span style={{ color: "chocolate" }}>
                          <EventIcon />
                        </span>{" "}
                        Event
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <span style={{ color: "teal" }}>
                          <AssignmentIcon />{" "}
                        </span>
                        <label>Write</label>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <br></br>
              <Paper>
                {" "}
                {posts.map((post) => {
                  console.log(post.comments.items);
                  return (
                    <div key={post.id}>
                      {/* <h1>{post.id}</h1> */}
                      <br></br>

                      <Grow in={true}>
                        <Card className={classes.root}>
                          <CardHeader
                            avatar={
                              <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                              >
                                {post.user.substring(0, 1)}
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>
                            }
                            title={post.user}
                            subheader={post.createdAt.substring(0, 10)}
                          />
                          <CardMedia
                            className={classes.media}
                            image={post.postpicture}
                            title="Paella dish"
                          />

                          <CardContent>
                            <h3>{post.title}</h3>
                          </CardContent>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                              <ShareIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => {
            //////////////////////// Get all comments using the ID from the post
                                console.log('=====>' ,post.comments.items)
                                setcoms(post.comments.items);

                                post.comments.items.map((search) => {
                                  setcoms(search.postCommentsId);
                                  console.log(search.postCommentsId);
                                });
                                console.log("clingy", post.comments.items);
                              }}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          </CardActions>

                          <CardContent>
                            <h3>Comments:</h3>

                            {post.comments.items.map((comment) => {
                              if (comment.postCommentsId == coms) {
                                return (
                                  <div key={comment.id}>
                                    <Paper
                                      variant="outlined"
                                      className={classes.root}
                                    >
                                      <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                        style={{ padding: "1%" }}
                                      >
                                        <Grid
                                          item
                                          xs={1}
                                          style={{ paddingTop: "1%" }}
                                        >
                                          <Avatar
                                            alt="Remy Sharp"
                                            src={comment.userpicture}
                                          />
                                        </Grid>

                                        <Grid
                                          item
                                          xs={11}
                                          style={{ backgroundColor: "white" }}
                                        >
                                          {comment.user}
                                          <br></br>
                                          <label> {comment.content}</label>
                                        </Grid>
                                      </Grid>
                                    </Paper>

                                    <br></br>
                                    <br></br>
                                  </div>
                                );
                              }
                            })}
                          </CardContent>
                        </Card>
                      </Grow>

                      <div>
                        <div>
                          {" "}
                          <div></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                Chats
                <List className={classes.root} style={{ overflowY: "auto" }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/4171475/pexels-photo-4171475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Travis Howard"
                        src="https://images.pexels.com/photos/2726108/pexels-photo-2726108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/12180997/pexels-photo-12180997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/12132208/pexels-photo-12132208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/11889632/pexels-photo-11889632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/12132204/pexels-photo-12132204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.pexels.com/photos/7690946/pexels-photo-7690946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Sandra Adams
                          </Typography>
                          {
                            " — Do you have Paris recommendations? Have you ever…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
