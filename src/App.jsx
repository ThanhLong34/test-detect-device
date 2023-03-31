import {
	BrowserView,
	MobileView,
	deviceType,
	browserName,
	mobileVendor,
	mobileModel,
	useMobileOrientation,
} from "react-device-detect";
import "./App.css";

function App() {
	const { isLandscape } = useMobileOrientation();

	return (
		<div className="App">
			<BrowserView>
				<h1>Brower</h1>
			</BrowserView>
			<MobileView>
				<h1>Mobile</h1>
			</MobileView>

			<h3>Device type: {deviceType}</h3>
			<h3>Landscape: {isLandscape ? "yes" : "no"}</h3>
			<h3>Browser name: {browserName}</h3>
			<h3>Mobile vendor: {mobileVendor}</h3>
			<h3>Mobile model: {mobileModel}</h3>
		</div>
	);
}

export default App;
