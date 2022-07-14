export default function Main(props){
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1>Fun Facts About React</h1>
            <ul className="main--ul">
                <li>Was first released on 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}