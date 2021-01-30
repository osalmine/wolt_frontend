import React from 'react';
import RestaurantComponent from '../Restaurant/Restaurant';
import './Section.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export interface Restaurant {
	blurhash: string;
	launch_date: string;
	location: number[];
	name: string;
	online: boolean;
	popularity: number;
	distanceFromCurrentLocation?: number;
}

export interface Section {
	title: string;
	restaurants: Restaurant[];
}

interface Props {
	section: Section;
	displayBlurhash?: boolean;
}

const RestaurantSection: React.FC<Props> = ({ section, displayBlurhash = true }) => {
	return (
    	<div className="Section">
			<i className="anchor" id={section.title.replace(/ /g,'')}/>
			<h1>{section.title}</h1>
			<CarouselProvider
				naturalSlideWidth={160}
				naturalSlideHeight={90}
				totalSlides={section.restaurants.length}
				infinite={true}
			>
				<Slider>
					{section.restaurants.map((restaurant, i) => {
						return (
							<Slide index={i} key={i}>
								<RestaurantComponent restaurant={restaurant} displayBlurhash={displayBlurhash} />
							</Slide>);
					})}
				</Slider>
				<div className="control-container">
					<ButtonBack className="move-button"><i className="fas fa-angle-left fa-3l fa-ccolor" /></ButtonBack>
					{section.restaurants.map((el, i) => <Dot className="slide-dot" slide={i} key={i}/>)}
					<ButtonNext className="move-button"><i className="fas fa-angle-right fa-ccolor" /></ButtonNext>
				</div>
			</CarouselProvider>
		</div>);
}

export default RestaurantSection;