import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home () {
    return (
    <div className="mx-auto sm:px-6 lg:px-8">
      <img
        className="home-image"
        src="https://editors.dexerto.com/wp-content/uploads/2024/01/10/Helldivers-2-header-img.jpg"
        alt="store front"
      />
      <Link to="/products">
        <button className="md-button shop-button">Shop now!</button>
      </Link>
      <div>
        <p>
        In the depths of the ocean, where darkness reigns and pressure mounts, there exists a breed of warriors known as helldivers. Among them, none were as renowned as Captain Jack Reynolds. For years, he led his team through treacherous missions, navigating the murky depths with skill and courage. But after a particularly harrowing mission that claimed the lives of several of his comrades, Jack made the difficult decision to retire from active duty.

        Haunted by the memories of his time as a helldiver, Jack sought solace in the calmness of the surface world. He settled in a coastal town, far from the echoing depths of the ocean. But the call of adventure still whispered in his ear, urging him to seek new challenges.

        Inspired by his experiences, Jack decided to channel his energy into a new venture. Drawing on his artistic talents, he began designing t-shirts adorned with bold, marine-inspired designs. Each shirt bore the mark of his bravery, a testament to his time as a helldiver.</p>
      </div>
    </div>
    )
}

export default Home;