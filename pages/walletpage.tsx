import useWallet from '../hooks/useWallet'

export default function walletpage() {
  const { provider, disconnect, connect, signer } = useWallet()
  function log() {
    console.log(provider)
    console.log(signer)
  }

  return (
    <div>
      <button onClick={() => connect()}>Connect to Wallet</button>
      <br />
      <button onClick={() => disconnect()}>Disconnect</button>
      <br />
      <button onClick={() => log()}>Log</button>
      <pre>{signer ? null : JSON.stringify(signer, null, 2)}</pre>
    </div>
  )
}
