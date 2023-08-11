import moment from "moment";

export const convertDate = (date: string): string => {
  if (!date) {
    return "";
  }
  return moment(date).format("MMM DD yyyy");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toBase64 = (file: File) :any => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const myLoader = ({ src }: any) => `${src}`;
