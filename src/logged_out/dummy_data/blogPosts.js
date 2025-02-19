import React, { Fragment } from "react";
import { Typography } from "@mui/material";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Introducing Our Mid-Size Garage SaaS
    </Typography>
    <Typography paragraph>
      Welcome to our all-in-one platform tailored for mid-size garages in India.
      From invoice generation and real-time sales tracking to sending service
      reminders directly through WhatsApp, our goal is to streamline your
      day-to-day operations without the need for external apps.
    </Typography>
    <Typography paragraph>
      Our solution offers a robust dashboard where you can quickly see charts
      for your monthly sales, monitor expenses, and track overall performance.
      Plus, we include an easy-to-use interface for maintaining service
      histories, managing spare parts inventory, and scheduling appointments.
    </Typography>
    <Typography paragraph>
      With the growing demand for digital solutions, especially in smaller
      garages, we’ve focused on keeping costs low while providing powerful
      features. Whether it’s sending automated reminders for periodic servicing
      or generating comprehensive reports to analyze profit margins, our SaaS
      empowers you to make informed decisions every step of the way.
    </Typography>
    <Typography variant="h6" paragraph>
      Core Features
    </Typography>
    <Typography paragraph>
      1. <strong>Invoice Generation:</strong> Create and send professional
      invoices instantly. Keep track of paid and pending amounts to manage your
      cash flow effectively.
    </Typography>
    <Typography paragraph>
      2. <strong>Sales & Cost Charts:</strong> Visualize your daily, weekly, or
      monthly revenues and expenses to spot trends and optimize operations.
    </Typography>
    <Typography paragraph>
      3. <strong>WhatsApp Integration:</strong> Notify customers about service
      updates, reminders, and promotional offers directly on WhatsApp—no
      external apps required.
    </Typography>
    <Typography paragraph>
      4. <strong>Appointment & Service Management:</strong> Schedule repairs,
      maintenance tasks, and auto-reminders, ensuring your team and customers
      stay informed.
    </Typography>
    <Typography paragraph>
      5. <strong>Inventory & Spare Parts Tracking:</strong> Maintain stock
      levels, get low-stock alerts, and avoid unnecessary delays in servicing
      vehicles.
    </Typography>
    <Typography paragraph>
      6. <strong>Cost-Effective Solutions:</strong> Designed with small to
      mid-size garages in mind, we keep pricing affordable while offering the
      essential features you need to thrive.
    </Typography>
    <Typography paragraph>
      Whether you’re looking to expand your customer base or simply want a
      better handle on your garage’s operations, our SaaS platform has you
      covered. Stay tuned for more updates and new features as we continue to
      enhance the system based on user feedback.
    </Typography>
    <Typography variant="h6" paragraph>
      Looking Ahead
    </Typography>
    <Typography paragraph>
      Our roadmap includes advanced analytics, loyalty program integrations,
      multi-location management, and much more. We aim to help you build a
      future-ready garage that not only serves your existing customers
      efficiently but also attracts new business with minimal effort.
    </Typography>
    <Typography paragraph>
      Join us in revolutionizing how mid-size garages operate—hassle-free,
      cost-effective, and completely tech-enabled.
    </Typography>
  </Fragment>
);

const posts = [
  {
    title: "Post 1",
    id: 1,
    date: 1576281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost1.jpg`,
    snippet:
      "Discover how our mid-size garage SaaS can streamline invoice generation, sales tracking, and customer communications—all at a low cost.",
    content: content,
  },
  {
    title: "Post 2",
    id: 2,
    date: 1576391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost2.jpg`,
    snippet:
      "Learn about our built-in WhatsApp integration, allowing you to send service reminders and updates without any external app.",
    content: content,
  },
  {
    title: "Post 3",
    id: 3,
    date: 1577391600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
    snippet:
      "Explore how our cost-effective solution offers inventory tracking, expense monitoring, and automated reports for busy garages.",
    content: content,
  },
  {
    title: "Post 4",
    id: 4,
    date: 1572281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
    snippet:
      "See how real-time charts and analytics help you make data-driven decisions, improving profits and customer satisfaction.",
    content: content,
  },
  {
    title: "Post 5",
    id: 5,
    date: 1573281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
    snippet:
      "Find out how our appointment scheduling and service management system keeps your garage organized and customers happy.",
    content: content,
  },
  {
    title: "Post 6",
    id: 6,
    date: 1575281600,
    src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost6.jpg`,
    snippet:
      "Join us on our roadmap as we add more features like advanced analytics, loyalty programs, and multi-location support.",
    content: content,
  },
];

export default posts;
