import { lazy } from "react";

export const chunk = (name) => lazy(() => import(`pages/${name}`));
