import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    background: "linear-gradient(45deg, #000 30%, #000 90%)",
    borderRadius: 15,
    border:'2px solid gray',
    margin: '30px 0',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width:'100%',
    flexDirection: 'row-reverse'
  },
  heading: {
    color:'#fff'
  },
  image: {
    marginLeft: '15px',
    marginTop: '10px'
  },
  footer: {
    padding: 0,
    background: "linear-gradient(45deg, #000 30%, #000 90%)",
   color:'#fff',
    textAlign: 'center',
    margin:'0 0'
  },
  '@media (max-width:700px)': {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));
