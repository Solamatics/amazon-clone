import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img 
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
					alt="" 
				/>

				<div className="home__row">
					<Product
						id="12321341" 
						title="The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
						price={29.99} 
						image="https://www.pearson.fr/resources/titles/27440100848370/images/27440100848370L.jpg"  
						rating={5} 
					/>
					<Product 
						id="45865514"
						title="The Universal Design Kitchen Product"
						price={149.99}
						image="https://th.bing.com/th/id/OIP.qB5qqxzKF-b3rJLPr0N-XgHaHa?pid=Api&w=640&h=640&rs=1"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="56088885" 
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						image="https://image.ceneostatic.pl/data/products/81056986/4fa017ac-a9ef-4d33-adfe-570a7805af35_i-samsung-49-crg90-lc49rg90ssuxen.jpg?=f4b82"
						rating={3}
					/>
					<Product 
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						image="https://sm.pcmag.com/t/pcmag_uk/review/a/amazon-ech/amazon-echo-3rd-generation_7w88.1200.jpg"
						rating={5}
					/>
					<Product 
						id="6667788"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={589.99}
						image="https://cdn.mobilesyrup.com/wp-content/uploads/2020/03/ipad-pro-2020-header-scaled.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="44455566"
						title= "Play Station 5: Have a thrilling experience"
						price={699.99}
						image="https://i.ytimg.com/vi/--fXXoZmjnw/maxresdefault.jpg"
						rating={5} 
					/>
				</div>
			</div>
		</div>
	)
}

export default Home;

