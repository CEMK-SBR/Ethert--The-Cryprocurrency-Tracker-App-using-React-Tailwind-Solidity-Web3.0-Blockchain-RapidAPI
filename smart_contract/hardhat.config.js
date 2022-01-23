require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/EnoE1nvabKbY9oG8rlxsFvDWmz2Ap6oe",
      accounts: [
        "a0e6b985dc00ff2c17539f9f5a8514ee3d327351c243575684ddc8be94eb5a62",
      ],
    },
  },
};
