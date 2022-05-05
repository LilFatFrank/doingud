import { useWeb3React } from "@web3-react/core";
import { createContext, useEffect, useState } from "react";
import { injectors } from "../wallet/connectors";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userNFTs, setUserNFTs] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 50
  });
  const [allReceived, setAllReceived] = useState(false);
  const [loadingNFTs, setLoadingNFTs] = useState(false);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const { active, activate, deactivate, account } = useWeb3React();

  useEffect(() => {
    if (window.location.pathname.length > 1) {
      setAddress(window.location.pathname.slice(1));
    }
  }, []);

  useEffect(() => {
    if (
      userNFTs &&
      userNFTs?.length &&
      !allReceived &&
      userNFTs?.length < 250
    ) {
      updatePagination();
    }
  }, [userNFTs]);

  useEffect(() => {
    if (address) getNFTs(pagination);
  }, [address]);

  useEffect(() => {
    if (active) {
      getNFTs(pagination);
      window.history.replaceState(null, "", `/${account}`);
    }
  }, [active]);

  useEffect(() => {
    if (active || address) getNFTs(pagination);
  }, [pagination]);

  const updatePagination = () => {
    setPagination({
      ...pagination,
      offset: pagination["offset"] + pagination["limit"]
    });
  };

  const getNFTs = async (params = pagination) => {
    setLoadingNFTs(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${
          account || address
        }&offset=${params["offset"]}&limit=${params["limit"]}`,
        {
          headers: {
            Accept: "application/json",
            "X-API-KEY": process.env.REACT_APP_API_KEY
          }
        }
      );
      const data = await response.json();
      setLoadingNFTs(false);
      if (data) {
        if (data?.assets?.length === 0 || data?.assets?.length < 50)
          setAllReceived(true);
        setUserNFTs([...userNFTs, ...data?.assets]);
      }
    } catch (error) {
      console.log(error);
      setUserNFTs([]);
      setError(true);
      setLoadingNFTs(false);
    }
  };

  async function connect() {
    try {
      if (!active) {
        setUserNFTs([]);
        setAddress("");
        setLoadingNFTs(false);
        setPagination({
          offset: 0,
          limit: 50
        });
      }
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnect() {
    try {
      setUserNFTs([]);
      deactivate();
    } catch (e) {
      console.log(e);
    }
  }

  const providerValue = {
    connect,
    disconnect,
    active,
    address,
    account,
    userNFTs,
    getNFTs,
    loadingNFTs,
    error,
    allReceived,
    updatePagination
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
