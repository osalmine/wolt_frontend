import RestaurantSection from './RestaurantSection';
import inputJson from '../../discovery_page.json';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

const sectionInput = inputJson.sections[0];

describe('RestaurantSection component tests', () => {
	test('renders section from sectionInput', () => {
		render(<RestaurantSection section={sectionInput} displayBlurhash={false} />);
	
		const title = screen.getByText(/Popular Restaurants/i);
		expect(title).toBeInTheDocument();
	});

	test('renders a restaurant from sectionInput', () => {
		render(<RestaurantSection section={sectionInput} displayBlurhash={false} />);
		
		const title = screen.getByText('Sea Chain');
		expect(title).toBeInTheDocument();
	});

	test('matches snapshot', () => {
		const tree = renderer.create(<RestaurantSection section={sectionInput} displayBlurhash={false} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});