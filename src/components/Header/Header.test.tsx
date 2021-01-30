import Header from './Header';
import inputJson from '../../discovery_page.json';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('Header component tests', () => {
	test('renders header from inputJson', () => {
		render(<Header sectionsProp={inputJson} />);
	
		const linkElement = screen.getByText(/Popular Restaurants/i);
		expect(linkElement).toBeInTheDocument();
	});
	
	test('renders with no input', () => {
		const input = {
			"sections": []
		};
		render(<Header sectionsProp={input} />);
	
		const linkElement = screen.getByText(/Discovery/i);
		expect(linkElement).toBeInTheDocument();
	});
	
	test('matches snapshot', () => {
		const tree = renderer.create(<Header sectionsProp={inputJson} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});