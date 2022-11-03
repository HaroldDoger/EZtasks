import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    } 
  return (
    <header className='header'>
       <h1>{title}</h1>
       <Button color='green' text='Add' onClick=
       {onClick} />
       {/*<h1 style={headingStyle}>{title}</h1>*/}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}


export default Header