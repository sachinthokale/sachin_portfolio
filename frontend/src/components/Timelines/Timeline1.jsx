import React from "react";

import {
  Timeline,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
} from "@mui/lab";
import { Event } from "@mui/icons-material";
import { Typography } from "@mui/material";
import "./Timeline.css";

const Timeline1 = ({ timeline }) => {
  console.log(timeline);
  return (
    <div className="timeline1">
      <Timeline position="alternate">
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector>
                <TimelineDot>
                  <Event />
                </TimelineDot>
              </TimelineConnector>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">
                {" "}
                Title :{" "}
                <span style={{ color: "gray", fontSize: "1rem" }}>
                  {item.title}
                </span>{" "}
              </Typography>
              <Typography variant="h6">
                Desc : :{" "}
                <span style={{ color: "gray", fontSize: "1rem" }}>
                  {item.description}
                </span>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Timeline1;
