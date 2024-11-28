import dayjs from "dayjs";

export const formatDate = (dateString: string | undefined) => {
  return dayjs(dateString).format("YYYY-MM-DD");
};
