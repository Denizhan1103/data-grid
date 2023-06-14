import { tableData, rowPerPage } from "../mock";

export const tableMetaData = {
  totalDataCount: 4,
  currentPage: 1,
  rowPerPage: 4,
};

const storageTableDataKey = "tableData";
const storageRowPerPageKey = "rowPerPage";
const defaultRowPerPageValue = rowPerPage;

const checkStorageDataValidity = () => {
  const tableData = JSON.parse(localStorage.getItem(storageTableDataKey) || "");
  if (Array.isArray(tableData)) {
    let currentStatus = true;
    tableData.map((perVal) => {
      if (!("id" in perVal)) {
        currentStatus = false;
      }
    });
    return currentStatus;
  }
  return false;
};

const createMetaData = (currentPage: number) => {
  const data = JSON.parse(localStorage.getItem(storageTableDataKey) || "");

  return {
    totalDataCount: data.length,
    currentPage,
    rowPerPage: Number(localStorage.getItem(storageRowPerPageKey)),
  };
};

const serviceMiddleware = () => {
  if (!checkStorageDataValidity()) {
    localStorage.setItem(storageTableDataKey, JSON.stringify(tableData));
  }
  if (!Number(localStorage.getItem(storageRowPerPageKey))) {
    localStorage.setItem(
      storageRowPerPageKey,
      JSON.stringify(defaultRowPerPageValue)
    );
  }
};

const storageService = () => {
  serviceMiddleware();

  const getAllSocialMedia = (currentPage: number, itemCount: number) => {
    const socialMediaList = JSON.parse(
      localStorage.getItem(storageTableDataKey) || ""
    );
    const totalPageCount = Math.ceil(socialMediaList.length / itemCount);
    return {
      data: "",
      meta: "",
    };
  };
  const getSingleSocialMedia = () => {};
  const addSocialMedia = () => {};
  const updateSocialMedia = () => {};
  const deleteSocialMedia = () => {};

  return {
    getAllSocialMedia,
    getSingleSocialMedia,
    addSocialMedia,
    updateSocialMedia,
    deleteSocialMedia,
  };
};

export default storageService;
