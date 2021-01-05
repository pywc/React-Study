import './App.css';

function MyName(props) {
    return (
        <div className='App-Content'>
            Hello! My name is <b>{props.name}</b>.
        </div>
    )
}

MyName.defaultProps = {
    name: 'Default'
};

export default MyName;