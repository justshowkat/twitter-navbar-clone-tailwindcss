import Navbar from "./Component/Navbar/Navbar";
import filler from "./icons/content-bg.png";

function App() {
	return (
		<div className="gird place-content-center w-screen bg-dark-4">
			<div className="md:w-full lg:max-w7xl h-screen text-dark-1 md:flex justify-center">
				<Navbar />
				<div className="max-w-4xl bg-dark-3">
					<img src={filler} alt="" />
				</div>
			</div>
		</div>
	);
}

export default App;
