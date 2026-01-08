import { REGLEMENT_CHARDONNE } from "./reglementChardonne";
import { REGLEMENT_CORSIER } from "./reglementCorsier";
import { REGLEMENT_CORSEAUX } from "./reglementCorseaux";
import { REGLEMENT_PACOM_CORSEAUX } from "./reglementPAComCorseaux";
import { REGLEMENT_JONGNY } from "./reglementJongny";
import { REGLEMENT_EMOLUMENTS } from "./reglementEmoluments";

export const TOUS_LES_REGLEMENTS = [
  ...REGLEMENT_CHARDONNE,
  ...REGLEMENT_CORSIER,
  ...REGLEMENT_CORSEAUX,
  ...REGLEMENT_PACOM_CORSEAUX,
  ...REGLEMENT_JONGNY,
  ...REGLEMENT_EMOLUMENTS,
];