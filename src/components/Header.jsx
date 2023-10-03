import Switch from "./Switch";

function Header() {
    return (
        <header>
            <div className="logo">
                Bookstore
            </div>

            <div className="user">
                <Switch />
                <img className="user__avatar" src="./user-logo.png" />
                <span className="user__name">Nhat Huy</span>
            </div>
        </header>
    )
}

export default Header;