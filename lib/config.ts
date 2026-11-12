export const config = {
  "name": "GovFlow",
  "tag": "Public services, simplified.",
  "sector": "Civic infrastructure",
  "title": "One clear path to better business services.",
  "subtitle": "Applications, approvals and public-service operations brought together in one intelligent workspace.",
  "accent": "#315ee8",
  "dark": "#101b3a",
  "light": "#eff3ff",
  "icon": "Landmark",
  "nav": [
    "Applications",
    "Services",
    "Insights"
  ],
  "metric": [
    "Applications",
    "In review",
    "Approved",
    "Completion rate"
  ],
  "columns": [
    "Business",
    "Service",
    "Location",
    "Status"
  ],
  "kinds": [
    "Business Premises Permit",
    "SME Registration Support",
    "Tax Clearance Request"
  ],
  "states": [
    "Submitted",
    "Under Review",
    "Needs Correction",
    "Approved",
    "Rejected"
  ],
  "fields": [
    "applicant",
    "business",
    "service",
    "location"
  ],
  "labels": [
    "Applicant name",
    "Business name",
    "Service requested",
    "State / FCT"
  ],
  "default": [
    "Amina Bello",
    "Arewa Foods Ltd",
    "Business Premises Permit",
    "Kano"
  ],
  "seed": [
    [
      "Amina Bello",
      "Arewa Foods Ltd",
      "Business Premises Permit",
      "Kano",
      "Under Review"
    ],
    [
      "Tunde Adeyemi",
      "GreenRoute Mobility",
      "SME Registration Support",
      "Lagos",
      "Approved"
    ],
    [
      "Zainab Umar",
      "ZeeCare Pharmacy",
      "Business Premises Permit",
      "Abuja FCT",
      "Submitted"
    ],
    [
      "Emeka Nwosu",
      "Nwosu Engineering",
      "Tax Clearance Request",
      "Enugu",
      "Needs Correction"
    ],
    [
      "Bisi Lawal",
      "Oakline Fashion",
      "SME Registration Support",
      "Ibadan",
      "Approved"
    ]
  ],
  "action": "Submit application",
  "headline": "Application register",
  "topic": "Business Services",
  "workflows": [
    "Applicant submissions and validation",
    "Structured multi-stage review",
    "Officer approvals and decisions",
    "Records, history and audit trail"
  ],
  "tech": "Next.js · TypeScript · PostgreSQL · Clerk-ready RBAC · REST API",
  "slug": "govflow"
} as const;
