<div align="center">
  <br />
    <a href="https://cse-insights.vercel.app/" target="_blank">
      <img src="https://github.com/iAryanK/CSE-Insights/blob/main/public/assets/images/screenshot.png?raw=true" alt="Project Banner">
    </a>
  <br />

  <h3 align="center">Visit the website <a href="https://cse-insights.vercel.app/" target="_blank"><b>CSE-Insights</b></a> deployed on vercel!</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Details](#details)

## <a name="introduction">🤖 Introduction</a>

CSE-Insights is a Next.JS 14 Full Stack application that highlights the key features of Next.JS along with a comprehensive CRUD post sharing system, utilizing mongoDB database and implementing NextAuth authentication.

This application is inspired from the application Promptopia by the NextJS crash course by javascriptmastery, who taught me the importance of NextJS and the core concepts of this New ReactJS framework.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.JS 14
- MongoDB database
- NextAuth Authentication
- Tailwind CSS

## <a name="features">🔋 Features</a>

In addition to the features taught by adrianhajdin, I self implemented some of the following features -
👉 **Duration of a post**: Users can now see how much duration it has been since the post was created.

👉 **Title for each post**: A title field for each post has been added which enables the users to take a look at the post and understand what it is going to speak about.

Apart from these, there are also some design and code changes that I have made to make it look more beautiful.

Other features implemented are as follows -
👉 **Discover and Share Deep CSE-Insights**: Allow users to Unlock the Power of Computer Science & Engineering • CSE Insights - A Gateway to Practical Tips, Proven Strategies, and College life stories.

👉 **Edit and Delete Created Posts**: Users have the ability to edit their created posts at any time and delete them when needed.

👉 **Profile Page**: Each user gets a dedicated profile page showcasing all the posts they've created, providing an overview of their contributions.

👉 **View Other People's Profiles**: Users can explore the profiles of other creators to view the posts they've shared, fostering a sense of community.

👉 **Copy to Clipboard**: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the insights for their use.

👉 **Search posts by Specific Tag, username as well as content**: Allow users to search for posts based on their preference.

👉 **Google Authentication using NextAuth**: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

👉 **Responsive Website**: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/iAryanK/CSE-Insights.git
cd CSE_Insights
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="details">🕸️ Details</a>

<details>
<summary><code>Next JS 14</code></summary>

```
Official documentation of ReactJS says never to use plain ReactJS anymore.
It recommends to build new applications by choosing one of the frameworks of ReactJS and the first framework they recommend is NextJS.

This new piece of technology as gained a lot of popularity. Companies such as Netflix, Notion, Nike, twitch, etc. has adopted NextJS.

NextJS 13 -> major update of NextJS with experimental app router
NextJS 14 -> May 4th, 2023, NextJS app router becomes stable
```

</details>

<details>
<summary><code>Why NEXT JS?</code></summary>

```
😀 simplifies development process
😀 optimizes web applications
😀 Server side and client side rendering
😀 Inbuilt Search Engine Optimization
😀 File and folder based routing
😀 FullStack application creating capability
😀 Automatic code splitting

And at the end of the day, it is just an extention of ReactJs.😀
```

</details>

<details>
<summary><code>Core Concepts</code></summary>

```
Starting from
npx create-next-app@latest

Following are some of the concepts of NextJS -
➡️ File and Folder based routing
➡️ Client and server components
➡️ Routing and special NextJS files
➡️ Data fetching Strategies
➡️ NextJs API routes
➡️ Static and Dynamic Metadata
```

<details>
<summary><code>Project CSE-Insights</code></summary>

```
The development process will be updated here soon...
```

</details>

<br />

#
