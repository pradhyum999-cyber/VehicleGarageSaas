import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Button,
  Hidden,
  Box,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import ZoomImage from "../../../shared/components/ZoomImage";
import WaveBorder from "../../../shared/components/WaveBorder";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  /* ========== Subscribe Field & Button ========== */
  subscribeField: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  subscribeButton: {
    backgroundColor: "#fff",
    color: theme.palette.secondary.main,
    textTransform: "none",
    borderRadius: 20,
    fontWeight: "bold",
    padding: theme.spacing(1, 3),
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },
  /* ========== LinkedIn Icon & Animation ========== */
  linkedInLink: {
    textDecoration: "none",
    display: "inline-block",
    marginLeft: theme.spacing(2), // Spacing to the right of the SUBSCRIBE button
  },
  linkedInIconAnimated: {
    color: "#003087", // Darker shade for better visibility
    fontSize: "3rem",
    animation: "$bounce 2s infinite",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-8px)",
    },
    "60%": {
      transform: "translateY(-4px)",
    },
  },
  /* ========== Text Colors ========== */
  title: {
    color: theme.palette.common.white,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.8)",
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  
  // Added state for email and message
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Subscribe function that sends email to Firebase Cloud Function endpoint
  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch(
        "https://us-central1-vehicle-garage-saas.cloudfunctions.net/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setMessage("Successfully subscribed! Thank you.");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <div className={classNames(classes.containerFix, "container")}>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                className="row"
              >
                {/* Left Section: Title, Description, and Subscription Form */}
                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    height="100%"
                  >
                    <Box mb={4}>
                      <Typography
                        variant={isWidthUpLg ? "h3" : "h4"}
                        className={classes.title}
                      >
                        Claim Your Free Product Before It’s Gone!
                      </Typography>
                    </Box>
                    <Typography
                      variant={isWidthUpLg ? "h6" : "body1"}
                      className={classes.subtitle}
                      paragraph
                    >
                      Subscribe now for exclusive launch updates and be among the
                      first to know when we go live. This complimentary offer is
                      only available for a short time—don’t let it slip away.
                      Enter your email below and secure your spot before it’s too
                      late!
                    </Typography>

                    {/* Subscription Field & Button, plus LinkedIn Icon */}
                    <Box className={classes.buttonContainer}>
                      <TextField
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        className={classes.subscribeField}
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        InputLabelProps={{
                          style: { color: "rgba(255, 255, 255, 0.8)" },
                        }}
                        inputProps={{
                          style: { color: "#fff" },
                        }}
                      />
                      <Button
                        variant="contained"
                        className={classes.subscribeButton}
                        onClick={handleSubscribe}
                      >
                        SUBSCRIBE
                      </Button>
                      <a
                        href="https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.linkedInLink}
                      >
                        <LinkedInIcon className={classes.linkedInIconAnimated} />
                      </a>
                    </Box>
                    {message && (
                      <Typography
                        variant="body2"
                        style={{ color: "#fff", marginTop: "8px" }}
                      >
                        {message}
                      </Typography>
                    )}
                  </Box>
                </Grid>

                {/* Right Section: Image */}
                <Hidden mdDown>
                  <Grid item md={6}>
                    <ZoomImage
                      src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.png`}
                      className={classes.image}
                      alt="Product launch illustration"
                    />
                  </Grid>
                </Hidden>
              </Box>
            </div>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
