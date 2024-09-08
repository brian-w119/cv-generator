const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links"></div>
            <a href="/">Home</a>
            <a href="/create" style={{
               color: "white", 
               backgroundColor: "grey",
               borderRadius: "8px"
            }}>New Blog</a>
        </nav>
     );
}
 
export default Navbar;