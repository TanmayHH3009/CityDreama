import { makeStyles } from '@mui/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Updated to black
   // backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    border: '2px solid gray', // 2px solid black border
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: "linear-gradient(45deg, #000 30%, #000 90%)",
    color: '#fff', // Text color to white
  },
  
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#fff', 
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#fff', 
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: '#fff', // Ensure details text is white
  },
  title: {
    padding: '16px',
    marginLeft: '-100px',
    fontWeight: 'bold',
    color: '#fff', // Ensure title text is white
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
