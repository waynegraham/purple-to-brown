// import DarkmodeSelector from './DarkmodeSelector';
import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";

function Navigation() {
  return (
    <Flowbite>
      <Navbar fluid rounded>
        {/* <Navbar.Brand href="https://waynegraham.github.io/white-to-blue">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BJJ Study Guide
          </span>
        </Navbar.Brand> */}
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        
        <Navbar.Collapse>
          <Navbar.Link
            className="hover:underline md:hover:text-blue-700"
            href="https://waynegraham.github.io/white-to-blue"
          >
            White to Blue
          </Navbar.Link>
          <Navbar.Link
            className="hover:underline dark:md:hover:text-blue-200 md:text-purple-700 md:hover:text-purple-900"
            href="https://waynegraham.github.io/blue-to-purple"
          >
            Blue to Purple
          </Navbar.Link>
          <Navbar.Link
            className="hover:underline dark:md:hover:text-yellow-700 md:hover:text-yellow-900 md:text-yellow-700 bg-yellow-700 underline"
            href="https://waynegraham.github.io/purple-to-brown"
            active
          >
            Purple to Brown
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}

export default Navigation;
