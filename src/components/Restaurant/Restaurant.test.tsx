import Restaurant from './Restaurant';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

const restaurantObject = {
	"blurhash": "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
	"launch_date": "2020-04-20",
	"location": [
		24.938082,
		60.17626
	],
	"name": "Sea Chain",
	"online": true,
	"popularity": 0.956990414084132
};

describe('Restaurant component tests', () => {
	test('has name from inputJson', () => {
		const component = render(
			<Restaurant restaurant={restaurantObject} displayBlurhash={false} />
		);
	
		expect(component.container).toHaveTextContent('Sea Chain');
	});
	
	test('has oneline status from inputJson', () => {
		const component = render(
			<Restaurant restaurant={restaurantObject} displayBlurhash={false} />
		);
	
		expect(component.container).toHaveTextContent('online');
	});
	
	test('matches snapshot', () => {
		const tree = renderer.create(
			<Restaurant restaurant={restaurantObject} displayBlurhash={false} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});