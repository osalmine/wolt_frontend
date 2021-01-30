import { Section } from '../RestaurantSection/RestaurantSection';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Sections {
	sections: Section[]
}

interface Props {
	sectionsProp: Sections;
}

const Header: React.FC<Props> = ({ sectionsProp }) => {
	return <>
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="py-3">
			<Navbar.Brand href="/" className="navbar-brand-text">Discovery</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto navbar-center navbar-custom-text">
					{sectionsProp.sections.map((section, i) => 
						<Nav.Link key={i} href={'#' + section.title.replace(/ /g,'')}>{section.title}</Nav.Link>)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</>;
};

export default Header;