import { useState, useEffect, useMemo } from 'react'

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

const providerOptions = {
  injected: {
    display: {
      logo: 'data:image/gif;base64,INSERT_BASE64_STRING',
      name: 'Injected',
      description: 'Connect with the provider in your Browser',
    },
    package: null,
  },
}

export default function useWallet() {
  const [instance, setInstance] = useState()
  const [modal, setmodal] = useState(null)

  useEffect(() => {
    const web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: false, // optional
      theme: 'dark',
      providerOptions, // required
    })

    setmodal(web3Modal)
  }, [])

  async function connect() {
    const init = await modal.connect()
    setInstance(init)
  }

  function disconnect() {
    console.log('Disconecting...')
    modal.clearCachedProvider()
  }

  const provider = useMemo(() => {
    if (!instance) return undefined
    console.log('Getting provider...')
    return new ethers.providers.Web3Provider(instance)
  }, [instance])

  const signer = useMemo(() => {
    if (!provider) return undefined
    console.log('Getting signer')
    return provider.getSigner()
  }, [provider])

  return { disconnect, connect, provider, signer }
}
