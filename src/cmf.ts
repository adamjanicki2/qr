export type Series = "series25" | "series26" | "dnd";
export type Minifigure = {
  name: string;
  image: string;
  series?: Series;
  codes: string[];
};

const SERIES_LABELS: Record<Series, { year: string; label: string }> = {
  series25: { label: "Series 25", year: "2024" },
  series26: { label: "Series 26", year: "2024" },
  dnd: { label: "Dungeons & Dragons", year: "2024" },
};

export const seriesLabel = (series: Series) => {
  const info = SERIES_LABELS[series];
  if (!info) return series;
  const { label, year } = info;
  return `${label} (${year})`;
};

export const SERIES: Record<Series, Minifigure[]> = {
  series25: [
    {
      name: "Noir Detective",
      image: "https://images.brickset.com/sets/large/71045-1.jpg?202312020345",
      codes: ["6471965", "6472866"],
    },
    {
      name: "Gamer",
      image: "https://images.brickset.com/sets/large/71045-2.jpg?202312020345",
      codes: ["6471969", "6472870"],
    },
    {
      name: "Vampire Knight",
      image: "https://images.brickset.com/sets/large/71045-3.jpg?202312020345",
      codes: ["6471970", "6472871"],
    },
    {
      name: "Para-athlete",
      image: "https://images.brickset.com/sets/large/71045-4.jpg?202312020345",
      codes: ["6471966", "6472867"],
    },
    {
      name: "Goat Guy",
      image: "https://images.brickset.com/sets/large/71045-5.jpg?202312020345",
      codes: ["6471962", "6472863"],
    },
    {
      name: "Mushroom Girl",
      image: "https://images.brickset.com/sets/large/71045-6.jpg?202312020345",
      codes: ["6471961", "6472862"],
    },
    {
      name: "Crossfitter",
      image: "https://images.brickset.com/sets/large/71045-7.jpg?202312020345",
      codes: ["6471960", "6472861"],
    },
    {
      name: "Triceratops Guy",
      image: "https://images.brickset.com/sets/large/71045-8.jpg?202312020345",
      codes: ["6471968", "6472869"],
    },
    {
      name: "Harpy",
      image: "https://images.brickset.com/sets/large/71045-9.jpg?202312020345",
      codes: ["6471963", "6472864"],
    },
    {
      name: "Train Kid",
      image: "https://images.brickset.com/sets/large/71045-10.jpg?202312020345",
      codes: ["6471964", "6472865"],
    },
    {
      name: "Barbarian",
      image: "https://images.brickset.com/sets/large/71045-11.jpg?202312020345",
      codes: ["6471959", "6472860"],
    },
    {
      name: "Dog Groomer",
      image: "https://images.brickset.com/sets/large/71045-12.jpg?202312020345",
      codes: ["6471967", "6472868"],
    },
  ],
  series26: [
    {
      name: "Astronaut",
      image: "https://images.brickset.com/sets/large/71046-1.jpg?202403271143",
      codes: ["6484928", "6484696"],
    },
    {
      name: "Imposter",
      image: "https://images.brickset.com/sets/large/71046-2.jpg?202403271143",
      codes: ["6484919", "6484687"],
    },
    {
      name: "Alien Tourist",
      image: "https://images.brickset.com/sets/large/71046-3.jpg?202403271143",
      codes: ["6484926", "6484694"],
    },
    {
      name: "Retro Space Heroine",
      image: "https://images.brickset.com/sets/large/71046-4.jpg?202403271143",
      codes: ["6484922", "6484690"],
    },
    {
      name: "M-Tron Powerlifter",
      image: "https://images.brickset.com/sets/large/71046-5.jpg?202403271143",
      codes: ["6484925", "6484693"],
    },
    {
      name: "Nurse Android",
      image: "https://images.brickset.com/sets/large/71046-6.jpg?202403271143",
      codes: ["6484923", "6484691"],
    },
    {
      name: "Flying Saucer Guy",
      image: "https://images.brickset.com/sets/large/71046-7.jpg?202403271143",
      codes: ["6484924", "6484692"],
    },
    {
      name: "Ice Planet Explorer",
      image: "https://images.brickset.com/sets/large/71046-8.jpg?202403271143",
      codes: ["6484918", "6484696"],
    },
    {
      name: "Robot Butler",
      image: "https://images.brickset.com/sets/large/71046-9.jpg?202403271143",
      codes: ["6484920", "6484688"],
    },
    {
      name: "Galaxy Squad-like Alien",
      image: "https://images.brickset.com/sets/large/71046-10.jpg?202403271143",
      codes: ["6484921", "6484689"],
    },
    {
      name: "Orion",
      image: "https://images.brickset.com/sets/large/71046-11.jpg?202403271143",
      codes: ["6484927", "6484695"],
    },
    {
      name: "Blacktron Mutant",
      image: "https://images.brickset.com/sets/large/71046-12.jpg?202403271143",
      codes: ["6484917", "6484685"],
    },
  ],
  dnd: [
    {
      name: "Dwarf Barbarian",
      codes: ["6506754", "6502839", "6506740"],
      image: "https://images.brickset.com/news/112352_Dungeons%203.jpg",
    },
    {
      name: "Gith Warlock",
      codes: ["6506757", "6502842", "6506743"],
      image: "https://images.brickset.com/news/112352_Dungeons%208.jpg",
    },
    {
      name: "Tiefling Sorcerer",
      codes: ["6506751", "6502836", "6506737"],
      image: "https://images.brickset.com/news/112352_Dungeons%2013.jpg",
    },
    {
      name: "Dragonborn Paladin",
      codes: ["6506755", "6502840", "6506741"],
      image: "https://images.brickset.com/news/112352_Dungeons%2018.jpg",
    },
    {
      name: "Halfling Druid",
      codes: ["6506753", "6502838"],
      image: "https://images.brickset.com/news/112352_Dungeons%2021.jpg",
    },
    {
      name: "Aarakocra Ranger",
      codes: ["6506756", "6502841", "6506742"],
      image: "https://images.brickset.com/news/112352_Dungeons%2026.jpg",
    },
    {
      name: "Mind Flayer",
      codes: ["6506758", "6502843", "6506744"],
      image: "https://images.brickset.com/news/112352_Dungeons%2029.jpg",
    },
    {
      name: "Strahd von Zarovich",
      codes: ["6506760", "6502845", "6506746"],
      image: "https://images.brickset.com/news/112352_Dungeons%2032.jpg",
    },
    {
      name: "Elf Bard",
      codes: ["6506752", "6502837", "6506738"],
      image: "https://images.brickset.com/news/112352_Dungeons%2035.jpg",
    },
    {
      name: "The Lady of Pain",
      codes: ["6506759", "6502844", "6506745"],
      image: "https://images.brickset.com/news/112352_Dungeons%2040.jpg",
    },
    {
      name: "Szass Tam",
      codes: ["6506762", "6502847", "6506748"],
      image: "https://images.brickset.com/news/112352_Dungeons%2043.jpg",
    },
    {
      name: "Tasha the Witch Queen",
      codes: ["6506761", "6502846", "6506747"],
      image: "https://images.brickset.com/news/112352_Dungeons%2046.jpg",
    },
  ],
};

export const ALL_MINIFIGURES = Object.entries(SERIES).flatMap(
  ([series, minifigures]) => minifigures.map((mini) => ({ ...mini, series }))
) as readonly Minifigure[];

export const findMinifigure = (code: string | null): Minifigure | null => {
  if (!code) return null;
  return (
    ALL_MINIFIGURES.find((mini) =>
      mini.codes.some((c) => code.startsWith(c))
    ) || null
  );
};
