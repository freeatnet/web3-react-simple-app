import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import ethers from 'ethers';
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERC20_ABI = require('./erc20.abi.json');

type Erc20DetailsObject = {
  name?: string;
  symbol?: string;
};

function TokenInfo({ address }: { address: string }) {
  const { library, account } = useWeb3React<Web3Provider>();

  const [tokenDetails, setTokenDetails] = useState<Erc20DetailsObject | null>(
    null
  );

  useEffect(() => {
    if (!!library && typeof address !== 'undefined') {
      const contract = new ethers.Contract(address, ERC20_ABI, library);

      (async () => {
        const [name, symbol] = await Promise.all([
          contract.name(),
          contract.symbol(),
        ]);

        setTokenDetails({ name, symbol });
      })();
    }
  }, [account, address, library]);

  return (
    <div>
      {address}: {tokenDetails && tokenDetails.name}{' '}
      {tokenDetails && tokenDetails.symbol}
    </div>
  );
}

export default TokenInfo;
