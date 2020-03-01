import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

function BlockNumber() {
  const { chainId, library } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState<number | null | undefined>();

  useEffect(() => {
    if (!!library) {
      let stale = false;

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber);
      };
      library.on('block', updateBlockNumber);

      return () => {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span role="img" aria-label="numbers">
        🔢
      </span>
      <span>
        {typeof blockNumber === 'number'
          ? blockNumber.toLocaleString()
          : blockNumber === null
          ? 'Error'
          : !!library
          ? '...'
          : 'awaiting connection...'}
      </span>
    </>
  );
}

export default BlockNumber;
