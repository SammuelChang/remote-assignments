// reference link
// https://stackoverflow.com/questions/41978408/changing-style-of-a-button-on-click
// https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react

// terminal steps
// cd /Users/changlihsiang/Dropbox/appWorkSchool/week-4/assignment3 
// python -m http.server 8700

class Header extends React.Component{
    render(){
    return (
        <header className="main-header" id="top">

        <div>
            <h1 className="topTitle">Title/Logo</h1>
        </div>
        <div className="menu">
            <nav className="menuText">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>

            </nav>
        </div>
        <img className="altMenu " onClick = {this.props.handler}  src="./img/menu.png " alt="menu icon " />
    </header>
    );
};
}

const Welcome = (props) => {
    return(
    <div className="welcome ">
        <div className="message-container">
            <Change />
        </div>
    </div>
    );
}



const Main = (props, showBoxHandler) => {
    const showBox = props.showBox;
    let showBoxClass;
    if (showBox){
        showBoxClass = "container secondContainer show"
    } else {
        showBoxClass = "container secondContainer hide"
    }

    return(
        <main>
        <h2>Section Title</h2>
        <div className="container firstContainer">
            <div className="container1">
                <div className="column partOne one ">Content Box 1</div>
                <div className="column partOne two ">Content Box 2</div>
            </div>
            <div className="container2">
                <div className="column partTwo three ">Content Box 3</div>
                <div className="column partTwo four ">Content Box 4</div>
            </div>
        </div>
        <div className="actionContainer">
            <div className="actionCenter">
            <button 
                className="actionButton"
                onClick = {props.showBoxHandler}> Call to Action</button>
            </div>
        </div>
        <div className={showBoxClass}>
            <div className="container1">
                <div className="column partOne one ">Content Box 1</div>
                <div className="column partOne two ">Content Box 2</div>
            </div>
            <div className="container2">
                <div className="column partTwo three ">Content Box 3</div>
                <div className="column partTwo four ">Content Box 4</div>
            </div>
        </div>
    </main>
    );
}

const Aside = (props, handler) => {
        const showMenu = props.showMenu;
        let showMenuClass;
        if (showMenu){
            showMenuClass = "show"
        } else {
            showMenuClass = "hide"
        }

        return(
            <aside className={showMenuClass}>
            <img
                className="closeMenu"
                onClick = {props.handler}
                src="./img/close.png " 
                alt="close menu" />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </aside>
        );
}

{/* function MyApp() {
    return <h1>Hello, world!</h1>;
} */}

// function MyApp() {
// return (
//     <div>
//         <Header />,
//         <Welcome title="Welcome Message" />,
//         <Main />,
//         <Aside />
//     </div>
//     );
// }

class Change extends React.Component{
    state = {
        title: "Welcome Message"
    }

    changeText = () => {
        this.setState( prevState => ({
            title: "Have a Good Time!"
        }));
    }

    render(){
        return (
            <h1 onClick={() => this.changeText()}>{this.state.title}</h1>
        );
    }
}

class MyApp extends React.Component{
    constructor(props) {
        super(props)
    
        // this.handler = this.handler.bind(this)
        this.state = {
            showMenu: false,
            showBox: false
        };
      }
    
    //   handler() {
    //     this.setState({
    //         showMenu: !this.state.showMenu
    //     })
    //   }

    handler = () =>
    this.setState({ showMenu: !this.state.showMenu });

    showBoxHandler = () =>
        this.setState({ showBox: !this.state.showBox });
    
    render(){
        return (
            <div>
                <Header handler = {this.handler}  />,
                <Welcome />,
                <Main                     
                    showBox = {this.state.showBox}
                    showBoxHandler = {this.showBoxHandler}  />,
                <Aside  
                    showMenu = {this.state.showMenu}
                    handler = {this.handler}  />
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);


// {/* //Request 1: Click to Change Text. */}
// const welcomeMessage = document.querySelector(".message-container");
// welcomeMessage.addEventListener('click', () => {
//     welcomeMessage.innerHTML = '<h1>Have a Good Time!</h1>';
//     welcomeMessage.style.color = 'darkred';
//     welcomeMessage.style.fontSize = "x-large";
// });


{/* //Request 2: Click to Show / Close Menu. */}
// const asideMenuCloseButton = document.querySelector("aside img");
// const asideMenu = document.querySelector("aside");
// const topMenuButton = document.querySelector(".altMenu");

// asideMenuCloseButton.addEventListener('click', () => {
//     asideMenu.style.display = 'none';
// });

// topMenuButton.addEventListener('click', () => {
//     asideMenu.style.display = 'block';
// });


// {/* //Request 3: Click to Show More Content Boxes. */}
// const callToActionButton = document.querySelector(".actionButton");
// const secondContainer = document.querySelector(".secondContainer");
// callToActionButton.addEventListener('click', () => {
//     secondContainer.style.display = 'block';
// });
