import { useEffect, Fragment } from 'react';
import { Chrono } from 'react-chrono';
import { Heading, Box, Text, Badge } from '@chakra-ui/react';
import { Navigation, Footer } from 'personal-shared-layout';


const content = [
  <Box as="section" m={1} key="kurniawan-mobile" aria-labelledby="kurniawan-heading">
    <Heading id="kurniawan-heading" fontSize="2xl" color={"#faf9ff"}>
      PT. Samamaju Prima
      <Badge fontSize="0.6em" colorScheme="purple">Software Engineer</Badge>
    </Heading>
    <Text color={"#faf9ff"} opacity={0.5} fontWeight="bold">by Kurniawan Group</Text>
    <Text color={"#faf9ff"} my={4}>November 2023 - Present</Text>
    <Text fontSize="lg" fontWeight="bold" color={"#faf9ff"} my={4}>The responsibilities include:</Text>
    <ul style={{ marginLeft: '20px', color: 'white' }}>
      <li>Design, Build, Testing and Maintain software for internal company used.</li>
      <li>Using programming language PHP and MySQL.</li>
      <li>Using internal company Model View Controller (MVC) framework engine call Ingrid.</li>
    </ul>
  </Box>,
  <Box as="section" m={1} key="nocode-mobile" aria-labelledby="nocode-heading">
    <Heading id="nocode-heading" fontSize="2xl" color={"#faf9ff"}>
      Nocode Magician
      <Badge fontSize="0.6em" colorScheme="purple">Front-End Developer</Badge>
    </Heading>
    <Text color={"#faf9ff"} opacity={0.5} fontWeight="bold">by Pipeline Marketing Technology</Text>
    <Text color={"#faf9ff"} my={4}>March 2023 - December 2023</Text>
    <Text fontSize="lg" fontWeight="bold" color={"#faf9ff"} my={4}>The responsibilities include:</Text>
    <ul style={{ marginLeft: '20px', color: 'white' }}>
      <li>Building React.js Web application that relevant with payment integrations.</li>
      <li>Implement application that based on user login, OTP validation for user login.</li>
      <li>Build Dashboard Web Application that represent all the data visualization.</li>
      <li>Contribute with Wordpress application development with complex task using Oxygen plugin.</li>
    </ul>
  </Box>,
  <Box as="section" m={1} key="yamali-tb-mobile" aria-labelledby="yamali-heading">
    <Heading id="yamali-heading" fontSize="2xl" color={"#faf9ff"}>
      YAMALI TB
      <Badge fontSize="0.6em" colorScheme="purple">IT & Database</Badge>
    </Heading>
    <Text color={"#faf9ff"} opacity={0.5} fontWeight="bold">by Bakrie Center Foundation</Text>
    <Text color={"#faf9ff"} my={4}>August 2022 - December 2022</Text>
    <Text fontSize="lg" fontWeight="bold" color={"#faf9ff"} my={4}>The responsibilities include:</Text>
    <ul style={{ marginLeft: '20px', color: 'white' }}>
      <li>Building the Interface of the Content Management System Dashboard of YAMALI TB Using React.js.</li>
      <li>Manage the content website of YAMALI TB, such as adding content, removing content, editing content, and adding, editing, deleting Tuberculosis disease case for the visualization from the YAMALI TB Website.</li>
      <li>Help Working with Data representation & Data management using MySQL and PHP programming languages.</li>
    </ul>
  </Box>,
  <Box as="section" m={1} key="bangkit-mobile" aria-labelledby="bangkit-heading">
    <Heading id="bangkit-heading" fontSize="2xl" color={"#faf9ff"}>
      Bangkit Academy
      <Badge fontSize="0.6em" colorScheme="purple">ML Path Cohort</Badge>
    </Heading>
    <Text color={"#faf9ff"} opacity={0.5} fontWeight="bold">by Google, GoTo, Traveloka</Text>
    <Text color={"#faf9ff"} my={4}>February 2022 - July 2022</Text>
    <Text fontSize="lg" fontWeight="bold" color={"#faf9ff"} my={4}>The responsibilities include:</Text>
    <ul style={{ marginLeft: '20px', color: 'white' }}>
      <li>Learn the key concepts and applications of AI to solve a wide range of ML problems with these specializations: Google IT Automation with Python, Google Data Analytics, Math for Machine Learning, Machine Learning Specialization, DeepLearning.AI TensorFlow Developer Professional Certificate, DeepLearning.AI Tensorflow Data and Deployment.</li>
    </ul>
  </Box>,
];

function Experience() {
  const itemsTimeline = [
    { title: "November 2023 - Present" },
    { title: "March 2023 - December 2023" },
    { title: "August 2022 - December 2022" },
    { title: "February 2022 - July 2022" },
  ];

  useEffect(() => {
    // Remove toolbar
    const timeLineComponent = document.querySelector('.ToolbarWrapper-sc-cif21b-6');
    if (timeLineComponent) {
      timeLineComponent.remove();
    }

    // Remove aria-expanded from timeline content divs
    const timelineContentDivs = document.querySelectorAll('.TimelineContentDetailsWrapper-sc-d7qjm1-7');
    timelineContentDivs.forEach((div) => {
      div.removeAttribute('aria-expanded');
    });
  }, []);

  return (
    <Fragment>
      <Navigation />

      <Box
        as="section"
        id="about"
        py={20}
      >

        <Box className='stars'></Box>
        <Box className='stars2'></Box>
        <Box className='stars3'></Box>

        <Box py={{ base: 8, md: 12 }} marginBottom={20} borderBottomWidth={1} borderColor="#536189">
          <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="#faf9ff" mb={4}>
              Experiences
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="#faf9ff" maxW="2xl">
              Here are some of my past experiences. I always track and evaluate my progress.
            </Text>
          </Box>
        </Box>

        <Chrono
          parseDetailsAsHTML
          items={itemsTimeline}
          theme={{
            primary: "violet",
            secondary: "#292b37",
            cardBgColor: "#292b37",
            titleColor: "#bd93f9",
            cardTitleColor: "violet",
            toolbarBgColor: "#292b37",
            toolbarBtnBgColor: "violet",
            toolbarTextColor: "violet",
            titleColorActive: "violet",
          }}
          mode="VERTICAL_ALTERNATING"
          itemWidth={150}
        >
          {content}
        </Chrono>

      </Box>

      <Footer />

    </Fragment>
  );
}

export default Experience;