import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    company: "Global Autodistribution Inc.",
    role: "Application Support – NetSuite Administrator",
    period: "December 2024 – Present",
    location: "Bakilid, Mandaue City",
    responsibilities: [
      "Provide daily NetSuite application support across departments.",
      "Manage and maintain NetSuite master data.",
      "Create and modify Vehicle Information, Customers, Vendors, Employees, Items, Transactions, and other NetSuite records.",
      "Perform CSV mass uploads for creating and updating master data.",
      "Troubleshoot NetSuite issues and provide direct user support.",
      "Coordinate with different departments to improve ERP processes.",
      "Ensure data accuracy and system integrity across the platform.",
    ],
    tags: ["SuiteFlow Workflow Development", "Approval Automation", "NetSuite Administration", "Business Process Improvement"],
    projects: [
      {
        title: "Parts Cannibalization",
        description:
          "Developed and implemented NetSuite workflow approvals using SuiteFlow to control how parts are reallocated between vehicles.",
        highlights: ["Built multi-stage SuiteFlow approval", "Improved tracking and approval process"],
      },
      {
        title: "Vehicle Inventory Accuracy",
        description:
          "Enhanced inventory monitoring for vehicle stock across branches to reduce discrepancies between physical and system counts.",
        highlights: ["Enhanced inventory monitoring", "Automated approval workflows"],
      },
      {
        title: "Parts Inventory Accuracy",
        description:
          "Improved the validation process for parts inventory movements, reducing reliance on manual checks.",
        highlights: ["Improved inventory validation process", "Reduced manual intervention through automation"],
      },
      {
        title: "Payment Terms",
        description:
          "Configured approval workflows for payment terms changes, giving Finance a clear, auditable sign-off chain.",
        highlights: ["Configured approval workflows for payment terms", "Improved finance approval process"],
      },
    ],
  },
  {
    company: "Gaisano Country Mall",
    role: "IT Support",
    period: "November 2024",
    location: "Banilad, Cebu City",
    responsibilities: [
      "Provided technical support for hardware and software issues.",
      "Performed network troubleshooting for connectivity issues.",
      "Handled printer installation and maintenance.",
      "Carried out Windows installation and configuration.",
      "Supported user accounts across the organization.",
      "Assisted with basic server and network maintenance.",
    ],
    tags: ["IT Support", "Networking", "Windows Administration", "Hardware Maintenance"],
  },
];
