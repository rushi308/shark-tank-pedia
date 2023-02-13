import moment from "moment";

export const convertDate = (date: string): string => {
  if (!date) {
    return "";
  }
  return moment(date).format("MMM DD yyyy");
};

export const myLoader = ({ src }: any) => `${src}`;
