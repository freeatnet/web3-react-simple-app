# web3-react-simple-app

This is a simple, structured sample of using [web3-react](https://github.com/NoahZinsmeister/web3-react).

The app fetches the block number and some basic information about DAI token, demonstrating use of basic functions and contract interactions.

## Use-cases

The app demonstrates the following use-cases:

1. A MetaMask user who has previously authorized the app will be automatically signed in with their current account if their MetaMask is unlocked.
2. Otherwise:
    * the user will be connected to the Ethereum network using a [NetworkConnector](https://github.com/NoahZinsmeister/web3-react/blob/v6/docs/connectors/network.md) to retrieve the block number and basic information about DAI token;
    * the user will be presented with a "Connect with MetaMask" button that allows them to unlock / connect their account.
3. Should the user unlock their MetaMask while on the website, the app will not change state until the user clicks "Connect with MetaMask".
4. Should the user lock their MetaMask while on the website, they will be logged out of the app automatically.

## Show me the code

See [`features/web3`](src/features/web3) for the `web3-react` setup. Note that `Web3Provider` wraps `App` in `index.tsx`, and a `Web3ConnectionManager` wraps the rest of the app in `App.tsx`.

## Notes

* The app is written in TypeScript.
* The app uses `ethers@5.0.0-beta.175`, which is [recommended](https://github.com/ethers-io/ethers.js/tree/ethers-v5-beta#the-ethers-project) for use with new projects, but has limited documentation.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Learn more in [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* This app should provide a good starter point, but check out [uniswap-frontend](https://github.com/Uniswap/uniswap-frontend) for a more sophisticated setup.

## Contributing
Feel like you can improve this example? PRs are welcome! Just remember that this is intended as starter code. :)

## Contributors & Acknowledgements

Contributors:
* [Arseniy Ivanov](https://github.com/freeatnet), 2020

Wouldn't be possible without:
* [Noah Zinsmeister](https://github.com/NoahZinsmeister), who built web3-react


## License

See [UNLICENSE](UNLICENSE) for details.