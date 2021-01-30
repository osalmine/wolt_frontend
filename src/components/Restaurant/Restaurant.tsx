import React from 'react';
import { Restaurant } from '../RestaurantSection/RestaurantSection';
import { Blurhash } from "react-blurhash";
import './Restaurant.css';

interface Props {
	restaurant: Restaurant;
	displayBlurhash?: boolean;
}

const RestaurantComponent: React.FC<Props> = ({ restaurant, displayBlurhash = true }) => {
	return (
		<div className="restaurant-wrapper">
			{displayBlurhash && 
			<Blurhash 
				hash={restaurant.blurhash}
				width={'100%'}
				height={'80%'}
				className="rounded-corners d-block"
			/>}
			<div className="text-container">
				<h2>{restaurant.name}</h2>
				<p>{restaurant.online ? "online" : "offline"} <span className={restaurant.online ? "dot online" : "dot offline"} /></p>
			</div>
		</div>);
};

export default RestaurantComponent;