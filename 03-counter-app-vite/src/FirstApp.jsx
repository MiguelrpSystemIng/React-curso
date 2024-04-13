import PropTypes from 'prop-types';


export const FirstApp = ({title}) => {



    return (
    <>
    
    <h1>Hola {title}!!!</h1>
    <h1>{title}</h1>


    <p>My first React App</p>
    
    </>
    );
  }


  FirstApp.propTypes = {
    title: PropTypes.string.isRequired
  }

  FirstApp.defaultProps = {
    title: 'Default Title'
  }