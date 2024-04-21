import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import "./accordion.css";
import { useState } from "react";

export default function AccordionTransition({ accordionData }) {
  const [expanded, setExpanded] = useState({});

  const handleExpansion = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        <p className="title-accordion">FAQ's</p>
        {accordionData.map((item, index) => (
          <Accordion
            expanded={expanded[index]}
            onChange={() => handleExpansion(index)}
            // slots={{ transition: Fade }}
            // slotProps={{ transition: { timeout: 400 } }}
            // sx={{
            //   "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            //   "& .MuiAccordionDetails-root": {
            //     display: expanded ? "block" : "none",
            //   },
            // }}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color: "var(--css-primary)"}}/>}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography >{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
