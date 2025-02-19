import React from "react";
import { Grid, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MeassageIcon from "@mui/icons-material/Message";
import BarChartIcon from "@mui/icons-material/BarChart";
import ComputerIcon from "@mui/icons-material/Computer";
import CloudIcon from "@mui/icons-material/Cloud";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Invoice Generation",
    text:
      "Generate and send professional invoices instantly. Track payments and manage cash flow efficiently.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Sales & Cost Charts",
    text:
      "Visualize your monthly sales and expenses with intuitive charts to make data-driven decisions.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "WhatsApp Integration",
    text:
      "Send automated service reminders and promotional messages directly via WhatsApp—no external app required.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Appointment & Service Management",
    text:
      "Schedule repairs and maintenance tasks easily with automated reminders to keep your operations running smoothly.",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "Inventory Tracking",
    text:
      "Monitor spare parts and stock levels with real-time alerts to prevent service delays.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "Cost-Effective Solution",
    text:
      "Enjoy a suite of powerful features at a low cost, designed specifically for small to mid-size garages in India.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
