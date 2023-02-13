import moment from "moment";

export const convertDate = (date: string): string => {
  if (!date) {
    return "";
  }
  return moment(date).format("MMM DD yyyy");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const myLoader = ({ src }: any) => `${src}`;
