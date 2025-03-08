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

const contentBlog1 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Revolutionize Your Garage Communication with Our Built-In WhatsApp Integration
    </Typography>
    <Typography paragraph>
      In today’s fast-paced service industry, staying connected with your customers is crucial. Our built-in WhatsApp integration is designed specifically for mid-size garages, enabling you to send timely service reminders and updates without relying on any external app. This seamless communication tool not only streamlines your operations but also boosts customer satisfaction and retention.
    </Typography>
    <Typography variant="h6" paragraph>
      Seamless, Automated Messaging
    </Typography>
    <Typography paragraph>
      Our WhatsApp integration is fully embedded within the SaaS platform, meaning you don’t have to juggle multiple applications to communicate with your customers. With just a few clicks, you can automate service reminders, appointment confirmations, and promotional messages directly through WhatsApp. This level of automation ensures that your customers always receive relevant updates on time, reducing no-shows and keeping them engaged with your services.
    </Typography>
    <Typography variant="h6" paragraph>
      Easy Setup and Customization
    </Typography>
    <Typography paragraph>
      Setting up our WhatsApp integration is straightforward. The intuitive dashboard allows you to customize messages based on service type, customer history, or even special events. Whether it’s a friendly reminder about an upcoming maintenance appointment or an exclusive discount offer, you can tailor your messages to reflect your brand’s voice. This personalization not only enhances customer experience but also builds trust and loyalty over time.
    </Typography>
    <Typography variant="h6" paragraph>
      Boosting Efficiency and Reducing Costs
    </Typography>
    <Typography paragraph>
      By eliminating the need for an external communication app, our built-in solution reduces both operational complexity and costs. You can manage all customer interactions from one centralized platform, saving valuable time that can be redirected towards core business functions. The integration is designed to be cost-effective, making it an ideal solution for mid-size garages looking to adopt digital tools without incurring heavy expenses.
    </Typography>
    <Typography variant="h6" paragraph>
      Real-Time Updates for Enhanced Customer Engagement
    </Typography>
    <Typography paragraph>
      One of the standout features of our WhatsApp integration is real-time communication. Customers appreciate receiving immediate updates about service progress, vehicle readiness, or any changes in their appointment schedule. This immediacy not only improves transparency but also allows you to quickly address any customer concerns, thereby enhancing the overall service experience.
    </Typography>
    <Typography variant="h6" paragraph>
      Optimized for SEO and User Experience
    </Typography>
    <Typography paragraph>
      For garage owners searching for efficient communication solutions, our built-in WhatsApp integration is a game-changer. It is optimized to help your business stand out in search results with relevant keywords such as "WhatsApp integration for garages," "automated service reminders," and "SaaS garage management." This ensures that your online presence is strong and easily discoverable by potential customers looking for streamlined and reliable garage management solutions.
    </Typography>
    <Typography variant="h6" paragraph>
      Final Thoughts
    </Typography>
    <Typography paragraph>
      Our built-in WhatsApp integration transforms how mid-size garages communicate with their customers. By automating service reminders and updates directly through WhatsApp, you can significantly improve customer engagement, reduce administrative overhead, and foster long-lasting relationships. Embrace a smarter way to manage customer interactions and take your garage operations to the next level—all without the hassle of external apps.
    </Typography>
    <Typography paragraph>
      Ready to experience seamless communication? Get started with our SaaS platform today and revolutionize your garage management!
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
    content: contentBlog1,
  },
  // {
  //   title: "Post 3",
  //   id: 3,
  //   date: 1577391600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost3.jpg`,
  //   snippet:
  //     "Explore how our cost-effective solution offers inventory tracking, expense monitoring, and automated reports for busy garages.",
  //   content: content,
  // },
  // {
  //   title: "Post 4",
  //   id: 4,
  //   date: 1572281600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost4.jpg`,
  //   snippet:
  //     "See how real-time charts and analytics help you make data-driven decisions, improving profits and customer satisfaction.",
  //   content: content,
  // },
  // {
  //   title: "Post 5",
  //   id: 5,
  //   date: 1573281600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost5.jpg`,
  //   snippet:
  //     "Find out how our appointment scheduling and service management system keeps your garage organized and customers happy.",
  //   content: content,
  // },
  // {
  //   title: "Post 6",
  //   id: 6,
  //   date: 1575281600,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/blogPost6.jpg`,
  //   snippet:
  //     "Join us on our roadmap as we add more features like advanced analytics, loyalty programs, and multi-location support.",
  //   content: content,
  // },
];

export default posts;
