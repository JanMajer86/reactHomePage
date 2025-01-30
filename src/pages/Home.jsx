import Card from "./../components/Card";
import tactical from "./../assets/images/tacticalcomputerterminal.jpg";
import terminal from "./../assets/images/falloutTerminal.jpg";
import studio from "./../assets/images/studio.jpg";

const Home = () => {
	const style = window.getComputedStyle(document.body);
	const colorPrimary = style.getPropertyValue("--color-primary");
	const colorSecondary = style.getPropertyValue("--color-secondary-dark-2");
	const colorBackground = style.getPropertyValue("--color-primary-dark-3");
	const gradientPrim = style.getPropertyValue("--color-prim-dark");
	const gradientSec = style.getPropertyValue("--color-second");

	return (
		<div
			className="home"
			style={{ display: "flex", justifyContent: "space-around" }}
		>
			<Card
				top={false}
				borderColor={colorPrimary}
				gradientColor={gradientPrim}
				bgColor={colorBackground}
				bgImg={terminal}
				bgPosition="center"
				bgSize="180% auto"
				topSegmentContent="tech"
				bottomSegmentContent="tech stack list goes here"
			/>
			<Card
				top={true}
				borderColor={colorSecondary}
				gradientColor={gradientSec}
				bgColor={colorBackground}
				bgImg={tactical}
				bgPosition="top"
				bgSize="cover"
				topSegmentContent="introduce yourself"
				bottomSegmentContent="introduce yourself even more"
			/>
			<Card
				top={false}
				borderColor={colorPrimary}
				gradientColor={gradientPrim}
				bgColor={colorBackground}
				bgImg={studio}
				bgPosition="center"
				bgSize="auto 100%"
				topSegmentContent="maybe a photo"
				bottomSegmentContent="very short bio"
			/>
		</div>
	);
};
export default Home;
