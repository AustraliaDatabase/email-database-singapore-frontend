import { JOB_TITLE_TYPES, COUNTRY_TYPES } from "../../enums";

const getBadgeInfo: {
    [key: string]: {
        category: string;
        color: string;
        background: string;
        fill: boolean;
    };
} = {
    [JOB_TITLE_TYPES.DIRECTOR_LEVEL_AND_FINANCE]: {
        category: "Director Level & Finance",
        color: "#212529",
        background: "#FEC20A",
        fill: true,
    },
    [JOB_TITLE_TYPES.MANAGER_LEVEL_AND_FINANCE]: {
        category: "C-Level & Director Level & Manager Level",
        color: "white",
        background: "#5DC163",
        fill: true,
    },
    [JOB_TITLE_TYPES.FINANCE]: {
        category: "Finance",
        color: "white",
        background: "#C4D032",
        fill: true,
    },
    [JOB_TITLE_TYPES.C_LEVEL]: {
        category: "C-Level",
        color: "white",
        background: "#00A2E2",
        fill: true,
    },
    [JOB_TITLE_TYPES.DIRECTOR_LEVEL]: {
        category: "C-Level",
        color: "white",
        background: "#56707C",
        fill: true,
    },
    [JOB_TITLE_TYPES.MANAGER_LEVEL]: {
        category: "Manager Level",
        color: "white",
        background: "#DF376F",
        fill: true,
    },
    [JOB_TITLE_TYPES.OTHER]: {
        category: "Other",
        color: "white",
        background: "#7752BB",
        fill: true,
    },
    [JOB_TITLE_TYPES.VICE_PRESIDENT]: {
        category: "Vice President",
        color: "white",
        background: "#0ECCF0",
        fill: true,
    },
    [JOB_TITLE_TYPES.C_LEVEL_AND_IT]: {
        category: "C-Level & IT",
        color: "white",
        background: "#FA6B00",
        fill: true,
    },
    [JOB_TITLE_TYPES.MEDICAL]: {
        category: "Medical",
        color: "white",
        background: "#EF3631",
        fill: true,
    },
    [JOB_TITLE_TYPES.DIRECTOR_LEVEL_AND_IT]: {
        category: "Director Level & IT",
        color: "white",
        background: "#6E3770",
        fill: true,
    },
    [JOB_TITLE_TYPES.IT]: {
        category: "IT",
        color: "white",
        background: "#9D9D9D",
        fill: true,
    },
    [JOB_TITLE_TYPES.MANAGER_LEVEL_AND_IT]: {
        category: "Manager Level & IT",
        color: "white",
        background: "#7FC44D",
        fill: true,
    },
    [JOB_TITLE_TYPES.VICE_PRESIDENT_AND_FINANCE]: {
        category: "Vice President & Finance",
        color: "white",
        background: "#10562E",
        fill: true,
    },
    [JOB_TITLE_TYPES.C_LEVEL_AND_FINANCE]: {
        category: "C-Level & Finance",
        color: "white",
        background: "#7B4BF8",
        fill: true,
    },
    [JOB_TITLE_TYPES.C_LEVEL_AND_DIRECTOR_LEVEL_AND_MANAGER_LEVEL]: {
        category: "C-Level & Director Level & Manager Level",
        color: "white",
        background: "#00A2E2",
        fill: true,
    },
    [JOB_TITLE_TYPES.VICE_PRESIDENT_AND_IT]: {
        category: "Vice President & IT",
        color: "white",
        background: "#408361",
        fill: true,
    },
    [COUNTRY_TYPES.SOUTH_AMERICA]: {
        category: "South America",
        color: "#00A2E2",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.EUROPE]: {
        category: "Europe",
        color: "#BA3628",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.AUSTRALIA_AND_NEW_ZEALAND]: {
        category: "Australia & New Zealand",
        color: "#FA6B00",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.MIDDLE_EAST]: {
        category: "Middle East",
        color: "#6E3770",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.AFRICA]: {
        category: "Africa",
        color: "#7FC44D",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.NORTH_AMERICA]: {
        category: "North America",
        color: "#56707C",
        background: "white",
        fill: false,
    },
    [COUNTRY_TYPES.ASIA]: {
        category: "Asia",
        color: "#DF376F",
        background: "white",
        fill: false,
    },
};

export default getBadgeInfo;