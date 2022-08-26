import * as React from 'react'
import "../App.css";
import { useSelector,useDispatch } from "react-redux";
import * as queries from '../graphql/queries'
import { decrement,increment,reset,logIn,logOut,credentials,blogId} from "../redux/actions/index";
import app from '../redux/store/store'
import { API } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Switchs from '@material-ui/core/Switch';
import Header from '../components/Header';
import { Auth } from 'aws-amplify';
import {BrowserRouter as Router,useHistory,useParams} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
  import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
    root: {
   
        flexGrow: 1,
       
    
    },
    cards: {
        maxWidth:'100%',
        marginBottom:10
        
      },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
 
  }));

export default function Blogs() {
    const classes = useStyles();
  
const history = useHistory()
const dispatch = useDispatch()
const [blogs,setblogs] = React.useState([])
const [listblogs,setlistblogs] = React.useState([])
const [posts,setposts] = React.useState([])
const [comments,setcomments] = React.useState([])
const [selectedposts,setselectedposts] = React.useState([])
const [postcomments,setpostcomments] = React.useState([])
const [expanded, setExpanded] = React.useState(false);
const [value, setValue] = React.useState(0);




React.useEffect( () => {

  
    fetchData()
    getblogs()
  });


async function getblogs(){
  var filter ="Mother City"
  const blogs= await API.graphql({ query: queries.listBlogs,variables:{filter:{name: {eq: "Mother City"}} }});
  console.log('Blogs',blogs)

}


  async function fetchData() {
    await Auth.currentUserInfo().then(res=>{

        dispatch(credentials(res))
      })
    }




const handleExpandClick = () => {
  setExpanded(!expanded);
};

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });


 /////////////////Function to get blogs////////////// 
async function getBlogs(){
    const allblogs = await API.graphql({ query: queries.listBlogs });
     setlistblogs(allblogs.data.listBlogs.items )
     console.log('allblogs',allblogs.data.listBlogs.items)

let myblogs =[]


 
   allblogs.data.listBlogs.items.map(async blogId=>{

        const getSingleBlogs = await API.graphql({ query: queries.getBlog, variables: { id: blogId.id }})
        

        myblogs.push(getSingleBlogs.data.getBlog)
        setblogs(myblogs)
     
    })
  

   

}


    React.useEffect(  () => {

        getBlogs()

      },[]);


    return (





        
        <div className={classes.root}>
<Grow in={true}><Header/></Grow>

<br></br><br></br>
<div style={{ backgroundColor: 'white',position: 'fixed' ,top:0,height: '55px',width:'100vw'}}>

<Grid container spacing={0}>
        
        <Grid item xs={3}>
          <img src={require('../linkedin.png')} height="55" width="50"/>
        </Grid>
        <Grid item xs={5}>
        <FormControl className={classes.margin}>
       
        <Input
          id="input-with-icon-adornment"
          placeholder='Search blog'
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
        </Grid>
        <Grid item xs={3}>
          <div >icons</div>
        </Grid>
        <Grid item xs={1}>
          <div><Switchs
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /></div>
        </Grid>
      </Grid>
</div>
<Grid container spacing={1} style={{paddingTop:10}}>

   
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>2</Paper> */}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={3}>


         <br></br> <br></br>

   

        

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


<div >
{listblogs.map(blog => {


return (
  <Grow in={true}>
    {/* //////////////// onclick on the card for navigation ///////////////// */}
<Card className={classes.cards} key={blog.id} onClick={()=>{

console.log(blog.id)
console.log(posts)
dispatch(blogId(blog.id))

history.push("/Posts");


let clickedpost=[]
posts.map(search => {

    if(search.blogPostsId ==blog.id){
        clickedpost.push(search)
        setselectedposts(clickedpost)

    }
 
})

console.log(selectedposts)
}} >
<CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor:'blue'}}>
            {blog.user[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={blog.user}
        subheader={blog.createdAt}
      />
      <CardActionArea>
          
        <CardMedia
          className={classes.media}
          image={blog.blogpicture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {blog.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
       {blog.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
    </Grow>
)})}
</div>

<div>



{/* <BottomNavigation
      value={value}
      style={{ backgroundColor: 'white',position: 'fixed' ,bottom:0,width:'69%'}}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation> */}
</div>






           



          </Paper>
        </Grid>
        <Grid item xs={2}>
          {/* <Paper className={classes.paper}>2</Paper> */}
        </Grid>
      </Grid>




      <button onClick={ async() => {
      
    

      await Auth.signOut().then(res=>{
          console.log(res)
      })
    console.log()
    }
        }>Logout</button>





        </div>
    )
    

}