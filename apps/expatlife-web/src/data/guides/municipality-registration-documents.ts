/**
 * Documents typically required or requested for municipality registration (BRP) in the Netherlands.
 * Used by the municipality registration guide and can be referenced by document-readiness tools.
 * Requirements vary by municipality, immigration status, and household; some documents may need
 * legalisation, apostille, or certified translation (see IND and municipality guidance).
 */

export type MunicipalityRegistrationDocument = {
  id: string;
  label: string;
  description?: string;
  whenRequired?: string;
  notes?: string[];
};

export const MUNICIPALITY_REGISTRATION_DOCUMENTS: MunicipalityRegistrationDocument[] = [
  {
    id: "passport-id",
    label: "Valid passport or ID",
    description: "Identity document (passport or national ID card).",
    whenRequired: "Always",
    notes: ["Must be valid; some municipalities require originals only."],
  },
  {
    id: "proof-of-address",
    label: "Proof of address",
    description: "Rental contract, housing confirmation, or proof you live at the address.",
    whenRequired: "Usually",
    notes: ["Rental agreement (huurcontract) or signed statement from the main occupant/landlord."],
  },
  {
    id: "birth-certificate",
    label: "Birth certificate",
    description: "Official birth certificate.",
    whenRequired: "Sometimes",
    notes: ["May require legalisation or apostille and certified translation (e.g. to Dutch or English). IND and municipality specify requirements."],
  },
  {
    id: "marriage-certificate",
    label: "Marriage certificate",
    description: "If applicable (e.g. registering with a partner).",
    whenRequired: "If applicable",
    notes: ["May require legalisation or apostille and certified translation."],
  },
  {
    id: "residence-permit-visa",
    label: "Residence permit or visa",
    description: "For non-EU/EEA nationals: valid residence permit or visa.",
    whenRequired: "Non-EU/EEA nationals",
    notes: ["IND-issued document; collect if not yet in hand before registration where possible."],
  },
];

export const DOCUMENT_REQUIREMENTS_NOTE =
  "Some documents may require legalisation, apostille, or certified translation. Check your municipality and the IND for the latest requirements.";
