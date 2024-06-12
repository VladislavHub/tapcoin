import "./index.css"
import { Link } from "react-router-dom"

export default function WelcomePage() {
  return (
    <header className="welcome__page">
      <div className="title">WELCOME TO TAPCOIN</div>

      <Link className="button welcome__page-button" to="/coin">START MINE</Link>

    </header>
  )
}