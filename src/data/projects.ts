import { FeaturedProject } from "@/types";

export const projects: FeaturedProject[] = [
  {
    title: "Parts Cannibalization Workflow",
    description:
      "A SuiteFlow approval workflow that governs how parts are stripped from one vehicle and reallocated to another, replacing an informal, hard-to-audit process.",
    technologies: ["NetSuite", "SuiteFlow", "Custom Records"],
    achievements: [
      "Introduced a clear, multi-stage approval chain",
      "Improved traceability of part movements between vehicles",
      "Reduced disputes over part allocation between branches",
    ],
  },
  {
    title: "Vehicle Inventory Accuracy",
    description:
      "Workflow and process changes that tightened up how vehicle inventory is monitored and reconciled across branches.",
    technologies: ["NetSuite", "SuiteFlow", "Saved Searches"],
    achievements: [
      "Enhanced real-time inventory monitoring",
      "Automated approval steps that were previously manual",
      "Reduced variance between system and physical vehicle counts",
    ],
  },
  {
    title: "Parts Inventory Accuracy",
    description:
      "A validation workflow for parts inventory transactions designed to catch data entry errors before they affect stock records.",
    technologies: ["NetSuite", "SuiteFlow", "Master Data Management"],
    achievements: [
      "Improved inventory validation at the point of entry",
      "Reduced manual intervention through automation",
      "Fewer downstream corrections needed in parts records",
    ],
  },
  {
    title: "Payment Terms Approval Workflow",
    description:
      "An approval workflow for customer and vendor payment terms changes, giving Finance an auditable sign-off process.",
    technologies: ["NetSuite", "SuiteFlow", "Role Management"],
    achievements: [
      "Configured a structured approval workflow for payment terms",
      "Improved the finance approval process end to end",
      "Reduced unauthorized changes to customer/vendor terms",
    ],
  },
  {
    title: "CSV Mass Upload Automation",
    description:
      "A repeatable CSV mass-upload process used to create and update large batches of master data — vehicles, customers, vendors, employees, and items — accurately and quickly.",
    technologies: ["NetSuite", "CSV Import", "Master Data Management"],
    achievements: [
      "Standardized templates for recurring mass uploads",
      "Cut manual data-entry time for bulk record updates",
      "Maintained data accuracy across large-volume uploads",
    ],
  },
];
