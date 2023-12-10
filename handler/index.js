// const express = require("express");
// const path = require("path");

// const port = 4000; // different from local react server
// const BASE_RESOURCE_API_URL = "../.next/serverless/pages/api";

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use("/_next/static", express.static(path.resolve(__dirname, "../.next/static")));
// app.use("/", express.static(path.resolve(__dirname, "../public")));
// app.get("/", (req, res) => require(`${baseResourceURL}/index.js`).render(req, res));

// // ---
// //   User ->> FE: Start Application
// //   FE ->> BE: Initiate Application
// //   BE ->> FE: Initiate Complete
// app.post('/api/admin/initiate', require(`${BASE_RESOURCE_API_URL}/admin/initiate.js`).default);

// // ---
// //   User ->> FE: Fill Business Details & Loan amount
// //   User ->> FE: Select Accounting provider

// // ---
// //   User ->> FE: Request Balance Sheet
// //   FE ->> BE: Fetch Balance Sheet
// //   BE ->> ASP: Request Balance Sheet
// //   ASP ->> BE: Return Balance Sheet
// //   BE ->> FE: Return Details for Review

// app.get('/api/loan', require(`${BASE_RESOURCE_API_URL}/loan/index.js`).default); // get loan status - balance status / review
// app.post('/api/loan', require(`${BASE_RESOURCE_API_URL}/loan/index.js`).default); // submit loan application

// app.post('/api/loan/apply', require(`${BASE_RESOURCE_API_URL}/loan/apply.js`).default);
// app.post('/api/loan/apply', require(`${BASE_RESOURCE_API_URL}/loan/apply.js`).default);


// //   User --> FE: Review Complete
// //   User ->> FE: Submit Application


// //   FE ->> BE: Request outcome
// //   BE ->> BE: Apply Rules to summarise application
// //   BE ->> DE: Request Decision
// //   DE ->> BE: Returns outcome

// //   BE ->> FE: Application Result
// //   FE ->> User: Final Outcome


// app.post('/api/loan/decision', require(`${BASE_RESOURCE_API_URL}/loan/decision.js`).default);


// app.listen(port, () => { console.log(`Server is running on port ${port}`); });