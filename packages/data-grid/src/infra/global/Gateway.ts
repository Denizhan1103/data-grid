import GatewayStorageAdapter from "../adapter";

const GatewayAdapters = {
  storage: GatewayStorageAdapter,
};

const gateway = () => {
  return GatewayAdapters.storage();
};

export default gateway;
