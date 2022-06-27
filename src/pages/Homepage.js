import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image,
  Heading,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import React from "react";
import background from "../assets/background.jpg";
import showcase from "../assets/showcase.jpg";
import showcase2 from '../assets/show3.png'

const Homepage = () => {
  return (
    <div>
      <div className="absolute  text-white right-4 p-4">
        <Breadcrumb>
          <BreadcrumbItem>
          <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/quiz">Quiz</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink >Login</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <img className="img" src={showcase} />
      </div>

      <div className="absolute top-20  md:top-2/5 sm:top-1/4 left-1/2  text-white text-2xl">
        <Heading as="h1" size="4xl">
          Welcome To Code Prep
        </Heading>
      </div>
    </div>
  );
};

export default Homepage;
