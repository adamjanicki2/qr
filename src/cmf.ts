export type Series = "series25";
export type Minifigure = {
  name: string;
  image: string;
  series?: Series;
  codes: string[];
};

const SERIES_LABELS: Record<Series, { year: string; label: string }> = {
  series25: { label: "Series 25", year: "2024" },
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
};

export const ALL_MINIFIGURES = Object.entries(SERIES).flatMap(
  ([series, minifigures]) => minifigures.map((mini) => ({ ...mini, series }))
) as readonly Minifigure[];

export const findMinifigure = (code: string): Minifigure | null => {
  // find minifigure where one of the codes starts the string code
  return (
    ALL_MINIFIGURES.find((mini) =>
      mini.codes.some((c) => code.startsWith(c))
    ) || null
  );
};
