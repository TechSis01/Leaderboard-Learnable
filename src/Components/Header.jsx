import books from "../Images/books.png"
const Header = ()=>{
    return(
        <>
        <div className="header">
            <img src={books} alt="stacked books"></img>
            <h1>Learnable Leaderboard</h1>
        </div>
        </>
    )
}

export default Header;