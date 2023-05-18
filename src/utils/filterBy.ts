export const filterBy = (
  podcasts: any[] | undefined,
  searchValue: string,
  ...fields: string[]
) => {
  return podcasts?.filter((podcast: any) => {
    return fields.some((field) => {
      return podcast[field]?.toLowerCase().includes(searchValue.toLowerCase());
    });
  });
};
