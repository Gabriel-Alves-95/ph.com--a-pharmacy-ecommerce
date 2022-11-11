import * as React from 'react';
import './tabs.css';
import {
  Tabs,
  Tab,  
  Box  
} from '@mui/material';

function listTopics(topicsArray) {
    
  let topicsHTML = '';

  topicsArray.forEach(topic => {
    topicsHTML += `
      <li>
        ${topic}
      </li>
    `;        
  })

  return {
    __html: topicsHTML
  };  

}

function listParagraphs(paragraphsArray) {

  let paragraphsHTML='';     
       
  paragraphsArray.forEach( (paragraph) => {        
    paragraphsHTML += `
      <p>
        ${
          paragraph.descriptiveName
          ? `<span> ${paragraph.descriptiveName}: </span>`
          : ''
        }
        ${paragraph.text}
      </p>
    `
  })

  return {
    __html: paragraphsHTML
  };

}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>          
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Medicine info tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Usage / Instructions" {...a11yProps(1)} />
          <Tab label="Warnings" {...a11yProps(2)} />
          <Tab label="Side Effects" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel
        value={value}
        index={0}
        className="tab"
      >

        <h2>
          {props.product.name}
        </h2>

        <p>
          {props.product.description.fullDescription.text}
        </p>        
        
        <ul
          dangerouslySetInnerHTML={listTopics(props.product.description.fullDescription.topics)}
        >
        </ul>
        
      </TabPanel>

      <TabPanel
        value={value}
        index={1}
        className="tab"
      >

        <div
          dangerouslySetInnerHTML={listParagraphs(Object.values(props.product.usage))}
        >                   
        </div>        

      </TabPanel>

      <TabPanel
        value={value}
        index={2}
        className="tab"
      >

        <div
          dangerouslySetInnerHTML={listParagraphs(Object.values(props.product.warnings))}
        >                   
        </div>
        
      </TabPanel>

      <TabPanel
        value={value}
        index={3}
        className="tab"
      >
        
        <div
          dangerouslySetInnerHTML={listParagraphs(Object.values(props.product.sideEffects))}
        >                   
        </div>

      </TabPanel>

    </Box>
  );
}

export default BasicTabs;